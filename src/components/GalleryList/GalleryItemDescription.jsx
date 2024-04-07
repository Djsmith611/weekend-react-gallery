import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function GalleryItemDescription({item, toggleDescription}) {
    return(
        <CardContent onClick={toggleDescription} >
            <Typography variant="body2" color="text.secondary" height="201px" >
                {item.description}
            </Typography>
        </CardContent>
    )
}

export default GalleryItemDescription;