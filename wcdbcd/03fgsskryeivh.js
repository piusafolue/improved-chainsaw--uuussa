/* w */
$(document).ready(function() {
    var x = document.createElement('audio');
    x.src = 'dgdh1.wav';
    x.loop = true;

    $('#mycanvas').click(function() { x.play(); });
    $('#link_black').click(function() { x.play(); });
    $('.pro_box').click(function() { x.play(); });
    $('#poptxt').click(function() { x.play(); });
});

$(document).ready(function() {
    var y = document.createElement('audio');
    y.src = 'audio.mp3';
    y.loop = true;

    $('#mycanvas').click(function() { y.play(); });
    $('#link_black').click(function() { y.play(); });
    $('.pro_box').click(function() { y.play(); });
    $('#poptxt').click(function() { y.play(); });
});