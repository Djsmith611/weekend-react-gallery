/* IMPORT STATEMENTS */
import { useEffect } from "react";
import {Box} from '@mui/material';
import GalleryItem from "./GalleryItem.jsx";

/**
 * A list of all gallery items
 * @param {*} props passed from App 
 * @returns a rendered list of all gallery images/descriptions contained in cards
 */
function GalleryList({loadGallery, gallery}) {
    /**
     * Loads gallery data on page load
     */
    useEffect(() => {
        loadGallery();
    }, [])

    return(
        <Box // MUI Box component used for styling
            data-testid="galleryList" // data-testid used for automated testing, try npm test to run the sest suite!
            my={4} // Margin set on y-axis
            flexWrap="wrap" // Allows wrapping
            display="flex"
            justifyContent="center" // aligns items horixontally
            alignItems="center" // aligns items vertically
            gap={4} // gap between items
            p={2} // padding
            backgroundColor="#82b1ff"
            margin={0}
            >
            {
                gallery.map((item) => ( // Mapping over gallery array
                    <GalleryItem key={item.id} item={item} loadGallery={loadGallery} /> // GalleryItem created for each item
                ))
            }
        </Box>
    );
}

export default GalleryList;