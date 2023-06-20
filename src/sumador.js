function calcularCorchetes(cadena) {
  var resultado="";
  var corchetes1=[];
var cadenaSinNumeros=cadena.replace("0","").replace("1","").replace("2","").replace("3","").replace("4","").replace("5","").replace("6","").replace("7","").replace("8","").replace("9","").replace(/[a-z]/g,"");
  //console.log(cadenaSinNumeros)
  var corchetes2=[];
  if(cadenaSinNumeros.length==1)
  {
    if(cadenaSinNumeros[0]=="[")
    {
      resultado="incorrecto";
      return resultado;
    }
    if(cadenaSinNumeros[0]=="]")
    {
      resultado="incorrecto";
      return resultado;
    }
  }
  else
  {
    for(let i=0;i<cadenaSinNumeros.length;i++)
    {
      if(cadenaSinNumeros[i]=="[")
      {
        corchetes1.push(cadenaSinNumeros[i]);
      }
      if(cadenaSinNumeros[i]=="]")
      {
        corchetes2.push(cadenaSinNumeros[i]);
      }
    }
    if(corchetes1.length==corchetes2.length)
    {
      resultado="correcto";
      return resultado;
    }
  }
  

}

export default calcularCorchetes;
