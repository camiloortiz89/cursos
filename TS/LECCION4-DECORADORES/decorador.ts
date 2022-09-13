function Saludar(target:Function): void {
    target.prototype.saludos = function():void{
        console.log("Holi Decorator");
    }
}

@Saludar
class Hola{
    constructor(){}
}

let h1 = new Hola();
h1.saludos();
