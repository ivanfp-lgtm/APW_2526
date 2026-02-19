function calcular() {

    // Obtener valores del formulario
    let ram = Number(document.getElementById("ram").value);
    let precioProcesador = Number(document.getElementById("procesador").value);
    let refrigeracion = document.getElementById("refrigeracion").checked;

    // Precio fijo (no debe cambiar)
    const PRECIO_REFRIGERACION = 80;

    let total = 0;

    // Regla de incompatibilidad:
    // Si elige i9 (500€) y NO marca refrigeración,
    // mostramos error y detenemos el cálculo.
    if (precioProcesador === 500 && !refrigeracion) {
        document.getElementById("resultado").innerText =
            "Error: El i9 requiere refrigeración líquida por seguridad";
        document.getElementById("resultado").style.border = "3px solid red";
        return;
    }

    // Sumamos el procesador
    total += precioProcesador;

    // Si hay refrigeración, la añadimos
    if (refrigeracion) {
        total += PRECIO_REFRIGERACION;
    }

    // Si la RAM es mayor de 32GB añadimos 50€
    if (ram > 32) {
        total += 50;
    }

    // Mostrar resultado
    let resultado = document.getElementById("resultado");
    resultado.innerText = "Presupuesto final: " + total + " €";

    // Semáforo visual
    if (total < 400) {
        resultado.style.border = "3px solid green";
    } else if (total <= 800) {
        resultado.style.border = "3px solid orange";
    } else {
        resultado.style.border = "3px solid red";
    }

    // Añadir al historial sin borrar los anteriores
    let li = document.createElement("li");
    li.innerText = "Presupuesto: " + total + " €";
    document.getElementById("historial").appendChild(li);
}


/*
Pregunta de reflexión:

Si quiero que el precio del procesador i7 no pueda cambiar nunca
debo declararlo con const, porque const impide que el valor
sea modificado durante la ejecución del programa.
*/
