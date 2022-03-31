# Project 1 - Milestone 3

## Technologies, Frameworks, Libraries, and APIs

This application uses Python and Node.js (for React).

To run this app, the python packages Flask, requests, python-dotenv, flask_login, flask_sqlalchemy, psycopg2 need to be installed through the `pip3 install` command.

For React, running the command `npm ci` will initialize the necessary Node modules for this application.

The app is built around the Flask framework and React, and utilizes the TMDB and Wikipedia APIs.  The TMDB API requires an API key, but the Wikipedia API does not. To get a TMDB API key, go to https://www.themoviedb.org/ and create an account.  In the settings page there is a form that can be filled out to receive an API key.

## Project Setup and Deployment

To use the TMBD API, create a file called .env, and add the line `export TMDB_KEY='your api key'`

Application contains Procfile and requirements.txt files, which enable it to be deployed using the Heroku command line interface.  The commands `heroku create` and `git push heroku your_branch` can be used.  A Postgresql database can be setup using the `heroku addons:create heroku-postgresql:hobby-dev`.  Using the `heroku config` command the DATABASE_URL variable can be added to the .env file.  Additionally a SECRET_KEY environment variable must be defined to enable the flask-login package to be used.

To build the application, `npx run build`
To run the application with hot reload, run `npx run start`

*Deployed Heroku URL*: 