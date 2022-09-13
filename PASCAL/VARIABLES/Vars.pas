program Vars;
// Se declara Var antes del programa BEGIN-END
// Tipo de Datos: Integer, String, Boolean, Char
var
    numero1, numero2 : Integer;
    numR : Real;
    ch : Char;
begin
    numR := 3.8;
    numero1 := 10;
    numero2 := 20;
    ch := 'c';

    WriteLn(numero1);
    WriteLn(numero2);
    WriteLn(numR);
    WriteLn(ch);

    //METODOS INTERESANTES
    //Redondeo hacia abajo
    WriteLn(Trunc(numR));

    //Redondeo hacia arriba
    WriteLn(Round(numR));
    
    //De String a Numero
    WriteLn(Ord(ch));
    
    //De numero a String
    WriteLn(Chr(numero1));
end.