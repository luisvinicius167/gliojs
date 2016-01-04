# glio.js
Detects if the mouse of a user leaves the viewport / document borders of your website and when this happens, trigger your callback.
<br><a href="https://github.com/luisvinicius167/gliojs/blob/master/README-PT.md"> Portuguese documentation. </a>
####  How it works: <a href="http://luisvinicius167.github.io/gliojs/"> Demo </a>

### Reasons for use:
* Increase your conversion rates!
* Give visitors reasons to stay!
* Grab your users’ attention!

### Articles about Exit-popups:
* <a href="http://conversionsciences.com/blog/7-best-practices-using-exit-intent-popovers/">7 Best Practices for Using Exit-Intent Popovers, Popups</a>
* <a href="http://blog.getrooster.com/5-scientific-reasons-exit-popups-freaking-effective/">5 Scientific Reasons Exit Popups Are So Freaking Effective</a>

## Install:
#### NPM:
* ``` npm install gliojs ```
 

#### Install using Bower:
* ``` bower install glio.js ```

#### Manual install:
*Import the library glio.min.js in 'dist' folder in your site. ```<script src='glio.min.js'></script>```

## Usage:
The arguments are a Arrays, where the first index is the direction and the second is a callback. <br>
```javascript 
glio( [ direction, callback ] );
```

## 5 Directions:
* top
* top-left
* top-right
* bottom-left
* bottom-right

## Example:
* top-left and top-right
```javascript
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
```javascript
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

This software is licensed under the MIT License.
