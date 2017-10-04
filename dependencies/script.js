$(document).ready(function() {

    var phrases = [
        'Anything',
        'Like',
        'Hi',
        'Hello-there',
        'Or-this',
        'You-can-contact-me-on-anything',
        'Well, not anything!',
        'But-most-things',
        'You get the point..',
        'Whoops',
        'But-seriously',
        'If-you-would-like-to-reach-me',
        'Be-specific-and-use-an-email-such-as',
        'Work',
        'Contract-Job',
        'Or-even',
        'Lets-get-coffee',
        'I-will-stop-distracting-you-now',
        'Or-will-I.....',
        'Thanks',
    ];
    var len = phrases.length;
    var index = 0;

    var ctrl = bubbleText({
        element: $('#bubble'),
        newText: phrases[index++],
        letterSpeed: 200,
        repeat: 19,
        timeBetweenRepeat: 1000,
        callback: function() {
            this.newText = phrases[index++ % len];
        },
    });




    $(".icon").hover(
        function() {$(this).attr("src","images/David_Lowes_Profile5.png");},
        function() {$(this).attr("src","images/David_Lowes_Profile2.jpg");
    });
});
