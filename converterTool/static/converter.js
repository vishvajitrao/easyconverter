// Temprature Converter

$(document).ready(function () {
    $(".clickNow").click(function () {
        var data = $('#data').val()
        if (Number.isInteger(Number(data)) && data ) {
            result = Number(data) * 9 / 5 + 32
            $("#results").val(result);
        }
        else {
            alert('Please enter only number.')
        }
    });
});

$(document).ready(function () {
    $(".celtokel").click(function () {
        var data = $('#data').val()
        if (Number.isInteger(Number(data)) && data) {
            $("#results").val(kel.toString() + ' Kelvin');
        }
        else {
            alert('Please enter only number.')
        }
    });
});

$(document).ready(function () {
    $(".celtorank").click(function () {
        var data = $('#data').val()
        if (Number.isInteger(Number(data)) && data) {
            rank = (Number(data) + 273.15) * 9 / 5
            $("#results").val(rank.toFixed(2) + ' Rankine');
        }
        else {
            alert('Please enter only number.')
        }
    });
});


$(document).ready(function () {
    $(".fehtocel").click(function () {
        var data = $('#data').val()
        if (Number.isInteger(Number(data)) && data) {
            cel = (Number(data) - 32) * 5 / 9
            $("#results").val(cel.toFixed(2) + ' Celsius');
        }
        else {
            alert('Please enter only number.')
        }
    });
});


$(document).ready(function () {
    $(".fehtokel").click(function () {
        var data = $('#data').val()
        if (Number.isInteger(Number(data)) && data) {
            kel = (Number(data) + 459.67) * 5 / 9
            $("#results").val(kel.toFixed(2) + ' Kelvin');
        }
        else {
            alert('Please enter only number.')
        }
    });
});


$(document).ready(function () {
    $(".keltocel").click(function () {
        var data = $('#data').val()
        if (Number.isInteger(Number(data)) && data) {
            cel = (Number(data) - 273.15)
            $("#results").val(cel.toFixed(2) + ' Celsius');
        }
        else {
            alert('Please enter only number.')
        }
    });
});


$(document).ready(function () {
    $(".keltofah").click(function () {
        var data = $('#data').val()
        if (Number.isInteger(Number(data)) && data) {
            fah = (Number(data) - 273.15) * 9 / 5 + 32
            $("#results").val(fah.toFixed(2) + ' Fahrenheit');
        }
        else {
            alert('Please enter only number.')
        }
    });
});

$(document).ready(function () {
    $(".keltorank").click(function () {
        var data = $('#data').val()
        if (Number.isInteger(Number(data)) && data) {
            rank = (Number(data) * 9 / 5)
            $("#results").val(rank.toFixed(1) + ' Rankine');
        }
        else {
            alert('Please enter only number.')
        }
    });
});


$(document).ready(function () {
    $(".ranktocel").click(function () {
        var data = $('#data').val()
        if (Number.isInteger(Number(data))  && data) {
            cel = (Number(data) - 491.67) * 5 / 9
            $("#results").val(cel.toFixed(2) + ' Celsius');
        }
        else {
            alert('Please enter only number.')
        }
    });
});


$(document).ready(function () {
    $(".ranktofah").click(function () {
        var data = $('#data').val()
        if (Number.isInteger(Number(data))  && data) {
            fah = (Number(data) - 459.67)
            $("#results").val(fah.toFixed(2) + ' Fahrenheit');
        }
        else {
            alert('Please enter only number.')
        }
    });
});

$(document).ready(function () {
    $(".ranktoKel").click(function () {
        var data = $('#data').val()
        if (Number.isInteger(Number(data))  && data) {
            kel = (Number(data) * 5 / 9)
            $("#results").val(kel.toFixed(2) + ' Kelvin');
        }
        else {
            alert('Please enter only number.')
        }
    });
});



// hash value conversion api call
function hashConversion() {
    var words = document.getElementById('string_to_convert_hash').value;
    var algo = document.getElementById('algo_name').value;
    var url = `/generate-hash-value?wordType=${words}&algorithm=${algo}`;
    var xhttp = new XMLHttpRequest();
    if (words == '')
    {
        alert("Please, enter a valid data to convert")
    }
    else
    {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('result').value = JSON.parse(this.responseText).data;
            }
            };
            xhttp.open("GET", url, true);
            xhttp.send();
    }
  
  }
function converter() {
    document.getElementById('results').value = convert();
}




$(document).ready(function () {
    $("#clear").click(function () {

        $("#data").val('');
        $("#exampleFormControlTextarea1").val('');

    });
});