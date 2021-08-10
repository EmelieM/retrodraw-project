
const h3 = $('<h3>')
const p = $('<p>')
const img = $('<img>')

h3.text('Hello, World')
p.html('<b>This</b> is my text')
img.attr('src','http://placeimg.com/640/480/nature?1')

$('.slo-mo').append(h3).append(p).append(img)


$('.normal-speed').append( $('<h3>').text('Hello, World'))
$('.normal-speed').append( $('<p>').html('<b>This</b> is my text'))
$('.normal-speed').append( $('<img>').attr('src','http://placeimg.com/640/480/nature?1'))


$('.rewind')
    .prepend($('<h3>').text('Hello, World'))
    .prepend( $('<p>').html('<b>This</b> is my text'))
    .prepend( $('<img>').attr('src','http://placeimg.com/640/480/nature?1'))


    $('.turbo').html(`<h3>Hello, World</h3>
    <p><b>This</b> is my text</p>
   <img src="http://placeimg.com/640/480/nature?1"/>`) //use backtics not '' and wrap it around all html