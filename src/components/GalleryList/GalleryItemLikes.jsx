import axios from "axios";

function GalleryItemLikes({ likes, id, loadGallery }) {
    const likeItem = (itemId) => {
        axios
            .put(`api/gallery/${itemId}`)
            .then((response) => {
                loadGallery();
            })
            .catch((err) => {
                console.error("ERROR in PUT CLIENT",err);
                alert("Something bad happened.");
            });
    }

    return(
        <div className="GalleryItemLikes">
            <span>Likes:{likes}</span>
            <button onClick={() => {
                likeItem(id);
            }} >Like</button>
        </div>
    );
}

export default GalleryItemLikes;