#!/bin/sh
pip install --upgrade pip
python manage.py makemigrations
python manage.py migrate
exec "$@"