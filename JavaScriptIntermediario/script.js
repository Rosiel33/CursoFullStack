function Pencil(Color,Length){
     this.Color = Color;
    this.Length = length;
    this.Write = function(text){
        console.log(text);
    }
}

var myPencil = new Pencil();
var myPencil2 = new Pencil('blue',20);