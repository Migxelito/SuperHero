const hojavida = (nombre,conex,ocupacion,P_aparacion,altura,peso,alianzas) => {

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

  

}


/*let estadisticasmostrar = [];
    console.log('Esto nos retorna un arreglo con los stats, nada mas ', data.powerstats);
    data.powerstats.forEach(function (item) {



        // A mi arreglo le voy a insertar un objeto que sea lo mas parecido a lo que requiere el datapoint
        // y como datapoint necesita un objeto que tenga dos atributos x e y lo hare de esa forma
        estadisticasmostrar.push(
            {
                // Con label se deben insertar los valores que no sean numericos
                // Porque el entiende que el ejeX y el ejeY solo toman numeros como valor aceptable
                label: item.powerstats,
                y: item.base_stat

            }
        )
    })

let config = {
  animationEnabled: true,
  title:{
    text: "State Operating Funds",
  },
  axisY:{
    title:"valor",
  },
  axisX:{
    title:"estadisticas",
  },
  data:[{
    type:"pie",
    dataPoints:estadisticasmostrar
  }]
};*/

/*window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    exportEnabled: true,
    animationEnabled: true,
    title:{
      text: "State Operating Funds"
    },
    legend:{
      cursor: "pointer",
      itemclick: explodePie
    },
    data: [{
      type: "pie",
      showInLegend: true,
      toolTipContent: "{name}: <strong>{y}%</strong>",
      indexLabel: "{name} - {y}%",
      dataPoints: [
        { y:durabiidad, name: "durability", exploded: true },
        { y: velocidad, name: "speed" },
        { y: fuerza, name: "strentgh" },
        { y: inteligencia, name: "inteligence" },
        { y: combate, name: "combat" },
        { y: poder, name: "Power" },
      ]
    }]
  });
  chart.render();
  }
  
  function explodePie (e) {
    if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
      e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
      e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart.render();
  
  }
*/


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    let buscar= $('#buscar').val();
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
      let durabiidad =data.powerstats.durability
      let velocidad =data.powerstats.speed
      let fuerza = data.powerstats.strentgh
      let inteligencia = data.powerstats.inteligence
      let combate =data.powerstats.combat
      let poder = data.powerstats.power
      
       
      hojavida(nombre,conex,ocupacion,P_aparacion,altura,peso,alianzas)
      mostrarfoto(foto)
      //graficas (durabiidad,velocidad,fuerza,inteligencia,combate,poder)
    },
  
    error: (error) => {
      console.log(error);
  },
  
  
    })
  })

 

})