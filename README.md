# glio.js
Trigger anything you want when user try move out your site.

## Usage:
Import the library ```<script src='glio.min.js'></script>``` in your site.<br><br>
The arguments are a Arrays, where the first index is the direction and the second is a callback. <br>
```glio( [ direction, callback ] )```.

## Directions:
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
    
### See the demostration <a href="http://luisvinicius167.github.io/gliojs/"> here</a>.
