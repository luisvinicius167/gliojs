(function ( window , document, navigator) {
  var glio = {
    init: function ( direction, callback ) {
      document.body.addEventListener('mousemove', function( event ) {
        var pointX = event.x
          , pointY = event.y
        ;
        if ( direction === "out" ) {
          if ( glio.getPlataform("Linux") ) {
            if ( pointX <= glio.getScreenFragment() && pointY <= glio.getHeight() ) {
              callback();
            }
          } else if ( pointX > glio.getOutValue() && pointY <= glio.getHeight() ) {
            callback();
          }
        };
      });
    },
    getOutValue: function ( x, direction ) {
      var screenWidthFragment = (parseInt(window.screenX) / 5)
        , outValue = (screenWidthFragment * 5) - screenWidthFragment       
      ;
      return outValue;
    },
    getScreenFragment: function () {
      var screenWidthFragment = (parseInt(window.screenX) / 5);
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
    window.glio = glio;
  };
}(window, document, navigator));