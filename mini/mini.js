function makeMiniRequest() {
    var mini_http = new XMLHttpRequest();
    mini_http.onreadystatechange = function() {
        if (mini_http.readyState == 1) {
            mini_http.responseType = 'arraybuffer';
        } else if (mini_http.readyState == 4) {
            var theArray = new Uint8Array(mini_http.response);
            var i = theArray.length;
            var binaryString = new Array(i);
            while (i--) {
                binaryString[i] = String.fromCharCode(theArray[i]);
            }
            var data = binaryString.join('');
            var b64 = window.btoa(data);
            document.getElementById("iLoveYouMini").src = "data:image/jpg;base64,"+b64;
        }
    };
    mini_http.open("GET", "https://cats-api.sanelkukic.workers.dev/mini", true);
    mini_http.send();
}
window.onload = makeMiniRequest();