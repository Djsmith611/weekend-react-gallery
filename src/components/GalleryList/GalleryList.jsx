import { useState, useEffect } from "react";
import axios from "axios";
import GalleryItem from "./GalleryItem.jsx";

function GalleryList() {
    const [gallery, setGallery] = useState([]);

    const loadGallery = () => {
        axios
            .get("api/gallery")
            .then((response) => {
                setGallery(response.data);
            })
            .catch((err) => {
                console.error("ERROR in GET CLIENT",err);
                alert("Something went wrong!");
            });
    }

    useEffect(() => {
        loadGallery();
    }, [])

    return(
        <div className="GalleryList">
            {
                gallery.map((item) => (
                    <GalleryItem item={item}/>
                ))
            }
        </div>
    );
}

export default GalleryList;