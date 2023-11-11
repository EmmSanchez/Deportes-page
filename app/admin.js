document.addEventListener('DOMContentLoaded', function () {
  // Comprueba si el navegador soporta el almacenamiento local
  if (typeof (Storage) !== 'undefined') {
    // Verifica si ya existe un contador en el almacenamiento local
    if (localStorage.getItem('visitas')) {
      // Si existe, incrementa el contador
      const visitas = parseInt(localStorage.getItem('visitas')) + 1
      localStorage.setItem('visitas', visitas)
    } else {
      // Si no existe, crea un contador y establece el valor en 1
      localStorage.setItem('visitas', 1)
    }

    // Muestra el contador en la página
    document.getElementById('contador').innerText = 'Visitas: ' + localStorage.getItem('visitas')
  } else {
    // Si el navegador no soporta almacenamiento local, muestra un mensaje de error
    document.getElementById('contador').innerText = 'Lo siento, tu navegador no soporta almacenamiento local.'
  }
})
