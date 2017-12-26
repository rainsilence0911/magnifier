
import { ConfigImageItem } from '../config-item';

let imageList = [
    "assets/images/a.jpg",
    "assets/images/b.jpg",
    "assets/images/c.jpg",
    "assets/images/d.jpg"
];

export default class ImageManager {

    static load() {

        return new Promise((resolve)=>{
            let config = [];
            let loadedCount = 0;

            imageList.forEach((path, i) => {
                let img = new Image();
                img.onload = function(e) {
                    let target = e.target as HTMLImageElement;
                    config[i] = new ConfigImageItem(
                        path.substring(path.lastIndexOf("/") + 1),
                        "url('" + path + "')",
                        target.width,
                        target.height
                    );
                    loadedCount++;
                    if (loadedCount === imageList.length) {
                        resolve(config);
                    }

                };

                img.src = imageList[i];
            });
        });
    }

}