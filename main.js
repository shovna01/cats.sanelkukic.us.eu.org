function makeHttpReqs() {
    var api_ping_request = new XMLHttpRequest();
    var count_request = new XMLHttpRequest();
    api_ping_request.onreadystatechange = function() {
        if (api_ping_request.readyState == 1) {
            api_ping_request.responseType = 'text';
        } else if (api_ping_request.readyState == 4) {
            if (api_ping_request.status == 200) {
                document.getElementById("apiStatus").innerHTML = "<i class='fas fa-check'></i> <b>operational</b>.";
                document.getElementById("apiStatusAlert").className = "alert alert-success";
            } else {
                document.getElementById("apiStatus").innerHTML = "<i class='fas fa-exclamation-triangle'></i> <b>down</b>.";
                document.getElementById("apiStatusAlert").className = "alert alert-danger";
            }
        }
    };
    count_request.onreadystatechange = function() {
        if (count_request.readyState == 1) {
            count_request.responseType = 'text';
        } else if (count_request.readyState == 4) {
            if (count_request.status == 200) {
                var json_data = count_request.responseText;
                var json_parsed = JSON.parse(json_data);
                document.getElementById("imgCount").innerHTML = "There are <b>"+json_parsed.kitty+"</b> images for Kitty and <b>"+json_parsed.mini+"</b> images for Mini in the database.";
            }
        }
    }
    api_ping_request.open("GET", "https://cats-api.sanelkukic.workers.dev/ping", true);
    count_request.open("GET", "https://cats-api.sanelkukic.workers.dev/count", true);
    api_ping_request.send();
    count_request.send();
}
window.onload = makeHttpReqs();