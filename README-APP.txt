Conversor de Unidades (PWA)
===========================

Este paquete contiene una app web instalable (PWA).

IMPORTANTE
----------
No abrir index.html con doble clic para modo app/offline.
Para que funcione como app instalable, debes levantar un servidor local.

Opción rápida en Windows
------------------------
1) Doble clic en: iniciar_app.bat
2) Se abrirá el navegador en http://127.0.0.1:8080
3) Desde Chrome/Edge puedes instalarla (botón "Instalar app" o menú instalar)

Opción rápida en Linux/Mac
--------------------------
1) En terminal:
   chmod +x iniciar_app.sh
   ./iniciar_app.sh
2) Abre http://127.0.0.1:8080

Si no tienes Python
-------------------
Puedes usar cualquier servidor estático (por ejemplo VSCode Live Server, nginx, etc.).

Archivos principales
--------------------
- index.html
- manifest.webmanifest
- sw.js
- assets/icon.svg
