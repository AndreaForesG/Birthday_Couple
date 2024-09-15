function calcularDias() {
    const fechaInicio = new Date('2022-09-10'); // Fecha de inicio de la relación
    const hoy = new Date();
    const diferencia = hoy - fechaInicio;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    document.getElementById('days-counter').textContent = dias;
  }
  
  window.onload = calcularDias;
  