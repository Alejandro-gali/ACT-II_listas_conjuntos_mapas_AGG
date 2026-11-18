let set_participantes = new Set();
let salir = false;

do {
    const participante = window.prompt("Gestión de Participantes. Introduzca la opción deseada: \n"
        + "A. Inscribir un participante. \n"
        + "B. Dar de baja un participante. \n"
        + "C. Comprobar inscripción. \n"
        + "D. Mostrar participantes. \n"
        + "E. Vaciar inscripciones. \n"
        + "F. Salir."
    ).toUpperCase();

    switch (participante) {
        case "A":
            set_participantes.add(window.prompt("Introduce el nombre de un nuevo participante."));
            break;
        case "B":
            let participante_eliminar = window.prompt("Introduce el nombre del participante a eliminar. ");

            if (set_participantes.has(participante_eliminar)) {
                set_participantes.delete(participante_eliminar);
                window.alert("El participante indicado se ha eliminado correctamente. ");
            } else {
                window.alert("El participante indicado no se encuentra en el conjunto.");
            }

            break;
        case "C":
            if (!set_participantes.has(window.prompt("Indique el nombre del participante que quiere comprobar: "))) {
                window.alert("El participante indicado NO se encuentra en la actividad.");
            } else {
                window.alert("El participante indicado SI encuentra en la actividad.");
            }
            break;
        case "D":
            let contador_participantes = 0;
            let acum_participantes = "";

            for (let participante of set_participantes) {
                acum_participantes += (participante + ", ");
                contador_participantes++;
            }

            window.alert("Todos los participantes: \n"
                + acum_participantes + "\n"
                + "Número de participantes: " + contador_participantes);

            break;
        case "E":
            set_participantes.clear();
            window.alert("Los participantes se han eliminado de la actividad.");
            break;
        case "F":
            salir = true;
            break;
        default:
            window.alert("Opción Inválida.");
            break;
    }

} while (!salir);

console.table(set_participantes);