function makeKittyRequest() {
    var kitty_http = new XMLHttpRequest();
    kitty_http.onreadystatechange = function() {
        if (kitty_http.readyState == 1) {
            kitty_http.responseType = 'arraybuffer';
        } else if (kitty_http.readyState == 4) {
            var theArray = new Uint8Array(kitty_http.response);
            var i = theArray.length;
            var binaryString = new Array(i);
            while (i--) {
                binaryString[i] = String.fromCharCode(theArray[i]);
            }
            var data = binaryString.join('');
            var b64 = window.btoa(data);
            document.getElementById("iLoveYouKitty").src = "data:image/jpg;base64,"+b64;
        }
    };
    kitty_http.open("GET", "https://cats-api.sanelkukic.workers.dev/kitty", true);
    kitty_http.send();
}
window.onload = makeKittyRequest();