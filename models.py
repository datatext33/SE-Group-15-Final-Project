from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()


class AppUser(UserMixin, db.Model):
    """
    User model
    """

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    reviews = db.relationship("Review", backref="app_user", lazy=True)


class Review(db.Model):
    """
    Review model
    """

    id = db.Column(db.Integer, primary_key=True)
    movie_id = db.Column(db.Integer, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(200), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("app_user.id"), nullable=False)
