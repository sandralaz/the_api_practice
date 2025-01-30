$(document).ready(function() {
   
    $('#fetch-dog-btn').click(function() {
        $.ajax({
            url: 'https://dog.ceo/api/breeds/image/random',
            method: 'GET',
            success: function(response) {
               
                const imageUrl = response.message;
                
             
                const breedName = imageUrl.split('/')[4]; 
                
                
                $('#dog-info').html(`
                    <h2>Perro Aleatorio</h2>
                    <img src="${imageUrl}" alt="${breedName}" />
                    <p><strong>Raza:</strong> ${breedName.charAt(0).toUpperCase() + breedName.slice(1)}</p>
                `);
            },
            error: function() {
               
                $('#dog-info').html('<p>Hubo un error al obtener la información. Intenta nuevamente.</p>');
            }
        });
    });
});
