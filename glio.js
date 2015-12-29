(function ( window , document, navigator) {
  var glio = {
    status: "inactive",
    $public: {
      init: function ( direction, callback ) {
        document.body.addEventListener('mousemove', function( event ) {
          var pointX = event.x
            , pointY = event.y
          ;
          if ( direction === "out" && glio.status === "inactive" ) {
            if ( glio.getPlataform("Linux") ) {
              if ( pointX <= glio.getScreenFragment() && pointY <= glio.getHeight() ) {
                glio.status = "active";
                callback();
              }
            } else if ( pointX > glio.getOutValue() && pointY <= glio.getHeight() ) {
              glio.status = "active";
              callback();
            }
          };
        });
      }
    },
    getOutValue: function ( x, direction ) {
      var screenWidthFragment = (parseInt(window.screenX) / 4)
        , outValue = (screenWidthFragment * 4) - screenWidthFragment       
      ;
      return outValue;
    },
    getScreenFragment: function () {
      var screenWidthFragment = (parseInt(window.screenX) / 4);
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
}(window, document, navigator));