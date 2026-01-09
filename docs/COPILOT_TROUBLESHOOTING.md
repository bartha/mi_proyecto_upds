# Guía de Solución de Problemas de GitHub Copilot

Esta guía te ayudará a resolver los problemas más comunes al usar GitHub Copilot en Visual Studio.

## 🚫 Problema 1: "No tengo acceso a GitHub Copilot"

### Síntomas
- Al intentar usar Copilot, aparece mensaje de que no tienes acceso
- La extensión está instalada pero no funciona
- Te redirige a la página de suscripción

### Soluciones

#### Solución A: Obtener Acceso Educativo (GRATIS)
Si eres estudiante:

1. Ve a https://education.github.com/pack
2. Haz clic en **"Get your pack"**
3. Inicia sesión con tu cuenta de GitHub
4. Verifica tu estatus de estudiante:
   - Sube una foto de tu credencial estudiantil UPDS
   - O usa tu correo institucional (@upds.edu.bo o similar)
5. Espera la aprobación (puede tomar 1-3 días)
6. Una vez aprobado, GitHub Copilot estará incluido GRATIS

#### Solución B: Verificar Suscripción Activa
Si ya pagaste o deberías tener acceso:

1. Ve a https://github.com/settings/copilot
2. Verifica que el estado sea "Active"
3. Si no está activo, ve a https://github.com/features/copilot y suscríbete
4. Hay 30 días de prueba gratis

#### Solución C: Verificar Cuenta de Organización
Si tu universidad/empresa tiene licencias:

1. Contacta a tu administrador de IT o profesor
2. Verifica que te hayan agregado a la organización
3. Acepta la invitación a la organización en GitHub
4. Reinicia Visual Studio

---

## 🔌 Problema 2: "La extensión no aparece instalada"

### Síntomas
- No ves la opción de GitHub Copilot en Herramientas → Opciones
- No hay sugerencias al escribir código
- La extensión no aparece en la lista de extensiones

### Soluciones

#### Solución 1: Reinstalar la Extensión

1. Ve a **Extensiones** → **Administrar extensiones**
2. Ve a la pestaña **Instalado**
3. Busca "GitHub Copilot"
4. Si está instalada, haz clic en **Desinstalar**
5. **Cierra Visual Studio completamente**
6. Abre Visual Studio nuevamente
7. Ve a **Extensiones** → **Administrar extensiones** → **En línea**
8. Busca "GitHub Copilot" y reinstala
9. **Cierra Visual Studio nuevamente**
10. El instalador VSIX debería ejecutarse
11. Reinicia Visual Studio

#### Solución 2: Verificar Versión de Visual Studio

GitHub Copilot requiere **Visual Studio 2022 versión 17.4+**

1. Ve a **Ayuda** → **Acerca de Microsoft Visual Studio**
2. Verifica la versión
3. Si es anterior a 17.4:
   - Ve a **Ayuda** → **Buscar actualizaciones**
   - Instala todas las actualizaciones disponibles
   - Reinicia Visual Studio

#### Solución 3: Instalación Manual

1. Ve a https://marketplace.visualstudio.com/items?itemName=GitHub.copilotvs
2. Haz clic en **Download**
3. **Cierra Visual Studio completamente**
4. Ejecuta el archivo `.vsix` descargado
5. Sigue el asistente de instalación
6. Abre Visual Studio

---

## 🔑 Problema 3: "No puedo iniciar sesión en GitHub"

### Síntomas
- No aparece la opción para iniciar sesión
- Al intentar iniciar sesión, da error
- No se abre el navegador para autenticar

### Soluciones

#### Solución 1: Iniciar Sesión Manualmente

1. Ve a **Archivo** → **Configuración de cuenta...**
2. Haz clic en **Agregar** o **Iniciar sesión**
3. Selecciona **GitHub**
4. Si no se abre el navegador automáticamente:
   - Copia la URL que aparece
   - Ábrela manualmente en tu navegador
5. Autoriza Visual Studio
6. Regresa a Visual Studio

#### Solución 2: Limpiar Credenciales

1. Cierra Visual Studio
2. Abre el **Administrador de credenciales de Windows**:
   - Presiona Windows + R
   - Escribe `control /name Microsoft.CredentialManager`
   - Presiona Enter
3. Ve a **Credenciales de Windows**
4. Busca credenciales relacionadas con "git" o "github"
5. Elimina todas las credenciales de GitHub
6. Reinicia Visual Studio
7. Intenta iniciar sesión nuevamente

#### Solución 3: Verificar Conexión de Red

Si tu universidad usa proxy o firewall:

1. Contacta al departamento de IT
2. Asegúrate de que estos dominios estén permitidos:
   - `github.com`
   - `api.github.com`
   - `copilot-proxy.githubusercontent.com`
   - `*.github.com`
3. Configura el proxy en Visual Studio:
   - **Herramientas** → **Opciones** → **Entorno** → **Proxy Web**

---

## 💡 Problema 4: "Copilot no da sugerencias"

### Síntomas
- La extensión está instalada y activa
- Has iniciado sesión correctamente
- Pero no aparecen sugerencias al escribir

### Soluciones

#### Solución 1: Verificar que Copilot esté Habilitado

1. Ve a **Herramientas** → **Opciones**
2. Busca **GitHub Copilot** en el menú izquierdo
3. Asegúrate de que esté marcado:
   - ✅ "Enable GitHub Copilot"
   - ✅ "Enable Copilot suggestions"
4. Haz clic en **Aceptar**
5. Reinicia Visual Studio

#### Solución 2: Verificar IntelliSense

Las sugerencias de Copilot pueden estar siendo bloqueadas por IntelliSense:

1. Ve a **Herramientas** → **Opciones**
2. Busca **Editor de texto** → **Todos los idiomas** → **IntelliSense**
3. O busca el lenguaje específico (JavaScript, C#, etc.)
4. Asegúrate de que las opciones de autocompletado estén habilitadas
5. Reinicia Visual Studio

#### Solución 3: Probar en Diferentes Archivos

Copilot funciona mejor con ciertos tipos de archivo:

1. Crea un archivo `.js` nuevo
2. Escribe un comentario descriptivo:
   ```javascript
   // función para calcular el promedio de un array de números
   ```
3. Presiona Enter y espera 1-2 segundos
4. Deberías ver una sugerencia en gris
5. Presiona Tab para aceptarla

Si funciona en JavaScript pero no en otros lenguajes:
- Verifica que el lenguaje esté soportado
- Algunos lenguajes tienen mejor soporte que otros

#### Solución 4: Reiniciar Servicio de Copilot

1. Cierra todos los archivos abiertos
2. Cierra Visual Studio completamente
3. Abre el Administrador de tareas (Ctrl + Shift + Esc)
4. En la pestaña "Procesos", busca procesos relacionados con:
   - `devenv.exe` (Visual Studio)
   - Cualquier proceso de GitHub Copilot
5. Finaliza todos los procesos de Visual Studio
6. Abre Visual Studio nuevamente

---

## 🌐 Problema 5: "Copilot funciona lento o no responde"

### Síntomas
- Las sugerencias tardan mucho en aparecer
- Copilot se congela
- Visual Studio se vuelve lento

### Soluciones

#### Solución 1: Verificar Conexión a Internet

1. Asegúrate de tener conexión estable a Internet
2. Copilot necesita conexión para funcionar
3. Prueba tu velocidad en https://fast.com
4. Mínimo recomendado: 5 Mbps de bajada

#### Solución 2: Desactivar Otras Extensiones

Temporalmente desactiva otras extensiones que puedan interferir:

1. Ve a **Extensiones** → **Administrar extensiones**
2. En **Instalado**, desactiva extensiones de:
   - Otros asistentes de código AI
   - Herramientas de análisis de código pesadas
   - Extensiones que no uses actualmente
3. Reinicia Visual Studio

#### Solución 3: Aumentar Timeout

1. Ve a **Herramientas** → **Opciones** → **GitHub Copilot**
2. Si hay una opción de timeout o delay, auméntala
3. Guarda los cambios

---

## 👥 Problema 6: "Funciona en mi cuenta pero no en cuentas de compañeros"

### Síntomas
- Copilot funciona para ti
- Tus compañeros siguen los mismos pasos pero no les funciona
- Mismo Visual Studio, misma configuración

### Soluciones

#### Para cada compañero, verificar:

1. **Acceso Individual**:
   - Cada persona necesita su PROPIO acceso a Copilot
   - Cada uno debe solicitar el GitHub Student Developer Pack
   - Ve a https://github.com/settings/copilot
   - Debe decir "Active" en su cuenta

2. **Cuenta Correcta**:
   - Verifica que iniciaron sesión con la cuenta correcta
   - En Visual Studio: **Archivo** → **Configuración de cuenta**
   - Debe ser la misma cuenta que tiene Copilot activo

3. **Aprobación Pendiente**:
   - Si solicitaron acceso educativo recientemente
   - Puede tomar 1-3 días hábiles
   - Revisar email de GitHub para confirmación

---

## 🔧 Soluciones Avanzadas

### Limpiar Caché de Visual Studio

1. Cierra Visual Studio completamente
2. Ve a: `%LOCALAPPDATA%\Microsoft\VisualStudio\17.0_xxxxxxxxx`
3. Elimina la carpeta `ComponentModelCache`
4. Reinicia Visual Studio

### Ver Logs de Copilot

1. Ve a **Vista** → **Salida** (o presiona Ctrl + Alt + O)
2. En el menú desplegable "Mostrar salida de:", selecciona **GitHub Copilot**
3. Revisa los errores en el log
4. Busca errores específicos en Google o contacta soporte

### Reinstalación Limpia

1. Desinstala la extensión de GitHub Copilot
2. Cierra Visual Studio
3. Elimina: `%APPDATA%\GitHub Copilot`
4. Elimina: `%LOCALAPPDATA%\GitHub Copilot`
5. Reinicia la computadora
6. Reinstala la extensión de GitHub Copilot

---

## 📞 Contactar Soporte

Si ninguna solución funciona:

### Soporte de GitHub Copilot
- Email: copilot-support@github.com
- Documentación: https://docs.github.com/copilot

### Soporte de GitHub Education
- Para problemas con acceso educativo
- https://support.github.com/

### Información a Incluir al Contactar Soporte

1. Versión de Visual Studio (Ayuda → Acerca de)
2. ¿Tienes acceso activo a Copilot? (sí/no)
3. ¿La extensión está instalada? (sí/no)
4. ¿Has iniciado sesión en GitHub? (sí/no)
5. Captura de pantalla del error
6. Logs de GitHub Copilot (Vista → Salida)

---

## ✅ Checklist Final de Diagnóstico

Revisa esta lista en orden:

- [ ] ✅ Tengo una cuenta de GitHub
- [ ] ✅ Tengo acceso ACTIVO a GitHub Copilot (verificado en github.com/settings/copilot)
- [ ] ✅ Visual Studio 2022 versión 17.4 o superior
- [ ] ✅ Extensión de GitHub Copilot instalada
- [ ] ✅ Visual Studio reiniciado después de instalar la extensión
- [ ] ✅ Sesión iniciada en GitHub dentro de Visual Studio
- [ ] ✅ Copilot habilitado en Herramientas → Opciones → GitHub Copilot
- [ ] ✅ Probado en archivo .js con comentario descriptivo
- [ ] ✅ Esperado 2-3 segundos para que aparezcan sugerencias
- [ ] ✅ Conexión a Internet estable

Si todos los ítems están marcados y aún no funciona, contacta soporte.

---

## 🎓 Recursos para Estudiantes UPDS

Ver también: [Guía para Equipos y Estudiantes](./COPILOT_TEAM_GUIDE.md)
