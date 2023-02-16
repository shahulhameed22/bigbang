import React from "react";
import PhotoAlbum from "react-photo-album";
const photos = [
    { src: "/images/plan.jpg", width: 800, height: 600 },
    { src: "/images/plan1.jpg", width: 1600, height: 900 },
    { src: "/images/1.jpg", width: 900, height: 1200 },
    { src: "/images/2.jpg", width: 800, height: 600 },
    { src: "/images/3.jpg", width: 1600, height: 900 },
    { src: "/images/4.jpg", width: 900, height: 1200 },
    { src: "/images/5.jpg", width: 800, height: 600 },
    { src: "/images/6.jpg", width: 1600, height: 900 },
    { src: "/images/8.jpg", width: 900, height: 1200 },
    { src: "/images/9.jpg", width: 800, height: 600 },
    { src: "/images/10.jpg", width: 1600, height: 900 },
    { src: "/images/11.jpg", width: 900, height: 600 },

        ]
export function Gallery(){
    return(
        <div className="col-lg-12 backcolor-banner2 p-5 " id="gallery">

            <div className="col-lg-8 mr-auto ml-auto  ">
                <h2 className="text-center m-5 font">GALLERY</h2>
                

                
            </div>
            <div className="container-fluid">

                <PhotoAlbum layout="masonry" photos={photos} />
            </div>
        </div>
    );
}
