const hojavida = (nombre, conex, ocupacion, P_aparacion, altura, peso, alianzas) => {

  $('#infomacion').html(`
  <div>
      <h3>Nombre: ${nombre}</h3>
      <p>conexiones: ${conex}</p>
      
<hr>
<p>Ocupacio ${ocupacion}n</p>
<hr>
<p>Primera aparicion${P_aparacion}</p>
<hr>
<p>Altura${altura}</p>
<hr>
<p>Peso${peso}</p>
<hr>
<p>Alianzas${alianzas}</p>
  </div>
  `);

}

const mostrarfoto = (imagen) => {

  $('#foto').html(`
  <div>
     
  <a href=""><img src="${imagen}"></a> 
  </div>
  `);
//crea grafico



//crea grafico22

}
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let buscar = $('#buscar').val();
    console.log('contenido', buscar);
    $.ajax({
      type: 'GET',
      url: `https://www.superheroapi.com/api.php/10227323604576944/${buscar}`,
      success: (data) => {
        console.log(data) //Profe xq me da error
        let nombre = data.name
        let conex = data.connections["group-affiliation"]
        let P_aparacion = data.biography["first-appearance"]
        let ocupacion = data.work.occupation
        let altura = data.appearance.heightliases
        let foto = data.image.url
        let peso = data.appearance.weight
        let alianzas = data.biography.a
        let estadisticas = data.powerstats
        let poder = data.powerstats.power
        let combate = data.powerstats.combat
        let inteligencia = data.powerstats.intelligence
        let fuerza = data.powerstats.strength
        let durabilidad = data.powerstats.durability
        let  velocidad= data.powerstats.speed

        console.log(poder)
        //console.log(peso)
        hojavida(nombre, conex, ocupacion, P_aparacion, altura, peso, alianzas)
        mostrarfoto(foto)
//grafico
var chart = new CanvasJS.Chart("chartContainer", {
	exportEnabled: true,
	animationEnabled: true,
	title:{
		text: "State Operating Funds"
	},
	legend:{
		cursor: "pointer",
		//itemclick: explodePie
	},
	data: [{
		type: "pie",
		showInLegend: true,
		indexLabel: "{name} - {y}%",
		dataPoints: [
			{ y: inteligencia , name: "Inteligence" },
			{ y: durabilidad, name: "Durability"},
			{ y: velocidad, name: "Speed" },
			{ y: fuerza, name: "Strenght" },
			{ y: combate, name: "Combat" },
			{ y: poder, name: "Power" },
			
		]
	}]
});
chart.render();
        
//grafico

      },
      error: (error) => {
        console.log(error);
      },
    })
  })
})


  