# Sepomex_js

Servicio js de codigos postales

Modo de Uso:

Incluir : JQuery

Incluir : http://servicios.apiqroo.com.mx/sepomex/public/js/sepomex_js/sepomex.js


Funciones ejemplo:

function getEstados () {

        Sepomex.getEstados(
          {
            
          },
          function(response){

            console.log(response);
          }
        )

}


function findCp (cp) {

        Sepomex.findCp(
          {
            "cp": cp,
            "user": "demo"
          },
          function(response){
           
            console.log(response);
          }
        )

}



function getMunicipios (id_estado) {

        Sepomex.getMunicipios(
          {
            "clave_estado": id_estado,
            "user": "demo"
          },
          function(response){
           

            console.log(response);
          }
        )

}



function getAsentamientos (id_estado,id_municipio) {

        Sepomex.getAsentamientos(
          {
            "clave_estado": id_estado,
            "clave_municipio": id_municipio,
            "user": "demo"
          },
          function(response){
           
            console.log(response);
          }
        )

}
