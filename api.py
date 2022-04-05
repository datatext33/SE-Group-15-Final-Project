"""
Functions for accessing TMDB and Wikipedia APIs
Each of these functions will return 'apierror' if requests are unsuccessful
"""

import os
import random
import requests
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

# whitelisted movies for users to view on movies page
movies = ["11", "4935", "238", "157336", "13"]


def get_image_config():
    """
    get data for building image urls
    this includes the image url and image size
    """
    base_url = "https://api.themoviedb.org/3/configuration"
    params = {"api_key": os.getenv("TMDB_KEY")}

    try:
        response = requests.get(base_url, params=params)
        data = response.json()
        url = data["images"]["base_url"]
        size = data["images"]["poster_sizes"][-1]
    except (KeyError, requests.exceptions.JSONDecodeError):
        url = "apierror"
        size = "apierror"
    return url, size


image_base_url, poster_size = get_image_config()


def get_wiki_url(name):
    """
    get wikipedia url of movie
    """

    # first query fetches the pageid of the movie
    base_url = "https://en.wikipedia.org/w/api.php"
    params = {
        "action": "query",
        "format": "json",
        "list": "search",
        "srlimit": "1",
        "srsearch": name,
    }
    try:
        response = requests.get(base_url, params=params)
        data = response.json()
        pageid = data["query"]["search"][0]["pageid"]
    except (KeyError, requests.exceptions.JSONDecodeError):
        return "apierror"

    # second query gets the full url from the pageid
    params = {
        "action": "query",
        "format": "json",
        "prop": "info",
        "inprop": "url",
        "pageids": pageid,
    }
    try:
        response = requests.get(base_url, params=params)
        data = response.json()
        wiki_url = data["query"]["pages"][str(pageid)]["fullurl"]
    except (KeyError, requests.exceptions.JSONDecodeError):
        wiki_url = "apierror"
    return wiki_url


def get_movie(movie_id=None):
    """
    get info on movie from tmbd, combine with wikipedia url
    if requests are successful, movie data will be returned in a dictionary of the structure:
    {"id":.., "title":.., "tagline":.., "genres":.., "poster_path":.., "wiki_url":..}
    """

    # if the movie id is not whitelisted, then select a random movie instead
    if movie_id is not None and str(movie_id) in movies:
        movie_selection = movie_id
    else:
        movie_selection = random.choice(movies)

    base_url = "https://api.themoviedb.org/3/movie/"
    params = {"api_key": os.getenv("TMDB_KEY")}
    movie = {}
    try:
        response = requests.get(base_url + str(movie_selection), params=params)
        data = response.json()
        movie["id"] = data["id"]
        movie["title"] = data["title"]
        movie["tagline"] = data["tagline"]
        movie["genres"] = [genre["name"] for genre in data["genres"]]
        if image_base_url == "error" or poster_size == "error":
            return "apierror"
        movie["poster_path"] = image_base_url + poster_size + data["poster_path"]
        wiki_url = get_wiki_url(movie["title"])
        if wiki_url == "apierror":
            return "apierror"
        movie["wiki_url"] = wiki_url
    except (KeyError, requests.exceptions.JSONDecodeError):
        movie = "apierror"
    return movie
