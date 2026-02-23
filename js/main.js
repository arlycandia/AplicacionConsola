let academicStatus = [
  { ramo: "Matemática", nota: 3 },
  { ramo: "Historia", nota: 4 },
  { ramo: "Ciencias", nota: 4 },
  { ramo: "Literatura", nota: 5 },
  { ramo: "Arte", nota: 6 },
];

const listarNotas = () => {
  academicStatus.forEach((ramo) => {
    console.log("Ramo: " + ramo.ramo + " Nota: " + ramo.nota);
  });
};

function calcularPromedio() {
  acumulador = 0;
  academicStatus.forEach((element) => {
    acumulador = acumulador + element.nota;
  });
  let promedio = acumulador / academicStatus.length;
  return promedio;
}

function resultadoSemestre(promedio) {
  if (promedio >= 4) {
    alert("Haz aprobado con un: " + promedio);
  } else {
    alert("Reprobaste con: " + promedio);
  }
}

function mejorNota() {
  let mejorNota = { ramo: "", nota: 0 };
  academicStatus.forEach((element) => {
    if (element.nota > mejorNota.nota) {
      mejorNota = element;
    }
  });
  console.log("tu mejor desempeño fue en: ", mejorNota);
}

function agregarAsignatura() {
  let asignatura = prompt("Ingrese Asignatura");
  let nota = prompt("ingrese nota");

  if (!isNaN(nota)) {
    academicStatus.push({
      ramo: asignatura,
      nota: parseInt(nota),
    });
  } else {
    alert("Numero invalido, regrasaste al menú");
  }
}

function resultadoMenu(opcion) {
  switch (opcion) {
    case "1":
      listarNotas();
      break;
    case "2":
      console.log("Tu promedio es: " + calcularPromedio());
      break;
    case "3":
      resultadoSemestre(calcularPromedio());
      break;
    case "4":
      console.log("Total de ramos es: " + academicStatus.length);
      break;
    case "5":
      mejorNota();
      break;
    case "6":
      agregarAsignatura();
      break;
  }
}

while (true) {
  // Ejecución de las funciones

  let opcion = prompt(`Mostraremos tu estado académico, presiona una opción:
    1. Ver notas
    2. Ver promedio
    3. Aprobaste/Reprobaste???
    4. Ver total ramos
    5. Ver mejor nota
    6. Agregar Asignatura
    0. Salir`);
  resultadoMenu(opcion);
  if (opcion === "0") {
    alert("Gracias por usar el sistema");
    break;
  }
}
