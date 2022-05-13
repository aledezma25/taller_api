var puntaje = [];
var departamento = [];

// consumo la api
fetch("https://www.datos.gov.co/resource/ynam-yc42.json")
// then necesita una promesa, y esa promesa se resuelve con una respuesta con
.then(datos_obtenidos  => datos_obtenidos.json())
// datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida
.then(function transformar (datos_obtenidos) {
    //Iteramos sobre cada dato, forEach nos permite eso
    datos_obtenidos.forEach(function agregar (datos_obtenidos)
    {
        //Si los datos son diferentes de vacío
        if (datos_obtenidos.estu_depto_reside != undefined && datos_obtenidos.punt_global != undefined)
        {
            puntaje.push(datos_obtenidos.punt_global);
            departamento.push(datos_obtenidos.estu_depto_reside);
        }
    });

    //variables para las gráficas
    var graf1 =
    {
        y: puntaje,
        x: departamento,
        mode: 'markers',
        type: 'scatter',
        marker: {
            color: 'rgb(0, 128, 0)	',
            opacity: 1.6,
          }
          
    };

    var datosGraficas = [graf1];

    //estilos de la grafica
    var layout =
    {
        title: 'Saber 11° 2019-2',
        xaxis:
        {
            title: 'Departamentos',
        },
        yaxis:
        {
            title: 'Puntaje'
        }
    };
    Plotly.newPlot('grafico2', datosGraficas, layout);
    });
