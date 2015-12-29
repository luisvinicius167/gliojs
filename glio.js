;(function ( window , document, navigator ) {
  var glio = {
    status: "inactive",
    $public: {
      init: function ( direction, callback ) {
        document.body.addEventListener('mousemove', function( event ) {
          var pointX = event.x
            , pointY = event.y
          ;
          if ( glio.getDirection( direction, "top-left" ) ) {
            glio.callTopleft(pointX, pointY, callback);
          } else if ( glio.getDirection( direction, "top-right" ) ) {
            glio.callTopRight(pointX, pointY, callback);
          }
          }
        );
      }
    },
    // the value of top-right screen, for use when user pass the mouse
    // in the area
    getTopRightValue: function ( ) {
      var screenWidthFragment = glio.getScreenFragment()
        , topRightValue = ( screenWidthFragment * 4 ) - screenWidthFragment
      ;
      return topRightValue;
    },
    // The value of total screen are divided in parts
    getScreenFragment: function () {
      var screenWidthFragment = (parseInt(window.screen.width) / 4);
      return screenWidthFragment;
    },
    // get the value of top height
    getTopHeight: function ( ) {
      var sHeight = 50;
      return sHeight;
    },
    getDirection: function ( directionUser, direction ) {
      if ( directionUser === direction ) {
        return true;
      };
    },
    callTopleft: function ( x, y, callback ) {
      if ( x <= glio.getScreenFragment() && y <= glio.getTopHeight() ) {
        glio.status = "active";
        callback();
      };
    },
    callTopRight: function ( x, y, callback ) {
      if ( x > glio.getTopRightValue() && y <= glio.getTopHeight() ) {
        glio.status = "active";
        callback();
      };         
    }
  };
  if (!window.glio) {
    window.glio = glio.$public;
  };
}( window, document, navigator ));