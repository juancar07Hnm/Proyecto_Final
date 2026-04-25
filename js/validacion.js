// Buscamos el formulario por su ID
const formulario = document.getElementById('formulario_contacto');

formulario.addEventListener('submit', function(event) {
    // Pillamos el valor del nombre
    let nombre = document.getElementById('nombre').value;

    // Si el nombre tiene menos de 3 letras...
    if (nombre.length < 3) {
        // 1. Avisamos al usuario
        alert("¡Cuidado! El nombre tiene que tener al menos 3 letras.");
        
        // 2. Pintamos el borde de rojo para que se vea el fallo (Puntos extra en la rúbrica)
        document.getElementById('nombre').style.borderColor = "red";
        
        // 3. ¡ESTO ES LO MÁS IMPORTANTE!: Paramos el envío
        event.preventDefault(); 
    } else {
        // Si todo está bien, avisamos que se ha enviado
        alert("¡Perfecto " + nombre + "! Formulario enviado con éxito.");
        // Aquí no ponemos preventDefault, así que el formulario se envía normal
    }
});