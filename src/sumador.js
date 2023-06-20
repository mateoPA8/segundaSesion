function calcularCorchetes(cadena) {
  var resultado="";
  var corchetes1=[];
  var corchetes2=[];
  if(cadena.length==1)
  {
    if(cadena[0]=="[")
    {
      console.log(cadena[0]);
      resultado="incorrecto";
      return resultado;
    }
    if(cadena[0]=="]")
    {
      resultado="incorrecto";
      return resultado;
    }
  }
  else
  {
    for(let i=0;i<cadena.length;i++)
    {
      if(cadena[i]=="[")
      {
        corchetes1.push(cadena[i]);
      }
      if(cadena[i]=="]")
      {
        corchetes2.push(cadena[i]);
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
