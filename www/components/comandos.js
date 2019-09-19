//<script src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"></script>
//<link type="text/css" rel="stylesheet" href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css"/>
/*
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.js"></script>
<script src="https://www.mapquestapi.com/sdk/leaflet/v2.2/mq-map.js?key=lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24"></script>
<script src="https://www.mapquestapi.com/sdk/leaflet/v2.2/mq-geocoding.js?key=lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24"></script>

*/

const locais = [
    {nome: 'Plataforma de Pesca', categoria: 'Pesca', localizacao: 'Av. Gov. Mário Covas Júnior, 10181 - Balneario Plataforma, Mongaguá - SP', latitude: '-24.133992', longitude: '-46.693271'},
    {nome: 'Praça Dudu Samba', categoria: 'Parque', localizacao: 'Av. Dudu Samba, 52-280 - Centro, Mongaguá - SP', latitude: '-24.096418', longitude: '-46.621187'},
    {nome: 'Arquibancada do Pescador', categoria: 'Pesca', localizacao: 'Av. São Paulo, 1678-1764 - Centro, Mongaguá - SP', latitude: '-24.094543', longitude: '-46.621439'},
    {nome: 'Mirante de Belvedere', categoria: 'Trilha', localizacao: 'Av. Monteiro Lobato - Balneario Mongaguá, Mongaguá - SP', latitude: '-24.098167', longitude: '-46.632197'},
    {nome: 'Mirante da Padroeira', categoria: 'Trilha', localizacao: 'Av. Marina, S/N - Centro, Mongaguá - SP', latitude: '-24.091464', longitude: '-46.616943'},
    {nome: 'Poço das Antas', categoria: 'Natureza', localizacao: 'R. do Poço das Antas - Balneario Pedreira, Mongaguá - SP', latitude: '-24.090064', longitude: '-46.622689'},
    {nome: 'Feira de Artesanato Central', categoria: 'Artesanato', localizacao: 'Av. Sete de Dezembro, 25 - Centro, Mongaguá - SP', latitude: '-24.095053', longitude: '-46.619500'},
    {nome: 'Feira das Artes - Vera Cruz', categoria: 'Artesanato', localizacao: 'Av. Gov. Mário Covas Júnior, 3129-3201 - Jardim Samoa, Mongaguá - SP', latitude: '-24.102487', longitude: '-46.632937'},
    {nome: 'Feira de Artesanato Agenor de Campos', categoria: 'Artesanato', localizacao: 'Av. Gov. Mário Covas Júnior, 10086-10162 - Balneario Itaguaí, Mongaguá - SP', latitude: '-24.133414', longitude: '-46.692830'},
    {nome: 'Aldeia indígena Tupi-Guarani', categoria: 'Trilha', localizacao: '', latitude: '', longitude: ''},
    {nome: 'Parque turístico ecológico a Tribuna', categoria: 'Natureza', localizacao: 'Av. Gov. Mário Covas Júnior, 10410 - Agenor de Campos, Mongaguá - SP', latitude: '-24.134018', longitude: '-46.695542'},
    {nome: 'Zona Rural', categoria: 'Natureza', localizacao: '', latitude: '', longitude: ''},
    {nome: 'Centro Cultural Raul Cortez', categoria: '', localizacao: 'Av. São Paulo, 3465 - Balneario Umurama, Mongaguá - SP', latitude: '-24.102193', longitude: '-46.636358'},
    {nome: 'Skate Park', categoria: '', localizacao: 'Av. Marina, 40-98 - Centro, Mongaguá - SP', latitude: '-24.091812', longitude: '-46.617477'},
    {nome: 'Skate Park de Agenor Campos', categoria: 'Esporte', localizacao: 'R. Santos, 1223-1057 - Balneario de Birigui, Mongaguá - SP', latitude: '-24.124189', longitude: '-46.697747'},
    {nome: 'Trilhas do Morro da Cialta', categoria: 'Trilha', localizacao: '', latitude: '', longitude: ''},
    {nome: 'Trilhas da Barragem das Antas', categoria: 'Trilha', localizacao: '', latitude: '', longitude: ''},

];

// exibi um mapa com o ponto turistico que o usuario selecionou

$(document).on("click","#pontoTuristico",function(){

    // atribui o value do button a variavel 'nome'
    var nome = document.getElementById("pontoTuristico").value;

    // busca os valores do ponto turisticos
    var ponto = locais.find((user, index, array) => user.nome === 'nome');

    if(ponto == null){
        alert ('erro');
        location.reload();
    }else{

        function mapa(position){

            L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

            var map = L.mapquest.map('map', {
            center: [ponto[4], ponto[5]],
            layers: L.mapquest.tileLayer('map'),
            zoom: 15
            });

            L.marker([ponto[4], ponto[5]], {
                icon: L.mapquest.icons.marker(),
                draggable: false
                }).bindPopup(ponto[1]).addTo(map);

            L.circle([ponto[4], ponto[5], { radius: 200 }).addTo(map);
            map.addControl(L.mapquest.control());
        };

        // adiciona o mapa a uma div com id = mapa
        navigator.geolocation.getCurrentPosition(mapa);

    }

});

$(document).on("click","#pontoTuristicoRota",function(){

    // atribui o value do button a variavel 'nome'
    var nome = document.getElementById("pontoTuristico").value;

    // busca os valores do ponto turisticos
    var ponto = locais.find((user, index, array) => user.nome === 'nome');

    if(ponto == null){
        alert ('erro');
        location.reload();
    }else{

        function mapa(position){

            var latitudeUsuario = position.coords.latitude;
            var longitudeUsuario = position.coords.longitude;

            L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

            var map = L.mapquest.map('map', {
              center: [position.coords.latitude, position.coords.longitude],
              layers: L.mapquest.tileLayer('map'),
              zoom: 13
            });

            L.mapquest.directions().route({
              start: "latLng"={
                        "lat": latitudeUsuario,
                        "lng": longitudeUsuario
                      },
              end: ponto[3]
            });
        }

    }

});

        var popup = L.popup();

        var map = L.mapquest.map('map', {
          center: [38.890385, -77.031989],
          layers: L.mapquest.tileLayer('map'),
          zoom: 14
        });

        map.addControl(L.mapquest.control());

        map.on('click', function(e) {
          popup.setLatLng(e.latlng).openOn(this);
          L.mapquest.geocoding().reverse(e.latlng, generatePopupContent);
        });

        function generatePopupContent(error, response) {
          var location = response.results[0].locations[0];
          var street = location.street;
          var city = location.adminArea5;
          var state = location.adminArea3;
          popup.setContent(street + ', ' + city + ', ' + state);
        }
