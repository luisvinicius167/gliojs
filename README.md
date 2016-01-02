# glio.js
Trigger anything you want when user try to go in the screen corners.
### see <a href="http://luisvinicius167.github.io/gliojs/"> demo </a>.

## Usage:
Import the library ```<script src='glio.min.js'></script>``` in your site.<br><br>
The arguments are a Arrays, where the first index is the direction and the second is a callback. <br>
```glio( [ direction, callback ] )```.

## Directions:
* top
* top-left
* top-right
* bottom-left
* bottom-right

## Example:
* top-left and top-right
```
    glio.init(
      [ 'top-left', function () {
          alert('this is top-left');
        }
      ],
      [ 'top-right', function () {
          alert('this is top-right');
        }
      ]
    );
```

* all directions
```
  glio.init(
    [ 'top', function () {
        alert('this is top.');
      }
    ],
    [ 'top-left', function () {
        alert('this is top-left');
      }
    ],
    [ 'top-right', function () {
        alert('this is top-right');
      }
    ],
    [ 'bottom-left', function () {
        alert('this is bottom-left');
      }
    ],
    [ 'bottom-right', function () {
        alert('this is bottom-right'); 
      }
    ] 
  );
```

## Configurations:
  ```glio.config.key = value;``` Set the configuration before the <i>init</i>. 
 * screenWidthFragment: the quantity of parts the height and width screen will be divided. <i>Default: 12.</i>
 * centerTopHeight: height of 'top' direction. When the mouse is equal or major this value, the callback is triggered. <i>Default: 10.</i>
 * heightTopLeft: height of 'top-left' direction. When the mouse is equal or major this value, the callback is triggered. <i>Default: 30.</i>
 * heightTopRight: height of 'top-right' direction. When the mouse is equal or major this value, the callback is triggered. <i>Default: 30.</i>

### See the demostration <a href="http://luisvinicius167.github.io/gliojs/"> here</a>.
