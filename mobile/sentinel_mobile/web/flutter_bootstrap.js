{{flutter_js}}
{{flutter_build_config}}

_flutter.loader.load({
  config: {
    // Forzar carga local de CanvasKit — evita fetch a https://www.gstatic.com/flutter-canvaskit/
    // que el CSP del servidor bloquea (connect-src 'self' + fonts.gstatic.com solamente).
    // Los archivos canvaskit.js / canvaskit.wasm ya están en build/web/canvaskit/ (incluidos
    // en el repo y en cada flutter build web). Sin esta línea, Flutter intenta cargar CanvasKit
    // desde gstatic.com usando el engineRevision del buildConfig, lo que produce pantalla blanca
    // en Codespaces y cualquier entorno con CSP restrictiva.
    canvasKitBaseUrl: '/canvaskit/'
  }
});
