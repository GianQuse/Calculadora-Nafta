function calcular() {
  const kmDia = parseFloat(document.getElementById("kmDia").value);
  const dias = parseFloat(document.getElementById("dias").value);
  const rendimiento = parseFloat(document.getElementById("rendimiento").value);
  const precio = parseFloat(document.getElementById("precio").value);

  if (!kmDia || !dias || !rendimiento || !precio) {
    document.getElementById("resultado").innerText = "⚠️ Completa todos los campos";
    return;
  }

  // 1. KM totales
  const kmTotales = kmDia * dias;

  // 2. Litros consumidos
  const litros = kmTotales / rendimiento;

  // 3. Costo total
  const costo = litros * precio;

  const costoFinal = Math.round(costo);

  document.getElementById("resultado").innerHTML = `
    💰 Costo total: $${costoFinal.toLocaleString("es-AR")}
  `;
}