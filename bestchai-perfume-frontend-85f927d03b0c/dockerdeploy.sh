#!/bin/sh

# Deploy the Perfume frontend locally. To override the deployment location, run:
# ./localdeploy.sh desired-deploy-location

# Deployment location
wwwlocation=/var/www/html/perfume/
if [ "$1" != "" ]; then
  wwwlocation=$1
fi
echo ===== DEPLOYING PERFUME TO $wwwlocation =====

# Build frontend pages
echo ===== BUILDING FRONTEND PAGES =====
python Makefile.py

# Copy all files to actual www directory
echo ===== DEPLOYING =====
mkdir -p $wwwlocation
if [ $? != 0 ]; then
  echo Could not create $wwwlocation. Quitting
  exit 1
fi
cp -R ./* $wwwlocation
