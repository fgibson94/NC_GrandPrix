$(document).ready(function () {

    var name = $("#nameInput");
    var miles = $("#mileInput");
    var minutes = $("#minuteInput");


    $(userInput).on("submit", function submitUserInput(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a body or a title
        if (
            !name.val().trim() || !miles.val().trim() || !minutes.val().trim()
        ) {
            return;
        }
        var newPost = {
            name: name.val(),
            miles: miles.val(),
            minutes: minutes.val()
        }

        console.log("HTML sending to SERVER", newPost);

        postUserInput(newPost);
    });

    function postUserInput(Post) {
        $.ajax({
            method: "POST",
            url: "/api/user/post",
            data: Post
        }).then(entry => {
            console.log("Finished Post ", entry)

        })
    }
})

$("select").on("change", function () {
    var id = this.id
    
    $.get("" + id + "", function (data) {
        if (data) {
            console.log(data)

            // $("#trackName").text(data.MRData.RaceTable.Races["0"].Circuit.circuitName);
            // $("#trackIMG").attr("src", "./assets/img/" + id + ".png");
        }
    })
})