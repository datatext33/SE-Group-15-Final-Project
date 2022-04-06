import os
import random
from dotenv import find_dotenv, load_dotenv
import flask
from flask_login import (
    UserMixin,
    login_user,
    LoginManager,
    login_required,
    logout_user,
    current_user,
)
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_sqlalchemy import SQLAlchemy
from tmbapi import grabmovie, genres
from wiki import wiki

app = flask.Flask(__name__)
bp = flask.Blueprint(
    "bp",
    __name__,
    template_folder="./static/react",
)
load_dotenv(find_dotenv())
app.secret_key = os.getenv("secretkey")
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("database_url")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

movie = [
    "sing 2",
    "ghostbusters afterlife",
    "how to train your dragon",
    "encanto",
    "magic mike",
]
amount = [0, 1, 2, 3, 4]

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"


@login_manager.user_loader
def load_user(user_id):
    return Users.query.get(int(user_id))


class Users(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)


class comments(db.Model):
    __tablename__ = "comments"
    id = db.Column(db.Integer, primary_key=True)
    item = db.Column(db.String, nullable=False)
    comment = db.Column(db.String, nullable=False)
    username = db.Column(db.String, nullable=False)


class ratings(db.Model):
    __tablename__ = "ratings"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    movie_ID = db.Column(db.Integer, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    review = db.Column(db.String(100), nullable=True)

    def __init__(self, username, movie_ID, rating, review):
        self.username = username
        self.movie_ID = movie_ID
        self.rating = rating
        self.review = review

    @property
    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "movie_ID": self.movie_ID,
            "rating": self.rating,
            "review": self.review,
        }

    @property
    def serialize_many(self):
        return [item.serialize for item in self.ratings]


db.create_all()


class RegisterForm(FlaskForm):
    username = StringField(
        validators=[InputRequired(), Length(min=6, max=50)],
        render_kw={"placeholder": "Username"},
    )
    submit = SubmitField("Register")

    def validate_username(self, username):
        existing_user_username = Users.query.filter_by(username=username.data).first()
        if existing_user_username:
            raise ValidationError("Username taken.")


class LoginForm(FlaskForm):
    username = StringField(
        validators=[InputRequired(), Length(min=6, max=50)],
        render_kw={"placeholder": "Username"},
    )
    submit = SubmitField("Login")


@app.route("/", methods=["GET", "POST"])
def register():
    form = RegisterForm()
    if form.validate_on_submit():
        new_user = Users(username=form.username.data)
        db.session.add(new_user)
        db.session.commit()
        return flask.redirect(flask.url_for("login"))
    if Users.query.filter_by(username=form.username.data).first():
        flask.flash("Username taken.")
    return flask.render_template("register.html", form=form)


@app.route("/login", methods=["GET", "POST"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = Users.query.filter_by(username=form.username.data).first()
        if user:
            login_user(user)
            return flask.redirect(flask.url_for("main"))
        else:
            flask.flash("User does not exist")
    return flask.render_template("login.html", form=form)


@app.route("/logout", methods=["GET", "POST"])
@login_required
def logout():
    logout_user()
    return flask.redirect(flask.url_for("login"))


@app.route("/main")
@login_required
def main():
    i = random.choice(amount)
    data = grabmovie(movie[i])
    genreData = data["id"]
    name = genres(genreData)
    genre = name["name"]
    title = data["title"]
    URL = wiki(movie[i])
    overview = data["overview"]
    poster_path = data["poster_path"]
    return flask.render_template(
        "main.html",
        title=title,
        overview=overview,
        id=genre,
        poster_path=poster_path,
        URL=URL,
    )


@app.route("/review", methods=["GET", "POST"])
@login_required
def review():
    try:
        data = flask.request.form
        movies = data["movieID"]
        index = genres(movies)
        movieinfo = grabmovie(index["titles"])
        titles = index["titles"]
        website = wiki(titles)
        overviews = index["overviews"]
        photos = movieinfo["poster_path"]
        genre = index["name"]
        new_rating = ratings(
            username=current_user.username,
            movie_ID=data["movieID"],
            rating=data["rating"],
            review=data["review"],
        )
        db.session.add(new_rating)
        db.session.commit()
        rows = ratings.query.filter_by(movie_ID=movies).all()
        return flask.render_template(
            "display.html",
            rows=rows,
            movie=movies,
            genres=genre,
            poster_path=photos,
            titles=titles,
            overviews=overviews,
            websites=website,
        )
    except:
        flask.flash("movieID does not exist.")
        return flask.redirect(flask.url_for("main"))


@bp.route("/index")
def index():
    return flask.render_template("index.html")


@bp.route("/getjson", methods=["GET"])
@login_required
def get_ratings():
    return flask.jsonify(
        results=[
            i.serialize
            for i in ratings.query.filter_by(username=current_user.username).all()
        ]
    )


@app.route("/ratings/<id>", methods=["DELETE"])
@login_required
def delete_rating(id):
    response = {}
    rating = ratings.query.get(id)
    response["id"] = rating.id
    db.session.delete(rating)
    db.session.commit()
    return "Done", 201


@app.route("/edit", methods=["POST"])
@login_required
def edit():
    data = flask.request.form
    dataQuery = ratings.query.get(data["id"])
    if dataQuery == None:
        return flask.redirect(flask.url_for("bp.index"))
    if dataQuery.username == current_user.username:
        dataQuery.rating = data["rating"]
        dataQuery.review = data["review"]
        db.session.commit()
    return flask.render_template("index.html")


@app.route("/comment", methods=["GET", "POST"])
@login_required
def comment():
    query = comments.query.filter_by(username=current_user.username).all()
    user = current_user.username
    return flask.render_template(
        "comment.html",
        query=query,
        user=user,
    )


@app.route("/saveComment", methods=["GET", "POST"])
@login_required
def saveComment():
    data = flask.request.form
    newinfo = comments(
        item=data["item"], comment=data["comment"], username=current_user.username
    )
    db.session.add(newinfo)
    db.session.commit()
    return flask.redirect(flask.url_for("comment"))


@app.route("/removeComment", methods=["GET", "POST"])
@login_required
def removeComment():
    data = flask.request.form
    newinfo = comments.query.get(data["id"])
    db.session.delete(newinfo)
    db.session.commit()
    return flask.redirect(flask.url_for("comment"))


app.register_blueprint(bp)

app.run(debug=True)