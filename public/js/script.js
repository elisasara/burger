$(document).ready(function () {

    // handle button click with information and appropriate ajax requests
    $(".changeDevoured").on("click", function (event) {
        event.preventDefault();
        console.log("I've been clicked!");

        // get the id of the item clicked and the new devoured state
        var id = $(this).data("id");
        console.log(id);
        var newDevoured = $(this).data("newdevoured");
        console.log(!newDevoured);
        var newDevouredState = { devoured: !newDevoured };

        // send the put request
        $.ajax("/api/icecreams/" + id, {
            type: "PUT",
            data: newDevouredState
        })
            .then(function () {
                console.log("Changed devoured to ", newDevoured);
                location.reload(true);
            });
    });

    $("#createIceCream").on("submit", function (event) {
        event.preventDefault();
        var newIceCream = {
            name: $("#newIceCream").val().trim()
        };

        $.ajax("/api/icecreams", {
            type: "POST",
            data: newIceCream
        })
            .then(function () {
                console.log(newIceCream);
                location.reload(true);
            });
    });


});