class Libro {
    constructor(titulo, autor, num_ejemplares) {
        this._titulo = titulo;
        this._autor = autor;
        this._num_ejemplares = num_ejemplares;
    }

    toString() {
        return `Título: ${this._titulo}, Autor: ${this._autor}, Número de ejemplares: ${this._num_ejemplares}`;
    }
}

const map_libros = new Map();
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
            const ISBN_A = parseInt(window.prompt("Introduzca el ISBN del libro: "));
            if (map_libros.has(ISBN_A)) {
                console.log("El ISBN ya se encuentra dentro del mapa de libros. ");
            } else {
                let titulo = window.prompt("Introduzca el título del libro: ");
                let autor = window.prompt("Introduzca el autor del libro: ");
                let num_ejemplares = parseInt(window.prompt("Introduzca el número ejemplares del libro: "));

                let libro1 = new Libro(titulo, autor, num_ejemplares);

                map_libros.set(ISBN_A, libro1);
            }
            break;
        case "B":
            const ISBN_B = parseInt(window.prompt("Introduzca el ISBN del libro para borrarlo: "));
            if (!map_libros.has(ISBN_B)) {
                console.log(`El libro con el ISBN ${ISBN_B} indicado no se encuentra en el mapa.`);
            } else {
                map_libros.delete(ISBN_B);
                console.log("Libro eliminado correctamente.");
            }
            break;
        case "C":
            const ISBN_C = parseInt(window.prompt("Introduzca el ISBN del libro: "));
            if (!map_libros.has(ISBN_C)) {
                console.log(`El libro con el ISBN ${ISBN_C} indicado no se encuentra en el mapa.`);
            } else {
                console.log(map_libros.get(ISBN_C).toString());
            }
            break;
        case "D":
            let registros = 0;
            for (let libro of map_libros.keys()) {
                console.log(`
                        Título -> ${map_libros.get(libro)._titulo} \n
                        Autor -> ${map_libros.get(libro)._autor} \n
                        Número de Ejemplares-> ${map_libros.get(libro)._num_ejemplares} \n
                        `);
                registros++;
            }
            console.log(`Número total de libros registrados: ${registros}`);
            break;
        case "E":
            const ISBN_D = parseInt(window.prompt("Introduzca el ISBN del libro: "));
            const nueva_cantidad = parseInt(window.prompt("Introduzca la nueva cantidad para el libro."));
            map_libros.get(ISBN_D)._num_ejemplares = nueva_cantidad;
            break;
        case "F":
            const nombre_autor = window.prompt("Introduzca el nombre de un autor: ");
            for (let nom of map_libros.keys()) {
                if (map_libros.get(nom)._autor == nombre_autor) {
                    console.log(map_libros.get(nom)._titulo);
                }
            }
            break;
        case "G":
            const ISBN_E = parseInt(window.prompt("Introduzca el ISBN del libro: "));
            if(!map_libros.has(ISBN_E) || map_libros.get(ISBN_E)._num_ejemplares == 0){
                console.log("Está mal o el ISBN o no quedan ejemplares restantes");
            } else {
                map_libros.get(ISBN_E)._num_ejemplares--;
                console.log("Libro prestado");
            }
            break;
        case "H":
            const ISBN_F = parseInt(window.prompt("Introduzca el ISBN del libro: "));
            if(!map_libros.has(ISBN_F)){
                console.log(`No se encuentra el libro con el ISBN ${ISBN_F}`);
            } else {
                map_libros.get(ISBN_F)._num_ejemplares++;
                console.log("Libro devuelto");
            }
            break;
        case "I":
            
            break;
        case "J":
            map_libros.clear();
            console.log("La lista de libros ahora está vacía.");
            break;
        case "K":
            salir = true;
            break;
        default:
            console.log("La opción introducida no es válida.");
            break;
    }
} while (!salir);