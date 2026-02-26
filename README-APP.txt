Conversor de Unidades (PWA)
===========================

Esta app está pensada para usarse en teléfono como PWA instalable.

USO RECOMENDADO (CON WORKFLOW)
------------------------------
1) Haz push de la rama al repositorio.
2) Ejecuta el workflow: "Deploy PWA to GitHub Pages".
3) Abre la URL pública generada por GitHub Pages.
4) En el teléfono, abre esa URL y usa "Instalar app" desde el navegador.

Por qué así
-----------
- Evita abrir archivos sueltos en local.
- Service Worker y manifest funcionan correctamente en HTTPS.
- Queda una URL lista para compartir e instalar en cualquier teléfono.

Alternativa local (solo pruebas)
--------------------------------
- Windows: doble clic en `iniciar_app.bat`
- Linux/Mac: `./iniciar_app.sh`

Archivos de la app
------------------
- index.html
- manifest.webmanifest
- sw.js
- assets/icon.svg
