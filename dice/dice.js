




window.addEventListener('load', function() {
    var images = [
      'imgs/dice-six-faces-six.png',
      'imgs/dice-six-faces-four.png',
      'imgs/dice-six-faces-three.png',
      'imgs/dice-six-faces-five.png',
      'imgs/dice-six-faces-one.png',
      'imgs/dice-six-faces-two.png',
    ];
  
    var imageElements = document.querySelectorAll('img');
  
    for (var i = 0; i < imageElements.length; i++) {
      var randomIndex = Math.floor(Math.random() * images.length);
      var randomImage = images[randomIndex];
      imageElements[i].src = randomImage;
    }
  });


  