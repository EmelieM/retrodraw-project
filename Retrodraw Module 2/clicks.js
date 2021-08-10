
$('.one button').click(function (){   
    $('.one span').text("Good job!")
});

//

$('.two button').click(function (){  
    $('.two').slideUp()
})

//

$('.three button').click(function (){
    $('.three').append($('<div>').text("Hi! I'm three!"))
})

//

$('.four button').click(function (){

    const targetHTML = $('template').html()

    $('.template-target').html(targetHTML)


})

//

$('.five button').click(function (){

    const clone = $('.five').clone()

    $('.prepend-target').prepend(clone)

})

//

$('.six button').click(function (){

    $('.six').css('transform', 'rotate(180deg)')

})

//

$('.seven button').click(function (){

    const newButton = $('<button>')
    newButton.text("CLICK ME TO DISAPPEAR").css('padding', '1rem').css('margin', '1rem')

    newButton.click(function(){
        let itsClicked = $(this)
        itsClicked.fadeOut()
    })

$('.seven').append(newButton)

})