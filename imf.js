var images = [];
var i = 0;
var f = document.getElementById("images");

var k = document.getElementById("imn");
f.addEventListener("change", function () {
    readAndShowFiles(this.files);
});


function readAndShowFiles(files) {

    for (var i = 0; i < files.length; i++) {    
        // Closure to capture the file information.
        (function (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                // Render thumbnail.
                var span = document.createElement('span');
                span.innerHTML = ['<img src="', e.target.result,
                    '" title="', escape(file.name), '">'
                ].join('');
                document.getElementById('list').insertBefore(span, null);
                images.push(e.target.result);
            };
            // Read in the image file as a data URL.
            reader.readAsDataURL(file);
        })(files[i]);
    }
}

function next() {
    k.src = images[++i % images.length];
}


function prev() {
    k.src = images[--i % images.length];
}