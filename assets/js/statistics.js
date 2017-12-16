var arr = ['Leonardo da Vinci could write with one hand and draw with the other at the same time.', '20% of office coffee mugs contain fecal matter.', 'The average American drinks about 600 sodas a year.',
  'When snakes are born with two heads, they fight each other for food.', 'The average person walks the equivalent of three times around the world in a lifetime.', 'A shark can detect one part of blood in 100 million parts of water.',
  'FDA regulations allow 10 insects and 35 fruit fly eggs per 8 ounces of raisins.', 'A jellyfish is 95 percent water.', 'You are 1% shorter in the evening than in the morning.', 'It would take over 1,000 years to watch every video on YouTube.',
  '1 in 10 European babies are conceived in an IKEA bed.', 'A hippo can open its mouth wide enough to fit a 4 foot tall child inside.', 'Fifteen percent of the air you breathe in a metro station is human skin.',
  'The tongue is the strongest muscle in the human body.', 'A group of pugs is called a grumble.', 'Men are 6 times more likely to be struck by lightning than women.', 'The average person consumes 1 pound of insect(s) per year.',
  'The chance of you dying on the way to get lottery tickets is actually greater than your chance of winning.', 'A flea can jump 350 times its body length, the equivalent of a human jumping the length of a football field.',
  'Coca-Cola would be green if coloring wasn’t added to it.', 'An ostrich’s eye is bigger than its brain.', 'A "jiffy" is an actual unit of time for 1/100th of a second.',
  'In an average NFL football game, there are only about 12 minutes of actual play time.', 'It would take 1,200,000 mosquitoes, each sucking at once, to completely drain the average human of blood.',
  'If you started with $0.01 and doubled your money every day, it would take 27 days to become a millionaire.', 'The biggest tapeworm found inside a human body was 35 meters long.', 'Blue Whale fart bubbles are large enough to enclose a horse.',
  'Only one person in two billion will live to be 116 or older.'
]
i = 0, // Start Index
  len = arr.length,
  $el = $('#quote'),
  $temp = $('<span />'); // Helper - Will measure Text width

$temp.hide().appendTo($el.parent()); // Setup Helper

(function loop() {
  var w = $temp.text(arr[i %= len]).width(); // set text + get width
  $el.fadeTo(600, 0).animate({
    width: w
  }, 300, function() {
    $(this).text(arr[i++]).fadeTo(600, 1);
  });
  setTimeout(loop, 5000);
}());
