

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    $.ajax({
        type: "GET",
        url: '/spt_data_transfer',
        data: {
            "result": result,
        },
        dataType: "json",
        success: function (data) {
            // any process in data
            alert("Transfer is successful!")
        },
        failure: function () {
            alert("Transfer has been failed!");
        }
    });
}