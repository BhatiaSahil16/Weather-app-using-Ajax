$(document).ready(function(){
    $("#cityName").on("keyup", function(e){
        var city = e.target.value;
        const APIKey = "8e9e136f06c45279bf539074383e9985"

        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric `,

        }).done(function(data){

            $("#result").html(`
            <div class="container">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Weather : ${data.weather[0].description}</h5>
                        <p class="card-text">Tempertaure at ${city} = ${data.main.temp} &#8451; and it feels like it is ${data.main.feels_like} &#8451; </p>
                        <a href="https://www.google.co.in/search?q=${city}" class="btn btn-primary">Learn more about the place</a>
                    </div>
                </div>
            </div>`);
        });
    });


})