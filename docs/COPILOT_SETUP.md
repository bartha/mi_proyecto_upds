# Guía de Configuración de GitHub Copilot en Visual Studio

Esta guía te ayudará a configurar GitHub Copilot en Visual Studio y Visual Studio Code.

## 📋 Requisitos Previos

### 1. Verificar Acceso a GitHub Copilot

Antes de instalar, necesitas tener acceso a GitHub Copilot:

#### Opción A: Acceso Educativo (GRATIS para estudiantes)
- ✅ **Recomendado para estudiantes UPDS**
- Visita: https://education.github.com/pack
- Solicita el GitHub Student Developer Pack
- Incluye GitHub Copilot GRATIS mientras seas estudiante

#### Opción B: Suscripción Individual
- Costo: $10 USD/mes o $100 USD/año
- Visita: https://github.com/features/copilot

#### Opción C: Acceso Organizacional
- Tu organización/empresa debe tener GitHub Copilot Business
- Contacta a tu administrador de GitHub

### 2. Verificar tu Acceso

1. Inicia sesión en GitHub: https://github.com
2. Ve a tu perfil → Settings → Copilot
3. Si ves la página de configuración de Copilot, tienes acceso ✅
4. Si te pide suscribirte, necesitas obtener acceso primero ❌

---

## 🖥️ Instalación en Visual Studio 2022

### Paso 1: Verificar Versión de Visual Studio

GitHub Copilot requiere **Visual Studio 2022 versión 17.4 o superior**.

1. Abre Visual Studio
2. Ve a **Ayuda** → **Acerca de Microsoft Visual Studio**
3. Verifica que la versión sea **17.4.0** o superior
4. Si tu versión es anterior, actualiza Visual Studio:
   - Ve a **Ayuda** → **Buscar actualizaciones**

### Paso 2: Instalar la Extensión de GitHub Copilot

1. Abre Visual Studio 2022
2. Ve a **Extensiones** → **Administrar extensiones**
3. En la pestaña **En línea**, busca **"GitHub Copilot"**
4. Haz clic en **Descargar** en la extensión "GitHub Copilot"
5. **Cierra Visual Studio** para que la instalación se complete
6. El instalador de VSIX se ejecutará automáticamente
7. Sigue las instrucciones del instalador
8. **Reinicia Visual Studio**

### Paso 3: Iniciar Sesión en GitHub

1. Abre Visual Studio 2022
2. Ve a **Archivo** → **Cuenta configuración...**
3. Haz clic en **Agregar una cuenta**
4. Selecciona **GitHub**
5. Inicia sesión con tu cuenta de GitHub (la que tiene acceso a Copilot)
6. Autoriza Visual Studio cuando se te solicite

### Paso 4: Activar GitHub Copilot

1. Ve a **Herramientas** → **Opciones**
2. En el menú de la izquierda, busca **GitHub Copilot**
3. Marca la casilla **"Habilitar GitHub Copilot"** o **"Enable GitHub Copilot"**
4. Configura tus preferencias adicionales si lo deseas
5. Haz clic en **Aceptar**

### Paso 5: Verificar que Funciona

1. Crea un nuevo archivo (puede ser `.js`, `.html`, `.css`, `.cs`, etc.)
2. Empieza a escribir un comentario o código
3. Deberías ver sugerencias de Copilot en gris
4. Presiona **Tab** para aceptar una sugerencia
5. Presiona **Alt + ]** para ver la siguiente sugerencia
6. Presiona **Alt + [** para ver la sugerencia anterior

**Ejemplo de prueba:**
```javascript
// Función para calcular el área de un círculo
```

Copilot debería sugerirte código como:
```javascript
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}
```

---

## 💻 Instalación en Visual Studio Code

### Paso 1: Instalar la Extensión

1. Abre Visual Studio Code
2. Ve a la vista de **Extensiones** (Ctrl+Shift+X o Cmd+Shift+X en Mac)
3. Busca **"GitHub Copilot"**
4. Haz clic en **Instalar** en la extensión oficial de GitHub
5. También puedes instalar **"GitHub Copilot Chat"** para usar el chat interactivo

### Paso 2: Iniciar Sesión

1. Después de instalar, VS Code te pedirá iniciar sesión
2. Haz clic en **"Sign in to GitHub"**
3. Se abrirá tu navegador
4. Autoriza Visual Studio Code
5. Regresa a VS Code

### Paso 3: Verificar que Funciona

1. Abre cualquier archivo de código
2. Empieza a escribir
3. Verás sugerencias de Copilot en texto gris
4. Presiona **Tab** para aceptar
5. Usa **Alt + ]** y **Alt + [** para navegar entre sugerencias

---

## 🎨 Atajos de Teclado Útiles

### Visual Studio y VS Code

| Acción | Windows/Linux | Mac |
|--------|--------------|-----|
| Aceptar sugerencia | Tab | Tab |
| Rechazar sugerencia | Esc | Esc |
| Siguiente sugerencia | Alt + ] | Option + ] |
| Sugerencia anterior | Alt + [ | Option + [ |
| Ver todas las sugerencias | Ctrl + Enter | Cmd + Enter |
| Abrir Copilot Chat (VS Code) | Ctrl + Shift + I | Cmd + Shift + I |

---

## ✅ Lista de Verificación

Antes de contactar soporte, verifica:

- [ ] Tengo acceso activo a GitHub Copilot en mi cuenta de GitHub
- [ ] Mi versión de Visual Studio es 17.4 o superior
- [ ] He instalado la extensión de GitHub Copilot
- [ ] He cerrado y reiniciado Visual Studio después de instalar
- [ ] He iniciado sesión con mi cuenta de GitHub en Visual Studio
- [ ] He habilitado GitHub Copilot en Herramientas → Opciones
- [ ] He probado en diferentes tipos de archivo (.js, .html, .cs)

---

## 🔗 Enlaces Útiles

- **GitHub Education**: https://education.github.com/pack
- **GitHub Copilot Docs**: https://docs.github.com/copilot
- **Visual Studio Marketplace**: https://marketplace.visualstudio.com/items?itemName=GitHub.copilotvs
- **VS Code Extension**: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot

---

## ❓ ¿Sigues Teniendo Problemas?

Consulta la [Guía de Solución de Problemas](./COPILOT_TROUBLESHOOTING.md) para problemas comunes y sus soluciones.
