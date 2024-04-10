import { useState, useEffect } from "react";
import {Box} from '@mui/material';
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
        <Box 
            data-testid="galleryList"
            my={4}
            flexWrap="wrap"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={4}
            p={2}
            backgroundColor="#82b1ff"
            margin={0}
            >
            {
                gallery.map((item) => (
                    <GalleryItem key={item.id} item={item} loadGallery={loadGallery} />
                ))
            }
        </Box>
    );
}

export default GalleryList;