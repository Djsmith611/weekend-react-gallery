import GalleryItemHeader from "./GalleryItemHeader.jsx";
import GalleryItemImage from "./GalleryItemImage.jsx";
import GalleryItemDescription from "./GalleryItemDescription.jsx";
import GalleryItemLikes from "./GalleryItemLikes.jsx";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { useState } from "react";

function GalleryItem({item, loadGallery}) {
    const [isDescription, setIsDescription] = useState(false);
    const toggleDescription = () => {
        setIsDescription(!isDescription);
    }
    return(
        <Card sx={{width:'20%'}} data-testid="galleryItem" minHeight="300px" >
            <GalleryItemHeader item={item} />
            <Box height="200px" data-testid="toggle" onClick={toggleDescription}>
            {
                !isDescription && (
                    <GalleryItemImage item={item} />
                )
            }
            {
                isDescription && (
                    <GalleryItemDescription item={item} />
                )
            }
            </Box>
            <GalleryItemLikes item={item} loadGallery={loadGallery} />
        </Card>
    );
}

export default GalleryItem;