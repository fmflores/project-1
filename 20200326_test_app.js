$(document).ready(function () {

    //change onclick from $("#gin").on("click" to : 
    $(".alcohol").on("click", function () {
        console.log("alcohol selected");

        $("#drink-display").empty();

        var queryUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
        var alcohol = $(this).attr("value");
        console.log(alcohol);

        $.ajax({
            url: queryUrl + alcohol,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(response.drinks[0]);
            for (let i = 0; i < 5; i++) {
                var drinkName = response.drinks[i].strDrink;
                var drinkId = response.drinks[i].idDrink;
                var drinkImg = response.drinks[i].strDrinkThumb;
                console.log(drinkId);
                console.log(drinkName);

                var drinkUrl = "https://www.thecocktaildb.com/drink/" + drinkId;
                // $("#drink-display").append(`<a class="drink-name" target="_blank" href="${drinkUrl}">${drinkName}</a>`);

                // $("#drink-display").append(`<img class="drink-image" src="${drinkImg}">`);

                var drinkCard = (`<div class="card" style="width: 18rem;"><img class="card-img-top" src="${drinkImg}" alt="${drinkName}"/><div class="card-body"><a href="${drinkUrl}" target="_blank"><h5 class="card-title">${drinkName}</h5></a></div></div>`);
                $("#drink-display").append(`${drinkCard}`);
            }
        })
    })
})