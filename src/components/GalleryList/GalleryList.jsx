import { useState, useEffect } from "react";
import axios from "axios";
import GalleryItem from "./GalleryItem.jsx";
import Box from '@mui/material/Box';

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
            justifyContent="flex-start"
            alignItems="center"
            gap={4}
            p={2}
            >
            {
                gallery.map((item) => (
                    <GalleryItem item={item} loadGallery={loadGallery} />
                ))
            }
        </Box>
    );
}

export default GalleryList;