
import imageA from '../images/a.jpg';
import imageB from '../images/b.jpg';
import imageC from '../images/c.jpg';
import imageD from '../images/d.jpg';

var imageList = [imageA, imageB, imageC, imageD];

export default class ImageLoader {

    static init(callback) {

        var config = {};
        var loadedCount = 0;

        imageList.forEach(function(path, i) {
            let img = new Image();
            img.onload = function(e) {
                var target = e.target;
                config[i] = {
                    path: "url('" + path + "')",
                    width: target.width,
                    height: target.height
                };
                loadedCount++;
                if (loadedCount === imageList.length) {
                    callback(config);
                }

            };

            img.src = imageList[i];
        });
    }

}