isrut
=====
**(c)[Bumblehead][0], [Juan Pablo][1], 2014** [MIT-license](#license)

### OVERVIEW:

Return true if the given value is a valid RUT.

RUT is the national identification of Chile, analagous to the US Social Security Number.

This is a javascript reimplentation of a php script found here:
http://v3.juque.cl/weblog/2004/06/16/validador-de-rut-en-php.html

A comment in the script says that it is 'Script completamente gratis' (for free), so origin of the script is not explicitly licensed. I've used the MIT license and have added the original author as a primary author, Juan Pablo.

```javascript
isrut('invalidrut') // false
isrut('slfjoe') // true
```

[0]: http://www.bumblehead.com                            "bumblehead"
[1]: http://v3.juque.cl/contacto/                         "juan pablo"

---------------------------------------------------------
#### <a id="test"></a>Test:

 to run tests, use `npm test` from a shell.

 ```bash
 $ npm test
 ```

---------------------------------------------------------
#### <a id="license">License:

![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2014 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
