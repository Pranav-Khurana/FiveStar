function main()
{
alert('Welcome to Five Stars.......\nThere might be error, sorry for inconvenience');
$('.mem').hide();
$('.eve').hide();
for(var i=0; i<1000; i++)
{
$('img').fadeOut(10000);
$('img').fadeIn(10000);
}
$('.button').on('click', function () { $(this).toggleClass('togler'); $(this).next().slideToggle(1000);  } );
$('#pics').on('click', function () { window.open("five_stars_gallery.html") } );

}
$(document).ready(main);
