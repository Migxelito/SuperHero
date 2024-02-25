const hojavida = (nombre, conex, ocupacion, P_aparacion, altura, peso, alianzas) => {

  $('#card1').html(`
             <div class="card">
                <div class="row">
                    <div class="col-md-4 mb-5" id="foto">
                    <br>
                    </div>
                    <div class="col-md-8" >
                        <div class="card-body">
                        <p class=card-title><h3>Nombre: ${nombre}</h3></p>
                        <h1></h1>
                                <div class="card-text">
                                    
                                    <p>Conexiones: ${conex}</p>      
                                    <hr>
                                    <p>Ocupacion: ${ocupacion}n</p>
                                    <hr>
                                    <p>Primera aparicion: ${P_aparacion}</p>
                                    <hr>
                                    <p>Altura: ${altura}</p>
                                    <hr>
                                    <p>Peso: ${peso}</p>
                                    <hr>
                                    <p>Alianzas: ${alianzas}</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
  `);
}

const mostrarfoto = (imagen) => {

  $('#foto').html(`
  <div>
     
  <a href=""><img src="${imagen}"></a> 
  </div>
  `);
}
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let buscar = $('#buscar').val();
    console.log('contenido', buscar);
    if((isNaN(buscar))||(buscar<=0)||(buscar>732)){
      alert('Por favor introduzca un numero valido entre 1 y 732')
    }
    else{
    
    $.ajax({
      type: 'GET',
      url: `https://www.superheroapi.com/api.php/10227323604576944/${buscar}`,
      success: (data) => {
        console.log(data)
        let nombre = data.name
        if(nombre=="-"){nombre = "Sin datos conocidos"}
        let conex = data.connections["group-affiliation"]
        if(conex=="-"){conex = "Sin datos conocidos"}
        let P_aparacion = data.biography["first-appearance"]
        if(P_aparacion=="-"){P_aparacion = "Sin datos conocidos"}
        let ocupacion = data.work.occupation
        if(ocupacion=="-"){ocupacion = "Sin datos conocidos"}
        let altura = data.appearance.height
        if(altura=="-"){altura = "Sin datos conocidos"}
        let foto = data.image.url
        let peso = data.appearance.weight
        if(peso =="-"){peso = "Sin datos conocidos"}
        let alianzas = data.biography.aliases
        if(alianzas=="-"){alianzas = "Sin datos conocidos"}
        let estadisticas = data.powerstats
        if(estadisticas==""){ estadisticas= "Sin datos conocidos"}
        let poder = data.powerstats.power
        let combate = data.powerstats.combat
        let inteligencia = data.powerstats.intelligence
        let fuerza = data.powerstats.strength
        let durabilidad = data.powerstats.durability
        let velocidad = data.powerstats.speed
        let Nestadisticas = ""
        if((fuerza=="null")||(velocidad=="null")){ Nestadisticas = nombre + " sin datos conocidos"}
        else{
          Nestadisticas  =nombre
        }
        console.log(poder)
        //console.log(peso)
        hojavida(nombre, conex, ocupacion, P_aparacion, altura, peso, alianzas)
        mostrarfoto(foto)
        //grafico
        var chart = new CanvasJS.Chart("chartContainer", {
          exportEnabled: true,
          animationEnabled: true,
          title: {
            text: "Estadisticas de poder para " + Nestadisticas
          },
          legend: {
            cursor: "pointer",
          },
          data: [{
            type: "pie",
            showInLegend: true,
            indexLabel: "{name} - {y}%",
            dataPoints: [
              { y: inteligencia, name: "Inteligence" },
              { y: fuerza, name: "Strenght" },
              { y: velocidad, name: "Speed" },
              { y: durabilidad, name: "Durability" },
              { y: combate, name: "Combat" },
              { y: poder, name: "Power" },
            ]
          }]
        });
        chart.render();
      },
  
        error: function(xhr, status, error){
          var errorMessage = xhr.status + ': ' + xhr.statusText
          alert('Error - ' + errorMessage);    
      },
    })}
  })
})


