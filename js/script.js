onclick( "btn", function() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var result = eval(input);
    output.innerHTML = result;
}