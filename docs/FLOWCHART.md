# Diagrama de Flujo: Configuración de GitHub Copilot

```
┌─────────────────────────────────────────────────────────────────┐
│                  CONFIGURACIÓN DE GITHUB COPILOT                │
│                     PARA ESTUDIANTES UPDS                       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ PASO 1: ¿TIENES CUENTA EN GITHUB?                              │
└─────────────────────────────────────────────────────────────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
       NO                      SÍ
        │                       │
        ▼                       ▼
┌───────────────┐      ┌────────────────────┐
│ Crea cuenta   │      │ Continúa al Paso 2 │
│ en github.com │      └────────────────────┘
└───────────────┘
        │
        └──────────────┐
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│ PASO 2: ¿TIENES ACCESO A GITHUB COPILOT?                       │
│ Verifica en: github.com/settings/copilot                        │
└─────────────────────────────────────────────────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
       NO                            SÍ
        │                             │
        ▼                             ▼
┌─────────────────────┐      ┌───────────────────┐
│ OBTENER ACCESO      │      │ Continúa al Paso 3│
│                     │      └───────────────────┘
│ Opción A:           │
│ Student Pack GRATIS │
│ education.github    │
│ .com/pack           │
│                     │
│ Opción B:           │
│ Prueba 30 días      │
│ github.com/         │
│ features/copilot    │
└─────────────────────┘
        │
        │ (Espera 1-3 días para aprobación)
        │
        └──────────────┐
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│ PASO 3: INSTALAR VISUAL STUDIO 2022                            │
│ (Si ya lo tienes, verifica versión 17.4+)                      │
└─────────────────────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│ PASO 4: INSTALAR EXTENSIÓN DE COPILOT                          │
│                                                                 │
│ Extensiones → Administrar extensiones → En línea               │
│ Buscar: "GitHub Copilot" → Descargar                          │
│ CERRAR Visual Studio → Esperar instalación → REINICIAR         │
└─────────────────────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│ PASO 5: INICIAR SESIÓN EN GITHUB                               │
│                                                                 │
│ Archivo → Configuración de cuenta → Agregar → GitHub           │
│ Autoriza Visual Studio en el navegador                         │
└─────────────────────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│ PASO 6: ACTIVAR COPILOT                                        │
│                                                                 │
│ Herramientas → Opciones → GitHub Copilot                       │
│ ☑ Enable GitHub Copilot → Aceptar                             │
└─────────────────────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│ PASO 7: PROBAR QUE FUNCIONE                                    │
│                                                                 │
│ 1. Crea archivo .js                                            │
│ 2. Escribe: // función para sumar dos números                 │
│ 3. Presiona Enter                                              │
│ 4. Espera sugerencias (texto en gris)                         │
│ 5. Presiona Tab para aceptar                                  │
└─────────────────────────────────────────────────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
  ¿FUNCIONA?                    ¿NO FUNCIONA?
        │                             │
        ▼                             ▼
┌───────────────┐         ┌────────────────────────┐
│ ¡LISTO!       │         │ Ver guía de solución   │
│ ¡A PROGRAMAR! │         │ de problemas:          │
│ 🎉            │         │ COPILOT_TROUBLESHOOT   │
└───────────────┘         │ ING.md                 │
                          └────────────────────────┘


═══════════════════════════════════════════════════════════════════
                        ATAJOS DE TECLADO
═══════════════════════════════════════════════════════════════════

Tab              →  Aceptar sugerencia
Esc              →  Rechazar sugerencia
Alt + ]          →  Siguiente sugerencia
Alt + [          →  Sugerencia anterior
Ctrl + Enter     →  Ver todas las sugerencias


═══════════════════════════════════════════════════════════════════
                     PROBLEMAS COMUNES
═══════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│ "No tengo acceso a Copilot"                                     │
├─────────────────────────────────────────────────────────────────┤
│ → Solicita GitHub Student Pack en education.github.com/pack    │
│ → O usa prueba de 30 días                                      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ "La extensión no aparece"                                       │
├─────────────────────────────────────────────────────────────────┤
│ → Verifica versión de VS: Ayuda → Acerca de (necesitas 17.4+) │
│ → Reinstala la extensión                                       │
│ → Cierra COMPLETAMENTE VS y reinicia                           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ "No aparecen sugerencias"                                       │
├─────────────────────────────────────────────────────────────────┤
│ → Verifica: Herramientas → Opciones → GitHub Copilot          │
│ → Debe estar ☑ habilitado                                     │
│ → Escribe comentarios descriptivos                            │
│ → Espera 2-3 segundos después de escribir                     │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ "No puedo instalar en PC del laboratorio"                      │
├─────────────────────────────────────────────────────────────────┤
│ → Opción 1: Usa GitHub Codespaces (en la nube)                │
│ → Opción 2: Usa VS Code Portable (no requiere instalación)    │
│ → Opción 3: Habla con el administrador del laboratorio        │
└─────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════
                    RECURSOS ADICIONALES
═══════════════════════════════════════════════════════════════════

📖 Guía de configuración completa:  docs/COPILOT_SETUP.md
🔧 Solución de problemas:           docs/COPILOT_TROUBLESHOOTING.md
👥 Guía para estudiantes:           docs/COPILOT_TEAM_GUIDE.md
⚡ Inicio rápido:                   docs/QUICK_START.md
🌐 GitHub Education:                education.github.com/pack
📧 Soporte:                         copilot-support@github.com


═══════════════════════════════════════════════════════════════════
                     CONSEJOS PARA ESTUDIANTES
═══════════════════════════════════════════════════════════════════

✅ USA COPILOT PARA:
   • Aprender sintaxis nueva
   • Acelerar tareas repetitivas
   • Entender diferentes soluciones
   • Depurar código

❌ NO USES COPILOT PARA:
   • Copiar sin entender
   • Evitar estudiar conceptos
   • Hacer trampa en exámenes

💡 RECUERDA:
   Copilot es un TUTOR, no un reemplazo del aprendizaje.
   El objetivo es que APRENDAS a programar.


═══════════════════════════════════════════════════════════════════
```
