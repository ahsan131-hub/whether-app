// select the city
var city = document.getElementById("list");

$(document).ready(function () {
  // when list city changes
  $("#list").change(function () {
    // ajax call to get whether data
    $.ajax({
      url: `http://api.weatherapi.com/v1/current.json?key=5ed081eb66334907a9655033210411&q=${city.value}&aqi=no`,
      success: function (result) {
        console.log(result);

        // set the ftched data to frontend
        $("#city").text(result.location.name);
        $("#tmp").text("Temperature('C):" + result.current.temp_c);
        $("#cnd").text("Condition:" + result.current.condition.text);
        $("#image").attr("src", result.current.condition.icon);
      },
    });

    console.log("changeed");
  });
});
