var formulario = document.getElementById('contacto');

formulario.addEventListener('submit', ( e ) => {
    e.preventDefault();
    var datos = new FormData( formulario );
    console.log(datos)
    
    var icono = document.getElementById('icono');
    var botton = document.getElementById('botton');
    botton.classList.add('disabled')
    icono.innerHTML =`<div class="spinner-grow  spinner-grow-sm" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>`,
    icono.classList.toggle("bi-cursor-fill");
    
})