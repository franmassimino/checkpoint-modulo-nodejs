const autos = require('./autos')

const concesionaria = {

   autos: autos,
  
   buscarAuto: function(nroPatente){
     var filtradas = autos.filter(auto => auto.patente === nroPatente)
     if(filtradas.length > 0){
       return filtradas[0]
      } else {
        return null
      }
    },

   venderAuto: function(nroPatente){
    let auto = this.buscarAuto(nroPatente)
    auto.vendido = true
   },

   autosParaLaVenta: function(){
     let noVendidos = autos.filter(estado => estado.vendido === false)
     return noVendidos
   },
  
   autosNuevos: function(){
     let noVendidos = this.autosParaLaVenta()
     let ceroKm = noVendidos.filter(element => element.km < 100)
     return ceroKm;
   },

   listaDeVentas: function(){
     let lista = []
     let vendidos = autos.filter(estado => estado.vendido === true)
     vendidos.forEach(element => {
      lista.push(element.precio);
     })
      return lista;
   },

   totalDeVentas: function(){
     lista = this.listaDeVentas()
     let total = lista.reduce((acum,num) => {
       return acum + num
     }, 0)
     return total;
   },

   puedeComprar: function(auto, persona){
    if(persona.capacidadDePagoTotal > auto.precio && persona.capacidadDePagoEnCuotas > auto.precio / auto.cuotas){
      return true
    } else {
      return false
    }
   },

   autosQuePuedeComprar: function(persona){
    let lista = []
    let aLaVenta = this.autosParaLaVenta()
    aLaVenta.forEach(element =>{
      if (this.puedeComprar() == true){
        lista.push(element)
      } else {
        return null
      }
    })
    return lista
   }

};

