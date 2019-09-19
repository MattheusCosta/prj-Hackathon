// constante com os valores e dados dos locais turisticos
const locais = [
    {nome: 'Plataforma de Pesca', categoria: 'Pesca', localizacao: 'Balneario Plataforma, Mongaguá, SP', latitude: '-24.133992', longitude: '-46.693271'},
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

  alert("iniciando");

  // atribui o value do button a variavel 'nome'
  var name = document.getElementById("pontoTuristico").value;

  // busca os valores do ponto turisticos
  var ponto = locais.find(user => user.nome === name );

  if(ponto == null){
      alert ('erro');
      location.reload();
  }else{

      L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

      var map = L.mapquest.map('map', {
        center: [ponto.latitude, ponto.longitude],
        layers: L.mapquest.tileLayer('map'),
        zoom: 15
      });

      L.marker([ponto.latitude, ponto.longitude], {
        icon: L.mapquest.icons.marker(),
        draggable: false
      }).bindPopup(ponto.nome).addTo(map);

      L.circle([ponto.latitude, ponto.longitude], { radius: 200 }).addTo(map);

      var pontoLatLngs = [
        [36.99, -102.05],
        [37, -109.05],
        [41, -109.05],
        [41, -102.05]
      ];

      L.polygon({color: 'red'}).addTo(map);
  }
});


// exibir rota do usuario até o ponto turistico escolhido

$(document).on("click","#pontoTuristicoRota",function(){

    alert("iniciando");

    // atribui o value do button a variavel 'nome'
    var name = document.getElementById("pontoTuristicoRota").value;

    // busca os valores do ponto turisticos
    var ponto = locais.find(user => user.nome === name );

    if(ponto == null){
        alert ('erro');
        location.reload();
    }else{
      
      function onSuccess(position) {
        var latitudeUsuario = position.coords.latitude;
        var longitudeUsuario = position.coords.longitude;
      }

        L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

        var map = L.mapquest.map('map', {
          center: [ponto.latitude, ponto.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 13
        });

        L.mapquest.directions().route({
          start: "Balneario Jussara, Mongaguá, SP",
          end: ponto.localizacao
        });

    }

}); 

