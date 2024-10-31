function getweather() {
    alert("hi")
    let cityname = document.getElementById("temp1").value;
    alert(cityname)

axios.get(`https://api.weatherapi.com/v1/current.json?key=24f3494710b841398d6130257241910&q=${cityname}&aqi=yes`)
  .then(function (response) {
     //handle success
    console.log(response);
   let weatherdata = response.data;
    console.log(weatherdata)
    console.log(weatherdata.current.temp_c)
    document.log(weatherdata.current.temp_c)
    
    document.querySelector("#change").innerHTML=(`your today weather is ${weatherdata.current.temp_c}`)
  })
  .catch(function (error) {
    // handle error
    //console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
