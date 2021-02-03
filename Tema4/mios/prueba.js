var list = [1, 2, 3, 4, 5];
var i = 0;

function la () {
    setInterval(function () {
        
        console.log(i + "=>" + list[i] + "\n");
        i++;
    }, 2000)
};

la();