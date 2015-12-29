;(function ( window , document, navigator ) {
  var glio = {
    status: "inactive",
    $public: {
      init: function ( direction, callback ) {
        document.body.addEventListener('mousemove', function( event ) {
          var pointX = event.x
            , pointY = event.y
          ;
          if ( direction === "top-left" && glio.status === "inactive" ) {
              if ( pointX <= glio.getScreenFragment() && pointY <= glio.getHeight() ) {
                glio.status = "active";
                callback();
              };
          } else if ( direction === "top-right" && glio.status === "inactive" ) {
              if ( pointX > glio.getTopRightValue() && pointY <= glio.getHeight() ) {
                glio.status = "active";
                callback();
              };
            }
          }
        );
      }
    },
    getTopRightValue: function ( ) {
      var screenWidthFragment = glio.getScreenFragment()
        , topRightValue = ( screenWidthFragment * 4 ) - screenWidthFragment
      ;
      return topRightValue;
    },
    getScreenFragment: function () {
      var screenWidthFragment = (parseInt(window.screen.width) / 4);
      return screenWidthFragment;
    },
    getHeight: function ( ) {
      var sHeight = 50;
      return sHeight;
    },
    getPlataform: function ( os ) {
      var platform = navigator.platform;
      if ( platform.search(os) != -1 ) {
        return true;
      }
    }
  };
  if (!window.glio) {
    window.glio = glio.$public;
  };
}( window, document, navigator ));