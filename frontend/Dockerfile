# Usa una imagen oficial de Node.js como imagen base
FROM node:14-alpine AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación al directorio de trabajo
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Usa una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos estáticos construidos por React desde la imagen anterior
COPY --from=build /app/build /usr/share/nginx/html

# Copia el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80 para que pueda ser accesible
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
