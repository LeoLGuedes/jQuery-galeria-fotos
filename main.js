$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btt-red').click(function() {
        $('form').slideUp();
    })

    

    $('form').on('submit', function(e) {
        e.preventDefault();

        const newImg = $('#endereço-img-nova').val()
        const novoItem = $('<li style="display: none;"></li>')


        $(`<img src="${newImg}"/>`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${newImg}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        
        $('#endereço-img-nova').val('')
    })
})

