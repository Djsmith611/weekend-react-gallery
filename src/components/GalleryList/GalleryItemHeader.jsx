import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

function GalleryItemHeader({item}) {
    return(
        <CardHeader 
            title={item.title}
            action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
            />
    )
}

export default GalleryItemHeader;