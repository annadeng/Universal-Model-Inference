@echo off

:: Deploy the Perfume frontend locally. To override the deployment location, run:
:: localdeploy.bat "desired-deploy-location"    (with quotes)

:: Deployment location
set wwwlocation="C:\Program Files\Apache24\htdocs\perfume"
if "%~1" neq "" set wwwlocation="%~1"
echo ===== DEPLOYING PERFUME TO %wwwlocation% =====

:: Build frontend pages
echo ===== BUILDING FRONTEND PAGES =====
python Makefile.py

:: Copy all files to actual www directory
echo ===== DEPLOYING =====
set errorlevel=0
if not exist %wwwlocation% mkdir %wwwlocation%
if not exist %wwwlocation% (
  echo Could not create %wwwlocation%. Quitting
  exit 1
)
xcopy * %wwwlocation% /S /Q /Y

:: Prune files not needed by a deployment
echo ===== PRUNING DEV FILES FROM DEPLOYMENT =====
del %wwwlocation%\*.sh %wwwlocation%\*.bat %wwwlocation%\*.py %wwwlocation%\*.php %wwwlocation%\*.md
rmdir /s /q %wwwlocation%\template\
rmdir /s /q %wwwlocation%\syn-bin\
rmdir /s /q %wwwlocation%\.hg\
