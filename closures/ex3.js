function z(){
    var b=200;
    function x(){
        var a=7;
        function y(){
            console.log(a, b); //7 200
        }
        y();
    }
    x();
}
z();
