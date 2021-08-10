    
    $('.task-input').click(function(){

        let inputVal = $('.task-input input').val()

        if (inputVal.length>0){
            $('.task-list').append($(`<li></li>`).text(inputVal))
            
            inputVal = $('.task-input input').val("")
        }

    })

    //

    $('.decider button').click(function(){

        if ($('.status').hasClass('.active')){

            $('.status').removeClass('.active')
            $('.status').text('Off')
            $('.decider button').text("Turn on")
            $('.decider img').attr('src', 'https://si.wsj.net/public/resources/images/BN-WB523_1109RO_12S_20171109172506.jpg')
        } else {
            $('.status').addClass('.active')
            $('.status').text('On')
            $('.decider button').text("Turn off")
            $('.decider img').attr('src', 'https://media.giphy.com/media/szmSyB2PnehgY/giphy.gif')
        }

    })

    //

    $('.cool-kids button').click(function(){

        let clickedOn = $(this).css('background-color')

        $('.cool-kids main').css('background-color', clickedOn)

    })