#!/bin/bash

# Construction de l'image Docker pour le frontend
cd frontend
docker build -t frontend-image .
cd ..

# Construction de l'image Docker pour le backend
cd backend
docker build -t backend-image .
cd ..

# Démarrage des services avec Docker Compose
docker-compose up
