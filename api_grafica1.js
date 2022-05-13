var fecha = [];
var total = [];

// consumo la api
fetch("https://www.datos.gov.co/resource/mcec-87by.json")
// then necesita una promesa, y esa promesa se resuelve con una respuesta con
.then(datos_obtenidos  => datos_obtenidos.json())
// datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida
.then(function transformar (datos_obtenidos) {
    //Iteramos sobre cada dato, forEach nos permite eso
    datos_obtenidos.forEach(function agregar (datos_obtenidos)
    {
        //Si los datos son diferentes de vacío
        if (datos_obtenidos.vigenciahasta != undefined && datos_obtenidos.valor != undefined)
        {
            total.push(datos_obtenidos.valor);
            fecha.push(datos_obtenidos.vigenciahasta);
        }
    });

    //variables para las gráficas
    var graf1 =
    {
        y: total,
        x: fecha,
        mode: 'lines',
        type: 'scatter',
        marker: {
            color: 'rgb(255, 0, 0)	',
            // opacity: 1.6,
          }
    };

    var datosGraficas = [graf1];

    //estilos de la grafica
    var layout =
    {
        title: 'Tasa de Cambio Representativa del Mercado - Historico',
        xaxis:
        {
            title: 'Fecha',
        },
        yaxis:
        {
            title: 'Valor en pesos'
        }
    };
    Plotly.newPlot('grafico', datosGraficas, layout);
    });
