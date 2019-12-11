var filepreview = require('filepreview-sp');

filepreview.generate('sample.pdf', 'sample.jpg', function (error) {
    if (error) {
        return console.log(error);
    }
    console.log('File preview is sample.jpg');
});