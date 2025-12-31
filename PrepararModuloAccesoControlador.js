function moduloSeleccionado(modulo, tipoUsuario) {
  let url = '';

  if(modulo === 'preparar-acceso-aplicacion' && tipoUsuario === 'CIUDADANO') {
    url = 'https://nyrp-esp.vercel.app/carpeta-ciudadana.html';
  } else if(modulo === 'preparar-acceso-aplicacion' && tipoUsuario === 'ADMIN') {
    url = 'https://nyrp-esp.vercel.app/admin/preparar-acceso.html';
  }

  if(url !== '') {
    window.location.href = url;
  } else {
    console.error('Módulo o tipo de usuario no válido');
  }
}