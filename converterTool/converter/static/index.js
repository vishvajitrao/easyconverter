
function charCount() {

  // Total Character Counter Code
  var chars = document.getElementById('exampleFormControlTextarea1').value;
  document.getElementById('exampleFormControlTextarea1').value = chars;
  document.getElementById('totalValue').innerHTML = chars.replace(/\n/g, '').length;

  // Close Total Character Counter Code
}


// Total Words Counter Code
function wordCount() {
  var words = document.getElementById('exampleFormControlTextarea1').value;

  var url = `/total-words?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("totalValue").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

// Close Total Words Counter Code





// Upper Case To Lower Case 
function lowerCase() {
  var words = document.getElementById('exampleFormControlTextarea1').value;
  document.getElementById('exampleFormControlTextarea1').value = words.toLowerCase();
}


// Lower Case To Uppert Case 
function upperCase() {
  var words = document.getElementById('exampleFormControlTextarea1').value;
  document.getElementById('exampleFormControlTextarea1').value = words.toUpperCase();
}



// String reverse

function stringReverse() {
  var words = document.getElementById('exampleFormControlTextarea1').value;
  var splitString = words.split("");
  var reverseArray = splitString.reverse();
  document.getElementById('exampleFormControlTextarea1').value = reverseArray.join("");
}

// Word reverse

function wordReverse() {
  var words = document.getElementById('exampleFormControlTextarea1').value;
  var splitString = words.split(" ");
  var reverseArray = splitString.reverse();
  document.getElementById('exampleFormControlTextarea1').value = reverseArray.join(" ");
}


// Title Case converter toll code

function titleCase() {
  var words = document.getElementById('exampleFormControlTextarea1').value;

  var url = `/title-case?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('exampleFormControlTextarea1').value = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}



// Capitalize first letter of the string

function Capitalize() {
  var words = document.getElementById('exampleFormControlTextarea1').value;
  document.getElementById('exampleFormControlTextarea1').value = words.charAt(0).toUpperCase() + words.slice(1);

}




// Binary To Decimal

// Binary to decimal converter code

function bintoDec() {

  var words = document.getElementById('exampleFormControlTextarea1').value;

  var url = `/binary-to-decimal?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('result').innerHTML = `<h5 class="alert alert-success"> Decimal Integer of ${words} binary is ${this.responseText} </h5>`;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}



// Binary to decimal converter code

function bintoOct() {

  var words = document.getElementById('exampleFormControlTextarea1').value;

  var url = `/binary-to-octal?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('result').innerHTML = `<h5 class="alert alert-success"> Octal Representation of ${words} binary is ${this.responseText} </h5>`;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}


// Binary to Hexadecimal converter code

function bintoHex() {
  var words = document.getElementById('exampleFormControlTextarea1').value;

  var url = `/binary-to-hexadecimal?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('result').innerHTML = `<h5 class="alert alert-success"> Hexadecimal Representation of ${words} binary is '${this.responseText}' </h5>`;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}
// Octal to Binary converter code
function octtoBin() {

  var words = document.getElementById('exampleFormControlTextarea1').value;

  var url = `/octal-to-binary?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('result').innerHTML = `<h5 class="alert alert-success"> Binary Representation of ${words} is ${this.responseText} </h5>`;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}



// Octal to Decimal converter code
function octtoDec() {

  var words = document.getElementById('exampleFormControlTextarea1').value;

  var url = `/octal-to-decimal?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('result').innerHTML = `<h5 class="alert alert-success"> Decimal Representation of ${words} is ${this.responseText} </h5>`;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}



// Octal to Decimal converter code
function octtoHex() {

  var words = document.getElementById('exampleFormControlTextarea1').value;

  var url = `/octal-to-hexadecimal?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('result').innerHTML = `<h5 class="alert alert-success"> Hexadecimal Representation of ${words} is ${this.responseText} </h5>`;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}
// Hexadecimal to Decimal converter code
function hextoDec() {

  var words = document.getElementById('exampleFormControlTextarea1').value;

  var url = `/hexadecimal-to-decimal?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('result').innerHTML = `<h5 class="alert alert-success"> Decimal Representation of ${words} is ${this.responseText} </h5>`;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}
// Hexadecimal to Binary converter code
function hextoBin() {

  var words = document.getElementById('exampleFormControlTextarea1').value;

  var url = `/hexadecimal-to-binary?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('result').innerHTML = `<h5 class="alert alert-success"> Binary Representation of ${words} is ${this.responseText} </h5>`;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}
// Hexadecimal to Octal converter code
function hextoOct() {

  var words = document.getElementById('exampleFormControlTextarea1').value;

  var url = `/hexadecimal-to-octal?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('result').innerHTML = `<h5 class="alert alert-success"> Octal Representation of ${words} is ${this.responseText} </h5>`;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}
// Decimal to Binary converter code
function dectoBin() {

  var words = document.getElementById('exampleFormControlTextarea1').value;

  var url = `/decimal-to-binary?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('result').innerHTML = `<h5 class="alert alert-success"> Binary Representation of ${words} is ${this.responseText} </h5>`;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}
// Decimal to Octal converter code
function dectoOct() {

  var words = document.getElementById('exampleFormControlTextarea1').value;

  var url = `/decimal-to-octal?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('result').innerHTML = `<h5 class="alert alert-success"> Octal Representation of ${words} is ${this.responseText} </h5>`;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}
// Decimal to Binary converter code
function dectoHex() {

  var words = document.getElementById('exampleFormControlTextarea1').value;

  var url = `/decimal-to-hexadecimal?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('result').innerHTML = `<h5 class="alert alert-success"> Hexadecimal Representation of ${words} is ${this.responseText} </h5>`;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}




// HTML Encoder
function Encode() {
  var words = document.getElementById('exampleFormControlTextarea1').value;
  var check = document.getElementById('exampleCheck1');
  if (words != '' && check.checked == false) {
    document.getElementById('results').value = words.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }
  else if (words != '' && check.checked == true) {
    document.getElementById('results').value = words.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
  }
}



// HTML Decoder
function Decode() {

  var words = document.getElementById('exampleFormControlTextarea1').value;
  var check = document.getElementById('exampleCheck1');
  document.getElementById('results').value = words.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")

}



// Bse64 Encoder
function base64Encode() {
  alert()
  var words = document.getElementById('exampleFormControlTextarea1').value;
  document.getElementById('results').value = btoa(words)

}


// Base64 Decoder
function base64Decoder() {

  var words = document.getElementById('exampleFormControlTextarea1').value;
  document.getElementById('results').value = atob(words)

}



// String to binary
function stringtoBin() {
  var words = document.getElementById('exampleFormControlTextarea1').value;
  const obj = {string_data: words};
  var url = '/string-to-binary';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('results').value = this.responseText;
    }
  };
  xhttp.open("POST", url, true);
  //Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/json');
  xhttp.send(JSON.stringify(obj));
  
}


// Binary to string
function binarytoString() {


  var words = document.getElementById('exampleFormControlTextarea1').value;
  document.getElementById('results');
  var url = `/binary-to-string?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('results').value = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}



// String to hex
function stringtoHex() {
  var words = document.getElementById('exampleFormControlTextarea1').value;
  document.getElementById('results');
  var url = `/string-to-hex?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('results').value = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}



// Binary to string
function hextoString() {


  var words = document.getElementById('exampleFormControlTextarea1').value;
  document.getElementById('results');
  var url = `/hex-to-string?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('results').value = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}

 
// encode url
function urlEncode() {
  var words = document.getElementById('exampleFormControlTextarea1').value;
  document.getElementById('results');
  var url = `/url-encoder?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('results').value = this.responseText + '\n';
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}

// decode url
function urlDecode() {


  var words = document.getElementById('exampleFormControlTextarea1').value;
  document.getElementById('results');
  var url = `/url-decoder?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('results').value = this.responseText + '\n';
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}


// Pass Generator

function passGenerate() {
  var words = document.getElementById('exampleFormControlTextarea1');
  var upper = document.getElementById('upper');
  var lower = document.getElementById('lower');
  var digits = document.getElementById('digits');
  var symb = document.getElementById('symbols');
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var digit = '0123456789';
  var Symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  var pass = '';
  if (upper.checked == true && lower.checked == true && digits.checked == true && symb.checked == true) {
    var total = upperCase + lowerCase + digit + symb;
    for (i = 1; i <= 10; i++) {
      var char = Math.floor(Math.random()
        * total.length + 1);

      pass += total.charAt(char)
    }

    words.value = pass;

  }

  else if (upper.checked == true && lower.checked == true && digits.checked == true ) {
    var total = upperCase + lowerCase + digit;
    for (i = 1; i <= 10; i++) {
      var char = Math.floor(Math.random()
        * total.length + 1);

      pass += total.charAt(char)
    }

    words.value = pass;

  }

  else if (symb.checked == true && lower.checked == true && digits.checked == true ) {
    var total = lowerCase + digit + Symbols;
    for (i = 1; i <= 10; i++) {
      var char = Math.floor(Math.random()
        * total.length + 1);

      pass += total.charAt(char)
    }

    words.value = pass;

  }
  else if (upper.checked == true && lower.checked == true) {
    var total = upperCase + lowerCase;
    for (i = 1; i <= 10; i++) {
      var char = Math.floor(Math.random()
        * total.length + 1);

      pass += total.charAt(char)
    }

    words.value = pass;

  }

  else if (upper.checked == true && digits.checked == true) {
    var total = upperCase + digit;
    for (i = 1; i <= 10; i++) {
      var char = Math.floor(Math.random()
        * total.length + 1);

      pass += total.charAt(char)
    }

    words.value = pass;

  }


  else if (upper.checked == true && symb.checked == true) {
    var total = upperCase + Symbols;
    for (i = 1; i <= 10; i++) {
      var char = Math.floor(Math.random()
        * total.length + 1);

      pass += total.charAt(char)
    }

    words.value = pass;

  }
  else if (lower.checked == true && symb.checked == true) {
    var total = lowerCase + Symbols;
    for (i = 1; i <= 10; i++) {
      var char = Math.floor(Math.random()
        * total.length + 1);

      pass += total.charAt(char)
    }

    words.value = pass;

  }

  else if (lower.checked == true && digits.checked == true) {
    var total = lowerCase + digit;
    for (i = 1; i <= 10; i++) {
      var char = Math.floor(Math.random()
        * total.length + 1);

      pass += total.charAt(char)
    }

    words.value = pass;


  }
  else if (digits.checked == true && symb.checked == true) {
    var total = digit + Symbols;
    for (i = 1; i <= 10; i++) {
      var char = Math.floor(Math.random()
        * total.length + 1);

      pass += total.charAt(char)
    }

    words.value = pass;

  }


  else if (upper.checked == true) {
    for (i = 1; i <= 10; i++) {
      var char = Math.floor(Math.random()
        * upperCase.length + 1);

      pass += upperCase.charAt(char)
    }

    words.value = pass;

  }
  else if (lower.checked == true) {
    for (i = 1; i <= 10; i++) {
      var char = Math.floor(Math.random()
        * lowerCase.length + 1);

      pass += lowerCase.charAt(char)
    }

    words.value = pass;
  }
  else if (digits.checked == true) {
    for (i = 1; i <= 10; i++) {
      var char = Math.floor(Math.random()
        * digit.length + 1);

      pass += digit.charAt(char)
    }

    words.value = pass;
  }
  else if (symb.checked == true) {
    for (i = 1; i <= 10; i++) {
      var char = Math.floor(Math.random()
        * Symbols.length + 1);

      pass += Symbols.charAt(char)
    }

    words.value = pass;
  }





}


function jsonFormat()
{
  
  var jsOBJ = document.getElementById('exampleFormControlTextarea1').value;
  var result = JSON.stringify(JSON.parse(jsOBJ), null, 4); 
  document.getElementById('exampleFormControlTextarea1').value = result;

}


// HTML Formatter
function htmlFormat() {


  var words = document.getElementById('exampleFormControlTextarea1').value;
  document.getElementById('results');
  var url = `/html-formatter?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('exampleFormControlTextarea1').value = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}


// CSS Formatter
function cssFormat() {


  var words = document.getElementById('exampleFormControlTextarea1').value;
  document.getElementById('results');
  var url = `/css-formatter?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('exampleFormControlTextarea1').value = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}


// js Formatter
function jsFormat() {


  var words = document.getElementById('exampleFormControlTextarea1').value;
  document.getElementById('results');
  var url = `/js-formatter?wordType=${words}`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('exampleFormControlTextarea1').value = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}




// Password Reset

$("#passclear").click(function () {
  $("#exampleFormControlTextarea1").val('');
  document.getElementById('upper').checked = false;
  document.getElementById('lower').checked = false;
 document.getElementById('digits').checked = false;
 document.getElementById('symbols').checked = false;
 
});


// Clear 

$("#clear").click(function () {
  $("#result").empty();
  $("#results").val('');
  $("#result").val('');
  $("#string_to_convert_hash").val('');
  $("#exampleFormControlTextarea1").val('');
  $("#totalValue").html('0');
});


// Reload current page

function Reload() {
  location.reload();
}




