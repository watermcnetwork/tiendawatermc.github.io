// Función para generar un código aleatorio
function generarCodigo() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres[randomIndex];
    }
    return codigo;
}

// Lógica para manejar el formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener el nick de Minecraft del formulario
    const nick = document.getElementById('nick').value;

    // Generar el código aleatorio
    const codigo = generarCodigo();

    // Mostrar el código generado en la página
    document.getElementById('codigo').style.display = 'block';
    document.getElementById('codigo-texto').textContent = `Código: ${codigo}`;

    // Limpiar el campo de texto
    document.getElementById('nick').value = '';
});
