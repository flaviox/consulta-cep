
$(document).ready(function(){
    $("#cep").on('blur', function() {
        var value = $(this).val(),
            cep = value.replace('-', '');
        if (cep) {
            $.getJSON( 'https://viacep.com.br/ws/' + cep + '/json/', function( data ) {
                $("#logradouro").val( data.logradouro );
                $("#bairro").val( data.bairro );
                $("#cidade").val( data.localidade );
                $("#uf").val( data.uf );
                $("#ibge").val( data.ibge );
                $("#complemento").val( data.complemento );
            });
        }
    });
});