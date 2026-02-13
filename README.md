# 🚀 Portal de Lenguajes de Programación para IA

Portal web educativo que explora los principales lenguajes de programación utilizados en el desarrollo de soluciones de Inteligencia Artificial.

## 👥 Equipo de Desarrollo

- **Sebastián Gutiérrez** - 24-0868
- **Robert Abreu** - 23-0121
- **Jose Aníbal Rodríguez** - 24-0915
- **Edwin Fang** - 24-0265

## 📁 Estructura del Proyecto

```
portal-ia/
├── index.html              # Página principal
├── lenguajes.html          # Vista general de lenguajes
├── productos.html          # Productos comerciales (IDEs, compiladores)
├── sistemas-ia.html        # Sistemas IA de éxito comercial
├── referencias.html        # Referencias bibliográficas
├── lenguajes/
│   ├── python.html        # Detalles de Python
│   ├── r.html             # Detalles de R
│   ├── java.html          # Detalles de Java
│   ├── julia.html         # Detalles de Julia
│   └── cpp.html           # Detalles de C++
├── css/
│   └── styles.css         # Estilos principales
├── js/
│   └── animations.js      # Animaciones y efectos
├── vercel.json            # Configuración de Vercel
└── README.md              # Este archivo
```

## ✨ Características

- **Diseño Moderno**: Interfaz futurista con gradientes y efectos de luz
- **Responsive**: Adaptado para desktop, tablet y móvil
- **Animaciones**: Efectos suaves y transiciones elegantes
- **Contenido Rico**: Información detallada sobre 5 lenguajes de programación
- **Referencias**: Más de 60 enlaces a recursos oficiales y documentación

## 🌐 Despliegue en Vercel

### Opción 1: Despliegue desde GitHub (Recomendado)

1. **Crear un repositorio en GitHub**
   - Ve a [github.com](https://github.com) y crea una cuenta si no tienes
   - Clic en "New repository"
   - Nombre: `portal-ia-lenguajes` (o el que prefieras)
   - Descripción: "Portal web sobre lenguajes de programación para IA"
   - Público o privado (tu elección)
   - Clic en "Create repository"

2. **Subir los archivos al repositorio**
   
   **Opción A - Usando Git (Línea de comandos):**
   ```bash
   # Navegar a la carpeta del proyecto
   cd portal-ia
   
   # Inicializar repositorio Git
   git init
   
   # Añadir todos los archivos
   git add .
   
   # Hacer commit
   git commit -m "Initial commit: Portal IA"
   
   # Conectar con GitHub (reemplaza con tu URL)
   git remote add origin https://github.com/TU-USUARIO/portal-ia-lenguajes.git
   
   # Subir archivos
   git branch -M main
   git push -u origin main
   ```
   
   **Opción B - Usando la interfaz web de GitHub:**
   - En tu repositorio, clic en "Add file" → "Upload files"
   - Arrastra todos los archivos y carpetas del proyecto
   - Clic en "Commit changes"

3. **Desplegar en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Clic en "Sign Up" o "Login" (puedes usar tu cuenta de GitHub)
   - Una vez dentro, clic en "Add New..." → "Project"
   - Selecciona "Import Git Repository"
   - Busca y selecciona tu repositorio `portal-ia-lenguajes`
   - Vercel detectará automáticamente que es un sitio estático
   - Clic en "Deploy"
   - ¡Espera 1-2 minutos y tu sitio estará en línea! 🎉

4. **Obtener la URL**
   - Vercel te dará una URL automática como: `https://portal-ia-lenguajes.vercel.app`
   - Puedes personalizar el dominio en la configuración del proyecto

### Opción 2: Despliegue Directo desde la Carpeta

1. **Instalar Vercel CLI** (requiere Node.js)
   ```bash
   npm install -g vercel
   ```

2. **Hacer login**
   ```bash
   vercel login
   ```

3. **Desplegar**
   ```bash
   cd portal-ia
   vercel
   ```
   
4. Sigue las instrucciones en pantalla:
   - Set up and deploy? **Y**
   - Which scope? Selecciona tu cuenta
   - Link to existing project? **N**
   - Project name? `portal-ia-lenguajes` (o el que prefieras)
   - Directory? Presiona Enter (usa el directorio actual)
   - Vercel detectará automáticamente la configuración
   - ¡Listo! Te dará la URL de producción

### Opción 3: Arrastrar y Soltar

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. En el dashboard, busca la sección "Import Project"
3. Arrastra la carpeta `portal-ia` completa
4. Vercel subirá y desplegará automáticamente
5. Recibirás la URL de tu sitio

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con gradientes, animaciones y efectos
- **JavaScript**: Interactividad y animaciones dinámicas
- **Google Fonts**: Tipografía Orbitron y Fira Code
- **Vercel**: Hosting y despliegue

## 📝 Características del Portal

### Lenguajes Cubiertos
1. **Python** 🐍 - Líder en IA y ML
2. **R** 📊 - Especializado en estadística
3. **Java** ☕ - Robusto para sistemas empresariales
4. **Julia** ⚡ - Alto rendimiento científico
5. **C++** ⚙️ - Máximo rendimiento

### Contenido Incluido
- ✅ Características operativas de cada lenguaje
- ✅ Productos comerciales (IDEs, compiladores)
- ✅ Sistemas IA de éxito (ChatGPT, Tesla Autopilot)
- ✅ Referencias bibliográficas completas
- ✅ Videos educativos integrados
- ✅ Ejemplos de código

## 🎨 Personalización

### Cambiar colores
Edita las variables CSS en `css/styles.css`:
```css
:root {
    --primary: #00d4ff;      /* Color principal */
    --secondary: #7b2cbf;    /* Color secundario */
    --accent: #00ffff;       /* Color de acento */
    /* ... más colores ... */
}
```

### Añadir contenido
- Edita los archivos HTML directamente
- Las imágenes se cargan desde Unsplash (URLs externas)
- Videos integrados desde YouTube

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ Responsive: Desktop, Tablet, Móvil
- ✅ Accesibilidad web básica

## 🆘 Solución de Problemas

### El sitio no se ve bien
- Asegúrate de que todos los archivos estén en las carpetas correctas
- Verifica que `styles.css` esté en la carpeta `css/`
- Verifica que `animations.js` esté en la carpeta `js/`

### Los estilos no se cargan
- Revisa las rutas en los archivos HTML
- Asegúrate de que las rutas relativas sean correctas (`../` para subir niveles)

### Error al desplegar en Vercel
- Verifica que `vercel.json` esté en la raíz del proyecto
- Asegúrate de que todos los archivos HTML, CSS y JS estén incluidos
- Revisa los logs de Vercel para más detalles

## 📞 Contacto

Para preguntas sobre el proyecto, contactar a los miembros del equipo.

## 📄 Licencia

Este es un proyecto académico desarrollado como parte de un curso de programación.

---

**Desarrollado con 💙 por el equipo de estudiantes**

¡Gracias por visitar nuestro portal! 🚀
