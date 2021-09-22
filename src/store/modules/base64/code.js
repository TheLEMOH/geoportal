function Encode(file, object) {
    var selectedfile = file
    if (selectedfile.length > 0) {
        var imageFile = selectedfile[0];
        var fileReader = new FileReader();
        fileReader.readAsDataURL(imageFile);
        fileReader.onload = (fileLoadedEvent) => {
            var srcData = fileLoadedEvent.target.result;
            object.img = srcData;
            return srcData
        }

    }
}

function getBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () { resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}



export { Encode, getBase64 }