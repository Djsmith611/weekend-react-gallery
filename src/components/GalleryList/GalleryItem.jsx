import GalleryItemHeader from "./GalleryItemHeader.jsx";
import GalleryItemImage from "./GalleryItemImage.jsx";
import GalleryItemLikes from "./GalleryItemLikes.jsx";
import Card from '@mui/material/Card';

function GalleryItem({item, loadGallery}) {
    return(
        <Card sx={{width:'10%'}}>
            <GalleryItemHeader item={item} />
            <GalleryItemImage item={item} />
            <GalleryItemLikes likes={item.likes} id={item.id} loadGallery={loadGallery} />
        </Card>
    );
}

export default GalleryItem;