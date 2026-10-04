    console.log("¡Proyecto Integrador Web inicializado con éxito!");
    
    // Ejecutar funciones base
    initMensajeBienvenida();
    initMenuInteractivo();
    initValidadorImagen();
    initTablaInteractiva(); // <--- Nueva función agregada aquí
});

/**
 * 1. Genera un saludo dinámico y personalizado en la consola
 */
function initMensajeBienvenida() {
    const hora = new Date().getHours();
    let saludo = "¡Hola!";

    if (hora >= 6 && hora < 12) {
        saludo = "¡Buenos días!";
    } else if (hora >= 12 && hora < 20) {
        saludo = "¡Buenas tardes!";
    } else {
        saludo = "¡Buenas noches!";
    }

    console.log(`${saludo} Bienvenido a la sección de Publicación y Despliegue.`);
}

/**
 * 2. Resalta automáticamente el enlace del menú correspondiente a la página actual
 */
function initMenuInteractivo() {
    const enlaces = document.querySelectorAll("nav ul li a");
    const paginaActual = window.location.pathname.split("/").pop() || "index.html";

    enlaces.forEach(enlace => {
        // Si el atributo href coincide con la página actual, añade una clase activa
        if (enlace.getAttribute("href") === paginaActual) {
            enlace.style.color = "var(--color-principal)";
            enlace.style.fontWeight = "700";
            enlace.style.backgroundColor = "rgba(37, 99, 235, 0.1)";
        }
    });
}

/**
 * 3. Valida si la imagen del proyecto se cargó correctamente (Evita imágenes rotas)
 */
function initValidadorImagen() {
    // Buscamos la imagen directamente en la página
    const imagenProyecto = document.querySelector("img");

    if (imagenProyecto) {
        // Si la imagen falla al cargar (por ejemplo, si la ruta no coincide con el archivo .jpeg)
        imagenProyecto.addEventListener("error", () => {
            console.error("Error: No se pudo cargar la imagen del proyecto. Verifica la ruta en /img/proyecto.jpeg");
            
            // Reemplazo estético o mensaje alternativo si llega a fallar
            imagenProyecto.style.border = "2px dashed #ef4444";
            imagenProyecto.alt = "Error al cargar la captura del proyecto. Por favor, revisa tu archivo 'proyecto.jpeg'.";
        });

        // Si se carga correctamente, avisa en consola
        imagenProyecto.addEventListener("load", () => {
            console.log("Imagen del proyecto (.jpeg) cargada correctamente.");
        });
    }
}

/**
 * 4. Recorre cada fila de la tabla comparativa para agregar interactividad visual al pasar el mouse
 */
function initTablaInteractiva() {
    // Seleccionamos todas las filas del cuerpo de la tabla (tbody tr)
    const filas = document.querySelectorAll("table tbody tr");

    filas.forEach(fila => {
        // Cuando el mouse ENTRA a la fila, cambia el fondo a un color suave
        fila.addEventListener("mouseenter", () => {
            fila.style.backgroundColor = "#eef2f7";
            fila.style.transition = "background-color 0.2s ease";
            fila.style.cursor = "pointer"; // Hace que aparezca la manito del mouse
        });

        // Cuando el mouse SALE de la fila, vuelve al fondo original
        fila.addEventListener("mouseleave", () => {
            fila.style.backgroundColor = "";
        });
    });
}
