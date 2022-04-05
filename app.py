"""
Main App
"""

import os
import re
import flask
import flask_login
from dotenv import find_dotenv, load_dotenv
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, AppUser, Review
from api import get_movie
from spoonacular import search_recipe, search_ingredients

# modify database url environment variable so it is usable by SQLAlchemy
load_dotenv(find_dotenv())
uri = os.getenv("DATABASE_URL")
if uri.startswith("postgres://"):
    uri = uri.replace("postgres://", "postgresql://", 1)

# initialize application, database, and flask-login
app = flask.Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = uri
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = os.getenv("SECRET_KEY")


db.init_app(app)

with app.app_context():
    db.create_all()

login_manager = flask_login.LoginManager()
login_manager.init_app(app)


@login_manager.user_loader
def user_loader(user_id):
    """
    returns user id,
    required by flask-login
    """
    return AppUser.query.get(user_id)


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    """
    root page
    """
    if not flask_login.current_user.is_authenticated:
        return flask.redirect(flask.url_for("login"))
    return flask.render_template("index.html")


@app.route("/search", methods=["POST"])
@flask_login.login_required
def search():
    """
    search the spoonacular api
    """
    data = flask.request.json
    number = data["length"]
    if data["type"] == "Recipes":
        results = search_recipe(data["query"], number)
    else:
        results = search_ingredients(data["query"], number)
    return flask.jsonify(results)


"""
@app.route("/movie")
def movie():
"""
"""
    movie page
    Sends API data and reviews to the movie template
"""
"""
    if not flask_login.current_user.is_authenticated:
        return flask.redirect(flask.url_for("login"))
    mov = get_movie()
    if mov == "apierror":
        return flask.render_template("error.html")
    reviews = Review.query.filter_by(movie_id=mov["id"])
    return flask.render_template(
        "movie.html", movie=mov, comments=reviews, users=AppUser
    )
"""

"""
@app.route("/movie/<int:mov_id>")
def movie_id(mov_id):
"""
"""
    Movie page, but enables manual selection of a movie from whitelist
    If the movie is not whitelisted, then the get_movie function
    will just fetch a random movie instead
"""
"""
    if not flask_login.current_user.is_authenticated:
        return flask.redirect(flask.url_for("login"))
    mov = get_movie(mov_id)
    if mov == "apierror":
        return flask.render_template("error.html")
    reviews = Review.query.filter_by(movie_id=mov["id"])
    return flask.render_template(
        "movie.html", movie=mov, comments=reviews, users=AppUser
    )
"""


@app.route("/login")
def login():
    """
    Display login page
    """
    return flask.render_template("login.html")


@app.route("/login", methods=["POST"])
def login_post():
    """
    Login the user
    Ensures username is valid, otherwise reprompting the user to login again
    """
    # data = flask.request.form
    email = flask.request.form.get("email")
    password = flask.request.form.get("password")

    regex = re.compile(
        r"([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(.[A-Z|a-z]{2,})+"
    )
    if re.fullmatch(regex, email):
        user = AppUser.query.filter_by(email=email).first()

        # check if user actually exists
        # take the user supplied password, hash it, and compare it to the hashed password in database
        if not user or not check_password_hash(user.password, password):
            flask.flash("Please check your login details and try again.")
            return flask.redirect(flask.url_for("login"))

        # if data["username"] == "":
        # flask.flash("Please enter a username")
        # return flask.redirect(flask.url_for("login"))
        # query = AppUser.query.filter_by(username=data["username"]).first()
        if user is not None:
            flask_login.login_user(user)
            return flask.redirect(flask.url_for("index"))
        else:
            flask.flash("User does not exist")
            return flask.redirect(flask.url_for("login"))
    else:
        flask.flash("Please check your email")
        return flask.redirect(flask.url_for("login"))


@app.route("/register")
def register():
    """
    Display register page
    """
    return flask.render_template("register.html")


@app.route("/register", methods=["POST"])
def register_post():
    """
    Register the user
    Validates that username is a valid username,
    and that the username does not already exist in the database.
    Upon successful registration, user is redirected to login page.
    """
    data = flask.request.form

    email = flask.request.form.get("email")
    username = flask.request.form.get("username")
    password = flask.request.form.get("password")

    regex = re.compile(
        r"([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(.[A-Z|a-z]{2,})+"
    )
    if re.fullmatch(regex, email):
        user = AppUser.query.filter_by(
            email=email
        ).first()  # if this returns a user, then the email already exists in database

        if (
            user
        ):  # if a user is found, we want to redirect back to signup page so user can try again
            flask.flash("Email address already exists")
            return flask.redirect(flask.url_for("register"))

        # create new user with the form data. Hash the password so plaintext version isn't saved.
        new_user = AppUser(
            email=email,
            username=username,
            password=generate_password_hash(password, method="sha256"),
        )
        if data["username"] == "":
            flask.flash("Please enter a username")
            return flask.redirect(flask.url_for("register"))
        # new_user = AppUser(username=data["username"])
        # query = AppUser.query.filter_by(username=new_user.username).first()
        if new_user is not None:
            db.session.add(new_user)
            db.session.commit()
        else:
            flask.flash("User already signed up")
            return flask.redirect(flask.url_for("register"))
        flask.flash("Successfully Registered")
        return flask.redirect(flask.url_for("login"))
    else:
        flask.flash("Please check your email")
        return flask.redirect(flask.url_for("register"))


@app.route("/logout")
@flask_login.login_required
def logout():
    """
    Logout the user
    """
    flask_login.logout_user()
    return flask.redirect(flask.url_for("login"))


"""
@app.route("/comment", methods=["POST"])
@flask_login.login_required
def comment():
"""
"""
    Handles posted comments
    If the server rejects the sent data, it will reload the page with the same movie ID.
"""
"""
    data = flask.request.form
    # Ensures that the rating is a number, and that it ranges from 0-10.
    if re.fullmatch(r"\d+", data["rating"]) is not None:
        if int(data["rating"]) not in range(0, 11):
            flask.flash("Please enter a valid rating")
            return flask.redirect(flask.url_for("movie_id", mov_id=data["movie_id"]))
        else:
            # Make sure comment is not blank
            if len(data["comment"]) == 0:
                flask.flash("Please enter a comment")
                return flask.redirect(
                    flask.url_for("movie_id", mov_id=data["movie_id"])
                )
            new_review = Review(
                movie_id=data["movie_id"],
                rating=data["rating"],
                comment=data["comment"],
                user_id=str(flask_login.current_user.id),
            )
            # query for reviews made for this movie by the current user
            # makes sure the user has not already posted a comment
            query = Review.query.filter_by(
                user_id=new_review.user_id, movie_id=new_review.movie_id
            ).first()
            if query is None:
                db.session.add(new_review)
                db.session.commit()
            else:
                flask.flash("You have already posted a comment for this movie")
                return flask.redirect(
                    flask.url_for("movie_id", mov_id=data["movie_id"])
                )
            # when the review is approved, the page for the same movie is reloaded
            return flask.redirect(flask.url_for("movie_id", mov_id=data["movie_id"]))
    else:
        # Prompted if the rating is not a number
        flask.flash("Please enter a valid rating")
        return flask.redirect(flask.url_for("movie_id", mov_id=data["movie_id"]))
"""

"""
@app.route("/comments")
@flask_login.login_required
def comments():
"""
"""
    Return all of current user's posted reviews in JSON format
"""
"""
    query = Review.query.filter_by(user_id=flask_login.current_user.id).all()
    reviews = []
    for review in query:
        reviews.append(
            {
                "movie_id": review.movie_id,
                "rating": review.rating,
                "comment": review.comment,
            }
        )
    return flask.jsonify(reviews)
"""

"""
@app.route("/update", methods=["POST"])
@flask_login.login_required

def update():
"""
"""
    update user's comments
"""
"""    
    data = flask.request.json
    # first query for all of the users already posted comments, and then delete them
    query = Review.query.filter_by(user_id=flask_login.current_user.id).all()
    for review in query:
        db.session.delete(review)

    # generate Review instances from received JSON data, and add them back to the database
    for review in data:
        new_review = Review(
            movie_id=review["movie_id"],
            rating=review["rating"],
            comment=review["comment"],
            user_id=str(flask_login.current_user.id),
        )
        db.session.add(new_review)
    db.session.commit()

    # notify client that their Reviews have been updated
    return flask.jsonify("Changes successfully saved")
"""


@app.route("/username")
@flask_login.login_required
def username():
    """
    API endpoint to get the currently logged-in user's username
    """
    return flask.jsonify(flask_login.current_user.username)


if __name__ == "__main__":
    app.run(
        host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 8080)), debug=True
    )
