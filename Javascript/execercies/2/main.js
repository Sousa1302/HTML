// Goncalo Sousa
$(document).ready(function() {
    $('#colors .car img').hide();

    $('#colors .car').on('click', function() {
        $('#colors .car').removeClass('active').addClass('inactive');
        
        $(this).removeClass('inactive').addClass('active');
        
        var namecor = $(this).find('dt').text();
        $('#selectedColor span').text(namecor.trim());
        
        $('#colors .car img').fadeOut();
        $(this).find('img').fadeIn();
    });
});
