import axios from "axios";
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

function GalleryItemLikes({ item, loadGallery }) {
    const likeItem = (id) => {
        axios
            .put(`api/gallery/${id}`)
            .then((response) => {
                loadGallery();
            })
            .catch((err) => {
                console.error("ERROR in PUT CLIENT",err);
                alert("Something bad happened.");
            });
    }

    return(
        <CardActions>
            <IconButton 
                onClick={() => {
                    likeItem(item.id);
                }} >
                <FavoriteIcon />
            </IconButton>
            <span>Likes:{item.likes}</span>
        </CardActions>
    );
}

export default GalleryItemLikes;