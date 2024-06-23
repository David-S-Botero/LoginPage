export DATA_POSTGRES="./postgres-data"
if [ -d "$DATA_POSTGRES" ]
then
   echo "El directorio ${DATA_POSTGRES} existe"
else
   echo "El directorio ${DATA_POSTGRES} no existe"
   mkdir $DATA_POSTGRES
fi
docker compose up -d
docker compose ls
docker compose logs -f