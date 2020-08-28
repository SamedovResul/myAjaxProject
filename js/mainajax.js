$.ajax({

    url:'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    type:'get',
    dataType:'json',
    
    success:function(response)
    {
        console.log(response.meals.length);

        for(i = 0; i<response.meals.length; i++){
            let newmeals = "<div class='col-md-4 text-center'><p>"+response.meals[i].strMeal+"</p><img src="+response.meals[i].strMealThumb+"></div>"

            $('#meals').append(newmeals)
        }


    },
    error:function(error)
    {
        console.log(error)
    },
    always:function(){}

})