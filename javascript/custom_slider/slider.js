$('.slider').each(function(){
    var $this = $(this);
    var $group = $this.find('.slide-group');
    var $slides = $this.find('.slide');
    var buttonArray = [];
    var currentIndex = 0;
    var timeout;

    //move() - Function to move the sliders goes here
    function move(newIndex){                        //Creates the slide from old to new one
        var animateLeft, slideLeft;

        advance();

        //If current slide is displayed or slide is animating, do nothing
        if($group.is(':animated') || currentIndex === newIndex)
        {
            return;
        }

        buttonArray[currentIndex].removeClass('active');        //Remove the active class from item
        buttonArray[newIndex].addClass('active');               //Add class to new item

        if(newIndex > currentIndex)                             //if new item > current
        {
            slideLeft = '100%';                                 //Sit the new slide to the right
            animateLeft = '-100%';                              //Animate the current group to the left. 
        }
        else
        {
            slideLeft = '-100%';                                //Sit the new slide to the left
            animateLeft = '100%';                               //Animate the current group to the right. 
        }

        //Position new slide to the left (if less) or right (if more) of current
        $slides.eq(newIndex).css({left:slideLeft, display: 'block'});
        $group.animate({left:animateLeft}, function(){
            $slides.eq(currentIndex).css({display: 'none'});
            $slides.eq(newIndex).css({left:0});
            $group.css({left: 0});
            currentIndex = newIndex;
        });
    }                     

    function advance()
    {
        clearTimeout(timeout);
        //Start timer to run an anonymous function every 4 seconds
        timeout = setTimeout(function(){
            if(currentIndex < ($slides.length - 1))
            {
                move(currentIndex + 1);
            }
            else
            {
                move(0);
            }
        }, 5000);
    }

    $.each($slides, function(index){
        //Create a button element for the button
        var $button = $('<button type="button" class="slide-btn">&bull;</button>');
        if(index === currentIndex)                      //If index is the current item
        {   
            $button.addClass('active');                 //Add the active class
        }

        $button.on('click', function(){                 //Create an event handler for the button
            move(index);                                //When triggered, the move function is called
        }).appendTo($this.find('.slide-buttons'));       //Add to the buttons holder
        buttonArray.push($button);                      //Add it to the button array
    });
    advance();                                          //Script is setup, call advance to move it;
});
  
    