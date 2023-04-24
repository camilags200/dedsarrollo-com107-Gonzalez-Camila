$(document).ready(function() {
    
    $('#id_formulario1').submit(function(event) {
      event.preventDefault(); 
      var error = false;
      $('#id_formulario1 input[type="text"], #id_formulario1 input[type="radio"], #id_formulario1 select').each(function() {
        if ($(this).prop('required') && $(this).val() === '') {
          $(this).addClass('campo-invalido');
          $(this).parent().append('<p class="mensaje-error">Este campo es requerido</p>');
          error = true;
        }
      });      
      if (error) {
        return false;
      }
     
    });

    $('#id_formulario1 input[type="text"], #id_formulario1 input[type="radio"], #id_formulario1 select').change(function() {
     
      if ($(this).val() !== '') {
        $(this).removeClass('campo-invalido');
        $(this).parent().find('.mensaje-error').remove();
      }
    });
  });