var Sepomex;

Sepomex = (function() {
  var BASE_URL;

  BASE_URL = "http://servicios.apiqroo.com.mx/sepomex/codigos_postales/getCodigosByGet";

  function Sepomex(attributes) {

    this.CODI_CODIGO_POSTAL = attributes.CODI_CODIGO_POSTAL;
    this.CODI_CLAVE_COLONIA = attributes.CODI_CLAVE_COLONIA;
    this.CODI_COLONIA = attributes.CODI_COLONIA;
    this.CODI_CLAVE_TIPO_COLONIA = attributes.CODI_CLAVE_TIPO_COLONIA;
    this.CODI_TIPO_COLONIA = attributes.CODI_TIPO_COLONIA;
    this.CODI_CLAVE_ESTADO = attributes.CODI_CLAVE_ESTADO;
    this.CODI_ESTADO = attributes.CODI_ESTADO;
    this.CODI_CLAVE_MUNICIPIO = attributes.CODI_CLAVE_MUNICIPIO;
    this.CODI_MUNICIPIO = attributes.CODI_MUNICIPIO;
    this.CODI_CIUDAD = attributes.CODI_CIUDAD;
    this.CODI_ZONA = attributes.CODI_ZONA; 

  }

  Sepomex.findCp = function(params, callback) {
    var response;
    if (params == null) {
      params = {};
    }
    response = new Array;
    $.ajax({
      url: BASE_URL,
      dataType: 'json',
      type: 'GET',
      data: params,
      success: function(data) {
        var code_attributes, zip_codes, _i, _len;
        zip_codes = data;
        for (_i = 0, _len = zip_codes.length; _i < _len; _i++) {
          code_attributes = zip_codes[_i];
          response.push(new Sepomex(code_attributes));

        }
        if (callback) {
          return callback(response);
        }
      },
      error: function(data) {
        if (callback) {
          return callback(response);
        }
      }
    });
    return response;
  };


  Sepomex.getEstados = function(params, callback) {
    var response;
    if (params == null) {
      params = {};
    }
    response = new Array;
    $.ajax({
      url: 'http://servicios.apiqroo.com.mx/sepomex/codigos_postales/getEstadosByGet',
      dataType: 'json',
      type: 'GET',
      data: {"user": "apiqroo"},
      success: function(data) {
        var code_attributes, zip_codes, _i, _len;
        zip_codes = data;
        for (_i = 0, _len = zip_codes.length; _i < _len; _i++) {
          code_attributes = zip_codes[_i];
          response.push(code_attributes);

        }
        if (callback) {
          return callback(response);
        }
      },
      error: function(data) {
        if (callback) {
          return callback(response);
        }
      }
    });
    return response;
  };


  Sepomex.getMunicipios = function(params, callback) {
    var response;
    if (params == null) {
      params = {};
    }
    response = new Array;
    $.ajax({
      url: 'http://servicios.apiqroo.com.mx/sepomex/codigos_postales/getMunicipiosByGet',
      dataType: 'json',
      type: 'GET',
      data: params,
      success: function(data) {
        var code_attributes, zip_codes, _i, _len;
        zip_codes = data;
        for (_i = 0, _len = zip_codes.length; _i < _len; _i++) {
          code_attributes = zip_codes[_i];
          response.push(code_attributes);

        }
        if (callback) {
          return callback(response);
        }
      },
      error: function(data) {
        if (callback) {
          return callback(response);
        }
      }
    });
    return response;
  };



  Sepomex.getAsentamientos = function(params, callback) {
    var response;
    if (params == null) {
      params = {};
    }
    response = new Array;
    $.ajax({
      url: 'http://servicios.apiqroo.com.mx/sepomex/codigos_postales/getAsentamientosByGet',
      dataType: 'json',
      type: 'GET',
      data: params,
      success: function(data) {
        var code_attributes, zip_codes, _i, _len;
        zip_codes = data;
        for (_i = 0, _len = zip_codes.length; _i < _len; _i++) {
          code_attributes = zip_codes[_i];
          response.push(code_attributes);

        }
        if (callback) {
          return callback(response);
        }
      },
      error: function(data) {
        if (callback) {
          return callback(response);
        }
      }
    });
    return response;
  };












  return Sepomex;

})();
