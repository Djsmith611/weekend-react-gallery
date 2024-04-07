import GalleryItemHeader from "./GalleryItemHeader.jsx";
import GalleryItemImage from "./GalleryItemImage.jsx";
import GalleryItemDescription from "./GalleryItemDescription.jsx";
import GalleryItemLikes from "./GalleryItemLikes.jsx";
import Card from '@mui/material/Card';

function GalleryItem({item, loadGallery}) {
    return(
        <Card sx={{width:'20%'}}>
            <GalleryItemHeader item={item} />
            <GalleryItemImage item={item} />
            <GalleryItemDescription item={item} />
            <GalleryItemLikes item={item} loadGallery={loadGallery} />
        </Card>
    );
}

export default GalleryItem;