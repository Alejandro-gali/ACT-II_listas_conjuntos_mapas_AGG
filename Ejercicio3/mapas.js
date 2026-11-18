let map_libros = new Map();
let salir = false;

do {
    const opcion = window.prompt("Gestión de una Biblioteca. Introduzca la opción deseada: \n"
        + "A. Añadir un libro \n"
        + "B. Eliminar un libro \n"
        + "C. Consultar un libro \n"
        + "D. Mostrar catálogo \n"
        + "E. Modificar ejemplares \n"
        + "F. Buscar libros de un autor \n"
        + "G. Prestar un libro \n"
        + "H. Devolver un libro \n"
        + "I. Mostrar estadísticas \n"
        + "J. Vaciar catálogo: Eliminar todos los libros del mapa. \n"
        + "K. Salir: Finalizar el programa."
    ).toUpperCase();

    switch (opcion) {
        case "A":
            break;
        case "B":
            break;
        case "C":
            break;
        case "D":
            break;
        case "E":
            break;
        case "F":
            break;
        case "G":
            break;
        case "H":
            break;
        case "I":
            break;
        case "J":
            break;
        case "K":
            salir = true;
            break;
        default:
            window.alert("La opción introducida no es válida.");
            break;
    }
} while (!salir);

console.table(map_libros);