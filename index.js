
for (counter=1; counter <=100; counter++) {
  document.write(counter + "  ")
}


let str = '';
for(let i= 0; i<= 10; i++){
    str = str + " " + i;
}


document.getElementById("print_number_horizontally").innerHTML = str;



str = "";
for(let i= 0; i<= 10; i++){
    str = str + " <br />" + i;
}


document.getElementById("print_number_vertically").innerHTML = str;



var x ="", i;
for (i=1; i<=6; i++) {
  x = x + "<h" + i + ">Heading " + i + "</h" + i + ">";
//   x = x + "<h" + i + ">Heading " + i + "</h" + i + ">";
}
document.getElementById("demo").innerHTML = x;


