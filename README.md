# Documentación API

API para manejar productos, clientes, marcas y precios.

## Version

1.0.0

## URL

- [https://drenvio-api.2.ie-1.fl0.io/api/v1](https://drenvio-api.2.ie-1.fl0.io/api/v1)

## Productos

### Obtener todos los productos

- **Endpoint:** [/products](https://drenvio-api.2.ie-1.fl0.io/api/v1/products)
- **Método:** GET
- **Descripción:** Obtiene una lista de todos los productos en stock.
- **Respuesta exitosa (200):** Lista de productos en formato JSON.

## Clientes

### Obtener todos los clientes

- **Endpoint:** [/clients](https://drenvio-api.2.ie-1.fl0.io/api/v1/clients)
- **Método:** GET
- **Descripción:** Obtiene una lista de todos los clientes.
- **Respuesta exitosa (200):** Lista de clientes en formato JSON.

## Marcas

### Obtener todas las marcas

- **Endpoint:** [/brands](https://drenvio-api.2.ie-1.fl0.io/api/v1/brands)
- **Método:** GET
- **Descripción:** Obtiene una lista de todas las marcas.
- **Respuesta exitosa (200):** Lista de marcas en formato JSON.

## Precios

### Obtener el precio de un producto

- **Endpoint:** [/price/{user_id}/{product_id}](https://drenvio-api.2.ie-1.fl0.io/api/v1/price/649d1d225e664cb54aca71b7/649d1a5be80589a134de9492)
- **Método:** GET
- **Descripción:** Obtiene el precio de un producto basado en el usuario.
- **Parámetros de consulta:**
  - `user_id` (ID del cliente) en formato de cadena de texto.
  - `product_id` (ID del producto) en formato de cadena de texto.
- **Respuesta exitosa (200):** Precio del producto en formato Number.
