
/************************
*
* Event Handlers
*
* here we set up the listeners for events, we gather the information from the
* DOM, and call the right controller.
*
*************************/

//on page init (jquery mobile's version of on window load)
$( document ).delegate( "#home", "pageinit", function() {

    var clear;
    
    $("#pause").hide();

    function remaining(mins) {
        $("#remaining").html('<span style="font-size:36px">' + mins + "</span> mins remaining");
    }
    
    $("#start").click(function () {
        var mins = ~~($("#time").val());
        if (!mins) return alert('Invalid time');
        remaining(mins);
        clear = setInterval(function () {
            if (!mins) {
                clearInterval(clear);
                $("#remaining").html('Finished!');
            }
            mins--;
            remaining(mins);
        }, 1000 * 60);
        $("#start").hide();
        $("#pause").show();
    });

    $("#pause").click(function () {
        clearInterval(clear);
        $("#pause").hide();
        $("#start").show();
    });

    //activate?
    $("#next").click(function () {
        $.ajax({ url: '/next', type: 'POST'})
            .done(function () {
                $("#status").html('Success');
            })
            .fail(function () {
                $("#status").html('Failed');
            });
    });

    $("#prev").click(function () {
        $.ajax({ url: '/prev', type: 'POST'})
            .done(function () {
                $("#status").html('Success');
            })
            .fail(function () {
                $("#status").html('Failed');
            });
    });
});
