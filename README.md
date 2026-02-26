# Calculadora básica para teléfono

Este repositorio contiene:
- La calculadora web (PWA) en la raíz del proyecto.
- Un wrapper Android (WebView) dentro de `android/` para generar un APK instalable.

## Opción 1: instalar como web app (PWA)
1. Publica el contenido en una URL HTTPS.
2. Abre la URL en tu teléfono.
3. En Android Chrome: menú `⋮` → **Instalar aplicación**.
4. En iPhone Safari: compartir → **Añadir a pantalla de inicio**.

## Opción 2: instalar APK de Android (sin Android Studio)
1. Sube este repo a GitHub.
2. Ve a **Actions** y ejecuta el workflow **Build Android APK**.
3. Cuando termine, descarga el artefacto **monitoreo-movil-apk**.
4. Dentro del zip encontrarás `app-debug.apk`.
5. Pasa ese APK a tu teléfono Android e instálalo (habilitando apps desconocidas si el sistema lo solicita).

## Estructura relevante
- `index.html`, `styles.css`, `app.js`: UI y lógica de la calculadora.
- `android/`: proyecto Android para generar APK.
- `scripts/sync-web-assets.sh`: copia los archivos web al módulo Android.
- `.github/workflows/build-android-apk.yml`: build automático del APK.
