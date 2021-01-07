# pull official base image
FROM python:3.8-alpine

# set work directory
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DEBUG 0

# install psycopg2
RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
    && apk add postgresql-dev \
    && pip install psycopg2 \
    && apk del build-deps




#Install dependencies
COPY ./requirements.txt .
RUN pip install -r requirements.txt


# copy project
RUN mkdir -p /app
WORKDIR /app
COPY ./app /app

#Django related  command 
COPY ./django_entrypoint.sh /django_entrypoint.sh
RUN chmod +x /django_entrypoint.sh


# add and run as non-root user
RUN adduser -D myuser
USER myuser

# run gunicorn
CMD python manage.py runserver 0.0.0.0:$PORT

