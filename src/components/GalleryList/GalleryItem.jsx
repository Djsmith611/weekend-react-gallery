import GalleryItemDisplay from "./GalleryItemDisplay.jsx";
import GalleryItemLikes from "./GalleryItemLikes.jsx";

function GalleryItem({item, loadGallery}) {
    return(
        <div className="GalleryItem">
            <GalleryItemDisplay/>
            <GalleryItemLikes/>
        </div>
    );
}

export default GalleryItem;