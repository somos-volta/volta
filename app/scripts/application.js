$(document).ready(function () {

	//console.log("Theme ready!")

});

$(document).ready(function () {

    ;( function( $, window, document, undefined )
    {
        'use strict';

        var elSelector      = '#navigation',
            $element        = $( elSelector );

        if( !$element.length ) return true;

        var elHeight        = 0,
            elTop           = 0,
            $document       = $( document ),
            dHeight         = 0,
            $window         = $( window ),
            wHeight         = 0,
            wScrollCurrent  = 0,
            wScrollBefore   = 0,
            wScrollDiff     = 0,
            hasHero         = false;

        $window.on( 'scroll', function()
        {
            elHeight        = $element.outerHeight();
            dHeight         = $document.height();
            wHeight         = $window.height();
            wScrollCurrent  = $window.scrollTop();
            wScrollDiff     = wScrollBefore - wScrollCurrent;
            elTop           = parseInt( $element.css( 'top' ) ) + wScrollDiff;

            hasHero         = $('body').find('.navbar-spacing');

            // scrolled to the very top; element sticks to the top
            if( wScrollCurrent <= 0 )
            {
                $element.css( 'top', 0 );
                $element.removeClass('navbar-light');
                //if(hasHero.length >= 1)
                //    $element.addClass('navbar-dark').removeClass('navbar-light navbar-changed');
                //else
                //    $element.addClass('navbar-light').removeClass('navbar-dark navbar-changed');
            }

            // scrolled up; element slides in
            else if( wScrollDiff > 0 )
            {
                $element.css( 'top', elTop > 0 ? 0 : elTop );
                $element.addClass('navbar-light');
                // $element.addClass('navbar-light navbar-changed').removeClass('navbar-dark');
                // if(hasHero.length >= 1)
                //     console.log('if')
                // else
                //     console.log('else')
                //     //$element.addClass('navbar-light').removeClass('navbar-dark navbar-changed');
            }

            // scrolled down
            else if( wScrollDiff < 0 )
            {
                // scrolled to the very bottom; element slides in
                if( wScrollCurrent + wHeight >= dHeight - elHeight ) {
                    $element.css( 'top', ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 );
                    $element.addClass('navbar-light');
                }

                // scrolled down; element slides out
                else {
                    $element.css( 'top', Math.abs( elTop ) > elHeight ? -elHeight : elTop );
                    $element.removeClass('navbar-light');
                }
            }

            wScrollBefore = wScrollCurrent;
        });

    })( jQuery, window, document );

});
