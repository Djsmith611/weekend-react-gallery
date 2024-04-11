import { useEffect } from "react";
import {Box} from '@mui/material';
import GalleryItem from "./GalleryItem.jsx";


function GalleryList({loadGallery, gallery}) {

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