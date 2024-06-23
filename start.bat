@echo off
set DATA_POSTGRES=./postgres-data
if exist "%DATA_POSTGRES%" (
   echo El directorio %DATA_POSTGRES% existe
) else (
   echo El directorio %DATA_POSTGRES% no existe
   mkdir %DATA_POSTGRES%
)
docker-compose up -d
docker-compose ls
docker-compose logs -f