# Rest Master Backend

## Descripción

Rest Master es un backend robusto y escalable diseñado para gestionar un ecosistema completo de usuarios, negocios, productos y reservaciones. Construido con Node.js, Express y MySQL, ofrece una API RESTful segura y eficiente.

## Características Principales

- Autenticación robusta con JWT
- Operaciones CRUD completas para usuarios, negocios, productos y reservaciones
- Asociaciones flexibles entre entidades
- Diseño escalable para manejar desde pequeños negocios hasta grandes cadenas
- Gestión de datos rica, incluyendo almacenamiento de imágenes y metadatos

## Tecnologías Utilizadas

- Node.js
- Express.js
- MySQL
- JSON Web Tokens (JWT)

## Estructura del Proyecto

```bash
Restaurant_Master/
│
├── src/
│   ├── controllers/
│   │   ├── businessesControllers/
│   │   ├── menusControllers/
│   │   ├── productsControllers/
│   │   ├── reservationControllers/
│   │   └── usersControllers/
│   │
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   │   ├── businessesModels/
│   │   ├── menuModels/
│   │   ├── productsModels/
│   │   ├── reservationModels/
│   │   └── usersModels/
│   │
│   ├── routes/
│   │   ├── businessesRoutes/
│   │   ├── menusRoutes/
│   │   ├── productsRoutes/
│   │   ├── reservationRoutes/
│   │   └── usersRoutes/
│   │
│   ├── services/
│   │   ├── businessesServices/
│   │   ├── menusServices/
│   │   ├── productsServices/
│   │   ├── reservationServices/
│   │   └── usersServices/
│   │
│   ├── app.js
│   └── routes.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
└── package-lock.json
```

## Instalación

1. Clona el repositorio:

   ``` bash
   git clone https://github.com/BlusterG05/Restaurant_Master.git
   ```

2. Instala las dependencias:

   ``` bash

   cd Restaurant_Master
   npm install
   ```

3. Configura las variables de entorno:
   - Copia `.env.example` a `.env`
   - Edita `.env` con tus configuraciones

4. Inicia el servidor:

   ``` node
   node ./src/app.js
   ```

## Uso

### URL Base

Todos los endpoints son relativos a: `http://localhost:3000/api/v1`

### Autenticación

La mayoría de los endpoints requieren un token JWT. Inclúyelo en el encabezado de Autorización:

``` cURL
Authorization: Bearer <tu_token_aquí>
```

### Endpoints

#### Usuarios

##### Obtener Todos los Usuarios

- **URL**: `/users`
- **Método**: `GET`
- **Autenticación requerida**: Sí
- **Permisos requeridos**: Ninguno
- **Respuesta Exitosa**:
  - **Código**: 200
  - **Contenido**: Array de objetos de usuario
- **Respuesta de Error**:
  - **Código**: 401 NO AUTORIZADO
  - **Contenido**: `{ "error": "Acceso no autorizado" }`

##### Crear Usuario

- **URL**: `/users`
- **Método**: `POST`
- **Autenticación requerida**: Sí
- **Permisos requeridos**: Admin
- **Restricciones de datos**:

```json
{
  "user_ced": "[cédula válida]",
  "user_name": "[1 a 50 caracteres]",
  "user_lastname": "[1 a 50 caracteres]",
  "user_phone": "[número de teléfono válido]",
  "user_mail": "[dirección de correo válida]",
  "password": "[contraseña en texto plano]"
}
```

- **Respuesta Exitosa**:

  - **Código**: 201
  - **Contenido**: `{ "mensaje": "Usuario creado exitosamente", "userId": 12345 }`
- **Respuesta de Error**:
  - **Código**: 400 SOLICITUD INCORRECTA
  - **Contenido**: `{ "error": "Datos de entrada inválidos" }`

##### Obtener Usuario por ID

- **URL**: `/users/:id`
- **Método**: `GET`
- **Parámetros de URL**:

  - **Requerido**: `id=[entero]`
- **Autenticación requerida**: Sí
- **Permisos requeridos**: Usuario propio o Admin
- **Respuesta Exitosa**:
  - **Código**: 200
  - **Contenido**: `{ objeto de usuario }`
- **Respuesta de Error**:
  - **Código**: 404 NO ENCONTRADO
  - **Contenido**: `{ "error": "Usuario no encontrado" }`

#### Reservaciones

##### Crear Reservación

- **URL**: `/reservation`
- **Método**: `POST`
- **Autenticación requerida**: Sí
- **Restricciones de datos**:

```json
{
  "reservationType": "[lugar o detallada]",
  "cedula": "[cédula válida]",
  "business_id": "[id de negocio válido]",
  "reservation_date": "[fecha válida]",
  "place_id": "[id de lugar válido]",
  "reservation_value": "[valor numérico]",
  "transaction_type": "[crédito o débito]",
  "transaction_number": "[número de transacción válido]",
  "transaction_date": "[fecha válida]",
  "products": [
    {
      "product_id": "[id de producto válido]",
      "quantity": "[valor numérico]"
    }
  ]
}
```

- **Respuesta Exitosa**:
  - **Código**: 201
  - **Contenido**: `{ "mensaje": "Reservación creada exitosamente", "reservationId": 67890 }`
- **Respuesta de Error**:
  - **Código**: 400 SOLICITUD INCORRECTA
  - **Contenido**: `{ "error": "Datos de reservación inválidos" }`

#### Negocios

##### Obtener Negocios por Usuario

- **URL**: `/businesses/:userId`
- **Método**: `GET`
- **Parámetros de URL**:
  - **Requerido**: `userId=[id de usuario válido]`
- **Autenticación requerida**: Sí
- **Respuesta Exitosa**:
  - **Código**: 200
  - **Contenido**: Array de objetos de negocio
- **Respuesta de Error**:
  - **Código**: 404 NO ENCONTRADO
  - **Contenido**: `{ "error": "No se encontraron negocios para este usuario" }`

### Manejo de Errores

Todos los endpoints pueden devolver las siguientes respuestas de error:

- **Código**: 500 ERROR INTERNO DEL SERVIDOR
  - **Contenido**: `{ "error": "Error interno del servidor" }`
- **Código**: 401 NO AUTORIZADO
  - **Contenido**: `{ "error": "Token inválido o expirado" }`

### Limitación de Tasa

Las llamadas a la API están limitadas a 100 solicitudes por hora por dirección IP.

### Modelos de Datos

#### Usuario

```json
{
  "id": "entero",
  "user_ced": "string",
  "user_name": "string",
  "user_lastname": "string",
  "user_phone": "string",
  "user_mail": "string",
  "user_plan": "string"
}
```

#### Negocio

```json
{
  "id": "entero",
  "business_owner_ced": "string",
  "business_name": "string",
  "business_phone": "string",
  "business_mail": "string",
  "business_city_id": "entero",
  "business_main_desc": "string",
  "business_desc": "string",
  "business_slogan": "string",
  "business_main_pic_url": "string",
  "business_portrait_pic": "string"
}
```

#### Reservación

```json
{
  "id": "entero",
  "reservationType": "string",
  "cedula": "string",
  "business_id": "entero",
  "reservation_date": "fecha",
  "place_id": "entero",
  "reservation_value": "número",
  "transaction_type": "string",
  "transaction_number": "string",
  "transaction_date": "fecha",
  "products": [
    {
      "product_id": "entero",
      "quantity": "entero"
    }
  ]
}
```

#### Producto

```json
{
  "id": "entero",
  "business_id": "entero",
  "product_name": "string",
  "product_description": "string",
  "product_price": "número",
  "product_image_url": "string"
}
```

### Versionado

Esta API está actualmente en la versión 1. Al hacer solicitudes, anteponga todos los endpoints con `/api/v1`.

### Soporte

Para cualquier consulta o soporte, por favor contacte a nuestro equipo en <api-soporte@restmaster.com>.

## Documentación API

Revisa la documentacion completa [Aqui](https://documenter.getpostman.com/view/32978477/2sA3kXFMBm)

## Seguridad

- Almacenamiento seguro de contraseñas con hashing
- Autenticación basada en tokens JWT
- Controles de acceso para proteger datos sensibles
