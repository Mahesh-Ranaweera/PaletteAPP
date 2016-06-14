/*
    mi6softlab
    https://github.com/mi6softlab
    www.mi6softlab.com
    
    <PalletApp>
    <June 13,2016>
    <1.0.0>
*/

//color library goes here
var colorArray = [['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A'], ['#0F3057', '#00587A', '#008891', '#CDCBA6', '#E7E7DE'], ['#0F3057', '#00587A', '#008891', '#CDCBA6', '#E7E7DE']];

function colorPallet() {
    var colorOut = document.getElementById('app-color-content');
    var index = 0;

    colorOut.innerHTML = "";

    for (var i = 0; i < colorArray.length; i++) {
        var innerColor = "";
        for (var j = 0; j < 5; j++) {
            var colorIndex = colorArray[i][j];

            //colorOut.innerHTML += i + " " + j + colorIndex;
            innerColor += "<div class='pallet-color' style=background-color:" + colorIndex + "></div>";

        }
        index++;
        colorOut.innerHTML += "<div class='color-pallet'><div class='pallet-wrapper'>" + innerColor + "</div><div class='pallet-color-txt'><input type='button' class='color-btn' onclick='fullColor(" + i + ");' value='color" + index + "'/></div></div>";
    }
}

function fullColor(row) {
    var color1 = colorArray[row][0];
    var color2 = colorArray[row][1];
    var color3 = colorArray[row][2];
    var color4 = colorArray[row][3];
    var color5 = colorArray[row][4];

    document.getElementById("color1").style.backgroundColor = color1;
    document.getElementById("color1-hextxt").innerHTML = color1;
    document.getElementById("color1-rgbtxt").innerHTML = hexToRgba(color1);
    
    document.getElementById("color2").style.backgroundColor = color2;
    document.getElementById("color2-hextxt").innerHTML = color2;
    document.getElementById("color2-rgbtxt").innerHTML = hexToRgba(color2);
    
    document.getElementById("color3").style.backgroundColor = color3;
    document.getElementById("color3-hextxt").innerHTML = color3;
    document.getElementById("color3-rgbtxt").innerHTML = hexToRgba(color3);
    
    document.getElementById("color4").style.backgroundColor = color4;
    document.getElementById("color4-hextxt").innerHTML = color4;
    document.getElementById("color4-rgbtxt").innerHTML = hexToRgba(color4);
    
    document.getElementById("color5").style.backgroundColor = color5;
    document.getElementById("color5-hextxt").innerHTML = color5;
    document.getElementById("color5-rgbtxt").innerHTML = hexToRgba(color5);
}

function hexToRgba(hex){
    
    R = parseInt(hex.substring(1,3), 16);
    G = parseInt(hex.substring(3,5), 16);
    B = parseInt(hex.substring(5,7), 16);

    result = 'rgba('+R+','+G+','+B+')';
    return result;
}

colorPallet();