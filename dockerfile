# Usa una imagen base de Node.js
FROM node:22.4.1

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación al directorio de trabajo
COPY . .

# Elimina node_modules y reinstala dependencias para asegurarnos de que estén correctas
#RUN rm -rf node_modules && npm install

# Expone el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando para correr la aplicación
CMD ["node", "src/app.js"]
