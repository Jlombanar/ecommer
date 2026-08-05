## <h1 align="center">🍦 MIMOS- SISTEMA DE PEDIDOS DE HELADOS</h1>

<p align="center">APLICACION MOVIL PARA GESTIONAR EL CATÁLOGO DE PRODUCTOS , USUARIOS Y PEIDOS DE 
UNA HELADERIA , DESARROLLADA CON UNA EXCELENTE TECNOLOGIA </p>

## 🛠️ Stack Tecnológico

El proyecto utiliza una arquitectura moderna basada en un cliente móvil, un servidor backend y una base de datos en la nube, integrando las siguientes tecnologías:

* Node.js + express (backend)
* superbase
* Flutter (frontend)
* JWT para el manejo de sesiones

## 🚀 Características del Proyecto

### 🔐 1. Autenticación y Seguridad
* **Registro e Inicio de Sesión**: Autenticación segura para usuarios mediante tokens (JWT).
* **Control de Acceso Basado en Roles (RBAC)**: Vistas y permisos diferenciados para perfiles **Cliente** y **Administrador**.
* **Protección de Rutas**: Middlewares en el backend para restringir el acceso a endpoints sensibles según el rol.
* **Gestión de Sesión**: Cierre de sesión seguro y expiración automática de credenciales.

### 🍨 2. Panel Administrativo (Gestión de Heladería)
* **CRUD de Productos**: Creación, actualización y desactivación de helados, toppings, postres y bebidas.
* **Gestión de Categorías**: Organización del menú por familias (Helados de paila, Copas, Batidos, Toppings, etc.).
* **Control de Inventario**: Gestión en tiempo real de precios, disponibilidad de sabores y stock de insumos.

### 🍧 3. Catálogo Público (Experiencia del Cliente)
* **Navegación Interactiva**: Exploración por categorías de productos con diseño ágil e intuitivo.
* **Búsqueda Dinámica**: Filtro en tiempo real por nombre de producto o sabor.
* **Detalle del Producto**: Vista individual con ingredientes, precios, fotos y opciones de personalización.

### 💳 4. Flujo Comercial y Pedidos
* **Carrito de Compras**: Selección de helados, elección de toppings, modificación de cantidades y cálculo automático del total.
* **Gestión de Órdenes**: Procesamiento del pedido y generación de historial de compras.
* **Pasarela de Pagos**: Confirmación e integración de pago electrónico.
* **Control de Pedidos en Venta**: Módulo administrativo para actualizar estados de entrega (*Pendiente*, *En Preparación*, *Completado*).

  ## ⚙️ Instalación y Configuración

  ## 1.  Clonar el repositorio

 * git clone https://github.com/Jlombanar/ecommer.git
 *  Instalacion de node
 *  instalar npm install
 *  Instalar libreria de node express
 *  Instalar libreria de superbase

## 2. ejecutar el Servidor   
** npm run dev

## Estructura del proyecto
'''
  mimos-heladería/
├── backend/
│   ├── src/
│   │   ├── controllers/   # Lógica para usuarios, productos y pedidos
│   │   ├── middlewares/   # Validación de JWT y roles
│   │   ├── models/        # Esquemas de datos (Helados, Usuarios, Órdenes)
│   │   ├── routes/        # Definición de rutas API
│   │   └── app.js         # Servidor principal Express
│   └── .env.example
│
└── frontend/
    ├── lib/
    │   ├── models/        # Modelos Dart para Mimos
    │   ├── providers/     # Manejo del estado del carrito y autenticación
    │   ├── screens/       # Pantallas (Login, Catálogo, Admin, Carrito)
    │   ├── widgets/       # Componentes visuales reutilizables
    │   └── main.dart      # Punto de entrada de la aplicación
'''
  
---

## 👨‍💻 Autor

* **Jimmy Alexander Lombana Rivera**
  * *Ingeniero de Sistemas* | *Desarrollador Full-Stack*
  * **Especialidad**: Desarrollo de aplicaciones móviles y web, arquitecturas cliente-servidor e integración de APIs RESTful.

---

