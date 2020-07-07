(function(){
    $('#btn-contact-submit').click(function(event){
        if(event)
            event.preventDefault()

        let visitor = {
            name: $('#contact-form-name').val(),
            email: $('#contact-form-email').val(),
            message: $('#contact-form-message').val()
        }

        // console.log('CONTACT FORM SUBMITTED' + JSON.stringify(visitor))
        $.ajax({
            url: '/api/subscriber',
            type: 'POST',
            data: visitor,
            success: function(res){
                location.reload(true)
                alert('Your message was deliver, thanks!')
                // console.log('SUBSCRIBER CREATED: ' +JSON.stringify(res))
            },
            error: function(res){
                
            }
        })
    })
})()