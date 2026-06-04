function obtenerResultado(lista){

  const existeRojo =
      lista.some(i =>
      i.Categoria_Color === "ROJO");

  if(existeRojo){
      return "NO CONSUMIR";
  }

  const existeAmarillo =
      lista.some(i =>
      i.Categoria_Color === "AMARILLO");

  if(existeAmarillo){
      return "CONSUMO OCASIONAL";
  }

  return "CONSUMIR";
}
