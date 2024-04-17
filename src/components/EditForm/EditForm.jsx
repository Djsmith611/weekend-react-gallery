/* IMPORT STATEMENTS */
import { Backdrop, Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

/**
 * Displays a form with a backdrop when isEdit is true
 * @param {*} props passed from App.jsx
 * @returns a form to add an image to the database
 */
function EditForm({ isEdit, toggleEdit, loadGallery }) {
    /* INPUT VARIABLES */
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    /**
     * Clears all input fields for the next time the form is displayed, then changes isEdit to false
     */
    const clearInputFields = () => {
        setTitle('');
        setUrl('');
        setDescription('');
        toggleEdit();
    }

    /**
     * Adds form data to database and reloads gallery to display newly added image
     */
    const addPhoto = () => {
        const data = {
            title:title, 
            url:url, 
            description:description
        }
        /* Axios call to submit a post request to server */
        axios
            .post("api/gallery", data)
            .then((res) => {
                clearInputFields(); // Clear input fields
                loadGallery(); // Reload gallery
            })
            .catch((err) => {
                console.error(err);
                alert("Something went wrong!");
            });
    }
    return(
        <Backdrop // MUI component displays content with an overlay of the page
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} // Styling & setting Z-index to display over page
        open={isEdit} // Backdrop display criteria
        >
          <Box sx={{ // MUI component for box styling 
            backgroundColor:"white",
            padding:10,
            borderRadius:"10px",
          }}>
            <Stack direction="column" spacing={5}> {/* MUI component stacks content based on given direction and spacing */}
              {/* MUI TextField components act as styled/animated input fields */}
              <TextField label="Title" variant="filled" value={title} onChange={(e) => setTitle(e.target.value)} /> 
              <TextField label="Url" variant="filled" value={url} onChange={(e) => setUrl(e.target.value)} />
              <TextField label="Description" variant="filled" multiline value={description} onChange={(e) => setDescription(e.target.value)} />
              {/* MUI Button components function the same as button elements but with styling changes */}
              <Button variant="contained" onClick={addPhoto} >Submit Photo</Button>
              <Button variant="text" onClick={toggleEdit} color="error" >Cancel</Button>
            </Stack>
          </Box>
        </Backdrop>
    );
}

export default EditForm;