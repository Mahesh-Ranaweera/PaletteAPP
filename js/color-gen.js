<<<<<<< HEAD
/*
    mi6softlab
    https://github.com/mi6softlab
    www.mi6softlab.com
    
    <PalletApp>
    <June 13,2016>
    <1.0.0>
*/

//color library goes here
var colorArray = [['#16A085', '#1ABC9C', '#27AE60', '#2ECC71', '#2980B9'],
                  ['#3498DB', '#8E44AD', '#9B59B6', '#2C3E50', '#34495E'],
                  ['#F39C12', '#F1C40F', '#E67E22', '#D35400', '#E74C3C'],
                  ['#C0392B', '#ECF0F1', '#BDC3C7', '#95A5A6', '#7F8C8D'],
                  ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A'], 
                  ['#0F3057', '#00587A', '#008891', '#CDCBA6', '#E7E7DE'],
                  ['#212F3C', '#283747', '#2E4053', '#34495E', '#5D6D7E'],
                  ['#17202A', '#1C2833', '#212F3D', '#273746', '#2C3E50'],
                  ['#641E16', '#7B241C', '#922B21', '#A93226', '#C0392B'],
                  ['#512E5F', '#633974', '#76448A', '#884EA0', '#9B59B6']];

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

function defaultColor() {
    var color1 = '#212F3C';
    var color2 = '#283747';
    var color3 = '#2E4053';
    var color4 = '#34495E';
    var color5 = '#5D6D7E';

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

defaultColor();
=======
/*
    mi6softlab
    https://github.com/mi6softlab
    www.mi6softlab.com
    
    <PalletApp>
    <June 13,2016>
    <1.0.0>
*/

//color library goes here
var colorArray = [['#16A085', '#1ABC9C', '#27AE60', '#2ECC71', '#2980B9'],
                  ['#3498DB', '#8E44AD', '#9B59B6', '#2C3E50', '#34495E'],
                  ['#F39C12', '#F1C40F', '#E67E22', '#D35400', '#E74C3C'],
                  ['#C0392B', '#ECF0F1', '#BDC3C7', '#95A5A6', '#7F8C8D'],
                  ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A'], 
                  ['#0F3057', '#00587A', '#008891', '#CDCBA6', '#E7E7DE'],
                  ['#212F3C', '#283747', '#2E4053', '#34495E', '#5D6D7E'],
                  ['#17202A', '#1C2833', '#212F3D', '#273746', '#2C3E50'],
                  ['#641E16', '#7B241C', '#922B21', '#A93226', '#C0392B'],
                  ['#512E5F', '#633974', '#76448A', '#884EA0', '#9B59B6']];

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

function defaultColor() {
    var color1 = '#212F3C';
    var color2 = '#283747';
    var color3 = '#2E4053';
    var color4 = '#34495E';
    var color5 = '#5D6D7E';

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

defaultColor();
>>>>>>> master
colorPallet();