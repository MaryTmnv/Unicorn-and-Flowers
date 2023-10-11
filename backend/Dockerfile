FROM python:3.9-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

EXPOSE 8081

WORKDIR /opt/app

COPY requirements.txt /opt/app/
RUN pip install --no-cache-dir --disable-pip-version-check -r requirements.txt && apk add bash

COPY . /opt/app

VOLUME ["/media"]