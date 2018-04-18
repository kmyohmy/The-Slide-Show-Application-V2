/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var createSlideshow = function () {
    "use strict";
    
    var timer, play = true, nodes, node, img, stopSlideshow, displayNextImage, setPlayText;
    
    nodes = {image: null, caption: null};
    img = {cache: [], counter: 0};
    
    stopSlideshow = function () {
        
        
    };
    
    displayNextImage = function () {
        if (img.counter === img.cache.length) {
            img.counter = 0;
        } else {
            img.counter += 1;
        }
        var image = img.cache[img.counter];
        
    };
    setPlayText = function () {
        
    };
    
    return {
        loadImages: function (slides) {
            var image, i;
            for (i = 0; i < slides.length; i += 1) {
                image = new Image();
                image.src = slides[i].href;
                image.title = slides[i].title;
                img.cache.push(image);
            }
            return this;
        },
         
        startSlideshow: function () {
            if (arguments.length === 2) {
                nodes.image = arguments[0];
                nodes.caption = arguments[1];
            }
            
            timer = setInterval(displayNextImage, 4000);
            return this;
        },
        
        
        createToggleHandler: function () {
            var btn = this;
          console.log(btn); 
            return function () {
                if (play) {
                    stopSlideshow();
                    
                } else {
                    startSlideshow();
                }
                setPlayText(this);
                play = !play;
            }
        }
    }
    
};


var slideshow = createSlideshow();

window.addEventListener('load', function () {
    "use strict";
    var slides = [
        {href: "images/backpack.jpg", title: "He outdoor"},
        {href: "images/boat.jpg", title: "He in a boat"},
        {href: "images/camaro.jpg", title: "He in a camaro"},
        {href: "images/punk.jpg", title: "He listen to punk"}
    ];
    
    slideshow.loadImages(slides).startSlideshow($("image"), $("caption"));
    $("play_pause").addEventListener('click', slideshow.createToggleHandler);
});