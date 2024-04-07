import CardMedia from '@mui/material/CardMedia';
function GalleryItemImage({item, toggleDescription}) {
    return(
        <CardMedia
        component="img"
        image={item.url}
        alt={item.title}
        onClick={toggleDescription}
      />
    )
}

export default GalleryItemImage;