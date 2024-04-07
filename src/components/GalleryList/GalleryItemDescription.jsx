import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function GalleryItemDescription({item}) {
    return(
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {item.description}
            </Typography>
        </CardContent>
    )
}

export default GalleryItemDescription;