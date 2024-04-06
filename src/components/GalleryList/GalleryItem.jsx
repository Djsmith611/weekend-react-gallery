import GalleryItemDisplay from "./GalleryItemDisplay.jsx";
import GalleryItemLikes from "./GalleryItemLikes.jsx";

function GalleryItem({item, loadGallery}) {
    return(
        <div className="GalleryItem">
            <GalleryItemDisplay item={item} />
            <GalleryItemLikes likes={item.likes} id={item.id} loadGallery={loadGallery} />
        </div>
    );
}

export default GalleryItem;