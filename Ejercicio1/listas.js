const notas = new Array();
let salir = false;

do {
    const opcion = window.prompt("Gestión de notas. Escoja una opción: \n" +
        "A. Introducir una nota al principio. \n" +
        "B. Introducir una nota al final \n" +
        "C. Subir todas las notas X puntos \n" +
        "D. Calcular estadísticas actuales \n" +
        "E. Vaciar notas \n" +
        "F. Inicializar N notas a valor X \n" +
        "G. Eliminar la primera nota \n" +
        "H. Eliminar la segunda nota \n" +
        "I. Establecer a 0 todos los suspensos \n" +
        "J. Sustituir una nota por otra \n" +
        "K. Añadir una nota en una posición determinada \n" +
        "L. Contar el número de suspensos \n" +
        "M. Salir: Finalizar la ejecución del programa."
    ).toUpperCase();

    switch (opcion) {
        case "A":
            notas.unshift(parseFloat(window.prompt("Introduzca una nota para ponerla al principio de la lista.")));
            break;
        case "B":
            notas.push(parseFloat(window.prompt("Introduzca una nota para ponerla al final de la lista.")));
            break;
        case "C":
            let suma = parseFloat(window.prompt("Introduzca en cuantos puntos quiere incrementar todas las notas de la lista."));
            for (let i = 0; i < notas.length; i++) {
                if (notas[i] + suma >= 10) {
                    notas[i] = 10;
                } else {
                    notas[i] += suma;
                }
            }
            break;
        case "D":
            if (notas.length == 0) {
                window.alert("No se pueden calcular las estadísticas");
            } else {
                window.alert(`Estadisticas actuales de la lista de notas: \n`,
                    `Moda: ${moda(notas)} \n`,
                    `Máximo: ${maximo(notas)} \n`,
                    `Mínimo: ${minimo(notas)} \n`,
                    `Media: ${media(notas)}`
                );
            }
            break;
        case "E":
            notas.length = 0;
            window.alert("La lista de notas está vacía.");
            break;
        case "F":
            const num_notas = parseInt(window.prompt("Introduzca el número de notas que quiere inicializar."));
            const valor_notas = parseFloat(window.prompt("Introduzca el valor que tendrán las notas."));
            notas = new Array(num_notas);
            notas.fill(valor_notas);
            break;
        case "G":
            if (notas.length == 0) {
                window.alert("La lista está vacía.");
            } else {
                notas.shift();
            }
            break;
        case "H":
            if (notas.length < 2) {
                window.alert("No existe una segunda nota.");
            } else {
                notas.splice(1, 1);
            }
            break;
        case "I":
            for (let i = 0; i < notas.length; i++) {
                if (notas[i] < 5) {
                    notas[i] = 0;
                }
            }
            break;
        case "J":
            let nota_origen = parseFloat(window.prompt("Introduzca las notas cuyo valor quiere sustituir. "));
            let nota_destino = parseFloat(window.prompt("Introduzca el valor de nota por el cual quiere sustituirla/s. "));
            for (let i = 0; i < notas.length; i++) {
                if (notas[i] == nota_origen) {
                    notas[i] = nota_destino;
                }
            }
            break;
        case "K":
            let nota = parseFloat(window.prompt("Introduzca una nota."));
            let posicion = parseInt(window.prompt("Introduzca la posición de la lista donde quiere introducir la nota. (Empieza en 0)"));
            notas[posicion] = nota;
            break;
        case "L":
            let contador_suspensos = 0;
            for (let i = 0; i < notas.length; i++) {
                if (notas[i] < 5) {
                    contador_suspensos++;
                }
            }
            window.alert(`Hay un total de ${contador_suspensos} suspensos en la lista de notas. `);
            break;
        case "M":
            window.alert("Saliendo del programa.");
            salir = true;
            break;
        default:
            window.alert("La opción introducida no es válida.");
            break;
    }

} while (!salir);

function moda(lista_notas) {
    let maxRepeticiones = 0;
    let valorModa = lista_notas[0];

    for (let i = 0; i < lista_notas.length; i++) {
        let contador = 0;

        for (let j = 0; j < lista_notas.length; j++) {
            if (lista_notas[i] === lista_notas[j]) {
                contador++;
            }
        }

        if (contador > maxRepeticiones) {
            maxRepeticiones = contador;
            valorModa = lista_notas[i];
        }
    }

    return valorModa;
}

function calcular_moda() {
    let moda;
    let mapa = new Map();

    for (let nota of notas) {
        if (mapa.has(nota)) {
            mapa.set(nota, mapa.get(nota) + 1);
        } else {
            mapa.set(nota, 1);
        }
    }

    let max_repes = 0;
    for (let repe of mapa.keys()) {
        if (max_repes < repe) {
            max_repes = repe;
            moda = repe;
        }
    }

    return moda;
}

function maximo(lista_notas) {
    let max = -Infinity;
    for (let n of lista_notas) {
        if (n > max) {
            max = n;
        }
    }
    return max;
}

function minimo(lista_notas) {
    let min = Infinity;
    for (let n of lista_notas) {
        if (n < min) {
            min = n;
        }
    }
    return min;
}

function media(lista_notas) {
    let media = 0;
    let contador = 0;
    for (let n of lista_notas) {
        media += n;
        contador++;
    }
    return media / contador;
}

console.table(notas);