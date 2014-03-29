##Mosaiqo ColorPicker

It's a simple color picker made with [Polymer](http://www.polymer-project.org/).
It is just a simple aproach, and the very first version.

###Try It
Create your project directory
    
    mkdir my-project


Then you need to install Polymer
    
    bower init
    bower install --save polymer


Donwload ColorPicker:

    git clone https://github.com/boudydegeer/mosaiqo-color-picker.git


Create an `index.html` file and paste in this code
    
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mosaiqo Color Picker</title>
  </head>
  <body>
      <!-- 1. Load platform support before any code that touches the DOM. -->
      <script src="bower_components/platform/platform.js"></script>
      <section>
        <h4>Mosaiqo Color Picker</h4>
        <article>
          <!-- 2. Load the component using an HTML Import -->
          <link rel="import" href="color-picker.html">
          <mosaiqo-color-picker name="Red" color="#ff0000"> </mosaiqo-color-picker>
        </article>
      </section>
  </body>
</html>```

Thats it!!!

Enjoy