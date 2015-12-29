;(function ( window , document, navigator ) {
  var glio = {
    // glio status
    status: "inactive",
    // public method
    $public: {
      init: function ( direction, callback ) {
        document.body.addEventListener('mousemove', function( event ) {
          var pointX = event.x
            , pointY = event.y
          ;
          if ( glio.status === "inactive" ) {
            if ( glio.getDirection( direction, "top-left" ) ) {
              glio.callTopleft(pointX, pointY, callback);
            } 
            else if ( glio.getDirection( direction, "top-right" ) ) {
              glio.callTopRight(pointX, pointY, callback);
            }
            else if ( glio.getDirection( direction, "bottom-right" ) ) {
              glio.callBottomRight(pointX, pointY, callback);
            }
            else if ( glio.getDirection( direction, "bottom-left" ) ) {
              glio.callBottomLeft(pointX, pointY, callback);
            }
          }
        });
      }
    },
    // the value of top-right screen, for use when user pass the mouse in the area
    getWidthRightValue: function ( ) {
      var screenWidthFragment = glio.getScreenWidthFragment()
        , topRightValue = ( screenWidthFragment * 4 ) - screenWidthFragment
      ;
      return topRightValue;
    },
    // get the value of top height
    getTopHeight: function ( ) {
      var sHeight = 50;
      return sHeight;
    },
    // The value of total screen width are divided in parts
    getScreenWidthFragment: function () {
      var screenWidthFragment = (parseInt(window.screen.width) / 4);
      return screenWidthFragment;
    },
    // The value of total screen height are divided in parts
    getScreenHeightFragment: function () {
      var screenHeightFragment = (parseInt(window.screen.height) / 4);
      return screenHeightFragment;
    },
     // the height value of bottom. this value is the same, independent the direction
    getBottomHeightValue: function ( ) {
      var screenHeightFragment = glio.getScreenHeightFragment()
        , bottomRightValue = ( screenHeightFragment * 4 ) - screenHeightFragment
      ;
      return bottomRightValue;
    },
    // verify if direction who user is the same of directions who glio have
    getDirection: function ( directionUser, direction ) {
      if ( directionUser === direction ) {
        return true;
      };
    },
    /*
     * Functions of each direction
     */
    callTopleft: function ( x, y, callback ) {
      if ( x <= glio.getScreenWidthFragment() && y <= glio.getTopHeight() ) {
        glio.status = "active";
        callback();
      };
    },
    callTopRight: function ( x, y, callback ) {
      if ( x > glio.getWidthRightValue() && y <= glio.getTopHeight() ) {
        glio.status = "active";
        callback();
      };         
    },
    callBottomRight: function ( x, y, callback ) {
      if ( x >= glio.getWidthRightValue() && y >= glio.getBottomHeightValue() ) {
        glio.status = "active";
        callback();
      };
    },
    callBottomLeft: function ( x, y, callback ) {
      if ( x <= glio.getScreenWidthFragment() && y >= glio.getBottomHeightValue() ) {
        glio.status = "active";
        callback();
      };
    }
  };
  if (!window.glio) {
    window.glio = glio.$public;
  };
}( window, document, navigator ));