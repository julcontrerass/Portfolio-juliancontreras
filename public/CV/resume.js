// Función para descargar como PDF
function downloadAsPDF() {
    // Ocultar botones temporalmente para la captura
    const langSwitcher = document.querySelector('.language-switcher');
    const downloadBtn = document.getElementById('download-btn');

    if (langSwitcher) langSwitcher.style.display = 'none';
    if (downloadBtn) downloadBtn.style.display = 'none';

    // Usar window.print() que abre el diálogo de impresión nativo
    // El usuario puede seleccionar "Guardar como PDF"
    window.print();

    // Restaurar botones después de un breve delay
    setTimeout(() => {
        if (langSwitcher) langSwitcher.style.display = 'flex';
        if (downloadBtn) downloadBtn.style.display = 'block';
    }, 100);
}

// Botón para descargar
window.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.id = 'download-btn';
    button.textContent = 'Descargar como PDF';
    button.style.cssText = 'position: fixed; top: 10px; right: 10px; padding: 10px 20px; background: #0066cc; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 14px; z-index: 1000;';
    button.onclick = downloadAsPDF;
    document.body.appendChild(button);
});
