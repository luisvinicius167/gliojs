;(function ( window , document ) {
  var glio = {
    /**
     * Initial Configuration
     * you can change the values before init method
     * glio.config.key = value;
     **/
    config: {
      screenWidthFragment: 12,  // the width of screen : 12
      centerTopHeight: 10, // the value of height to trigger a callback on center-top
      heightTopLeft: 30,  // the value of height when top-left direction is set
      heightTopRight: 30, // the value of height when top-right direction is set
    },
    // glio methods status
    statusTopLeft: "inactive",
    statusTopRight: "inactive",
    statusBottomLeft: "inactive",
    statusBottomRight: "inactive",
    statusTop: "inactive",
    init: function ( ) {
      // return a Array with the methods
      glio.methods = Array.prototype.slice.call(arguments);
      // get the direction and your correspondent callback
      Array.prototype.forEach.call(glio.methods, function (index) {
        if ( glio.getDirection( index[0], "top-left" ) ) {
          glio.topLeftFn = glio.trigger(index[1]);
        }
        else if ( glio.getDirection( index[0], "top-right" ) ) {
          glio.topRightFn = glio.trigger(index[1]);
        }
        else if ( glio.getDirection( index[0], "bottom-right" ) ) {
          glio.bottomRightFn = glio.trigger(index[1]);
        }
        else if ( glio.getDirection( index[0], "bottom-left" ) ) {
          glio.bottomLeftFn = glio.trigger(index[1]);
        }
        else if ( glio.getDirection( index[0], "top" ) ) {
          glio.TopFn = glio.trigger(index[1]);
        }
      });
      // Event mousemove just one time
      document.body.addEventListener('mousemove', function( event ) {
        var pointX = event.pageX
          , pointY = event.pageY
        ;
        
        if ( typeof glio.topLeftFn === "function" &&  glio.statusTopLeft === "inactive" ) {
          glio.callTopleft(pointX, pointY, glio.topLeftFn);
        }
        if (typeof glio.topRightFn === "function" && glio.statusTopRight === "inactive" ) {
          glio.callTopRight(pointX, pointY, glio.topRightFn);
        }
        if (typeof glio.bottomLeftFn === "function" && glio.statusBottomLeft === "inactive" ) {
          glio.callBottomLeft(pointX, pointY, glio.bottomLeftFn);
        }
        if (typeof glio.bottomRightFn === "function" && glio.statusBottomRight === "inactive" ) {
          glio.callBottomRight(pointX, pointY, glio.bottomRightFn);
        }
        if (typeof glio.TopFn === "function" && glio.statusTop === "inactive" ) {
          glio.callCenterTop(pointX, pointY, glio.TopFn);
        }
      });
    },
    // return a callback who will pass like argument to other function
    trigger: function ( callback ) {
        return callback;
    },
    // the value of top-right screen, for use when user pass the mouse in the area
    getWidthRightValue: function ( ) {
      var screenWidthFragment = glio.getScreenWidthFragment()
        , topRightValue = ( screenWidthFragment * glio.config.screenWidthFragment ) - screenWidthFragment
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
      var screenWidthFragment = (parseInt(window.innerWidth) / glio.config.screenWidthFragment);
      return screenWidthFragment;
    },
    // The value of total screen height are divided in parts
    getScreenHeightFragment: function () {
      var screenHeightFragment = (parseInt(window.innerHeight) / glio.config.screenWidthFragment);
      return screenHeightFragment;
    },
     // the height value of bottom. this value is the same, independent the direction
    getBottomHeightValue: function ( ) {
      var screenHeightFragment = glio.getScreenHeightFragment()
        , bottomRightValue = ( screenHeightFragment * glio.config.screenWidthFragment ) - screenHeightFragment
      ;
      return bottomRightValue;
    },
    // verify if direction who user is the same of directions who glio have
    getDirection: function ( directionUser, direction ) {
      if ( directionUser === direction ) {
        return true;
      };
      return false;
    },
    /*
     * Functions of each direction
     */
    callTopleft: function ( x, y, callback ) {
      if ( x <= glio.getScreenWidthFragment() && y <= glio.config.heightTopLeft ) {
        glio.statusTopLeft = "active";
        callback();
      };
    },
    callTopRight: function ( x, y, callback ) {
      if ( x > glio.getWidthRightValue() && y <= glio.config.heightTopRight ) {
        glio.statusTopRight = "active";
        callback();
      };         
    },
    callBottomRight: function ( x, y, callback ) {
      if ( x >= glio.getWidthRightValue() && y >= glio.getBottomHeightValue() ) {
        glio.statusBottomRight = "active";
        callback();
      };
    },
    callBottomLeft: function ( x, y, callback ) {
      if ( x <= glio.getScreenWidthFragment() && y >= glio.getBottomHeightValue() ) {
        glio.statusBottomLeft = "active";
        callback();
      };
    },
    callCenterTop: function ( x, y, callback ) {
      if ( x > glio.getScreenWidthFragment() && x < glio.getWidthRightValue() &&  y <= glio.config.centerTopHeight ) {
        glio.statusTop = "active";
        callback();
      };
    },
    // return only the methods init and config
    start: function () {
      return {
        init: glio.init,
        config: glio.config
      }
    }
  };
  // return glio object
  if (!window.glio) {
    window.glio = glio.start();
  };

}( window, document));
