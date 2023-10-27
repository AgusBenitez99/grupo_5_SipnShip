// Inicializa el primer gráfico en el contenedor "miGrafico"
{/* <script type="text/javascript"> */}
var myChart = echarts.init(document.getElementById("miGrafico"));

// Define los datos y opciones para el primer gráfico
var option1 = {
  title: {
    text: "Mi grafico", // Configuración del segundo gráfico
  },
  grid:{
    containLabel: true
  },
  tooltip: {},
  legend: {
    data: ["sales"],
  },
  xAxis: {
    data: ["Shirts", "Cardigans", "Chiffons", "Pants", "Heels", "Socks"],
  },
  yAxis: {},
  series: [
    {
      name: "sales",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};
var myChart2 = echarts.init(document.getElementById("grafico2"));

var option2 = {
  tooltip: {
    trigger: "item",
  },
  grid:{
    containLabel: true
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};
 // Establece la opción para los graficos
myChart2.setOption(option2);

myChart.setOption(option1);
// </script>