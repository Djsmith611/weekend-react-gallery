/* IMPORT STATEMENTS */
import { GalleryList, Footer, Header, EditForm } from "../../index.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useState } from "react";
import axios from "axios";
/**
 * Main App component from which others are rendered
 * @returns React App Component
 */
function App() {
  const [isEdit, setIsEdit] = useState(false); // Edit Mode boolean to add user images and descriptions
  const [gallery, setGallery] = useState([]); // Empty Gallery array to store all images and image data

  /**
   * Loads Gallery data from database
   */
  const loadGallery = () => {
    /* Axios call to submit a GET request to server */
    axios
      .get("api/gallery")
      .then((response) => {
        setGallery(response.data); // Gallery setter will set the gallery as the incoming data
      })
      .catch((err) => {
        console.error("ERROR in GET CLIENT", err); // Error message
        alert("Something went wrong!");
      });
  };

  /**
   * Toggles Edit Mode
   */
  const toggleEdit = () => {
    setIsEdit(!isEdit); // Edit Mode setter
  };

  return (
    <div data-testid="app"> {/* data-testid is for automated testing, run npm test to try it out! */}
      {/* Header component displays the Gallery title and add photo button */}
      <Header toggleEdit={toggleEdit} />
      {/* EditForm component displays the add photo form triggered by the add photo button */}
      <EditForm isEdit={isEdit} toggleEdit={toggleEdit} loadGallery={loadGallery} />
      {/* GalleryList component displays the Gallery items and images and add photo button */}
      <GalleryList loadGallery={loadGallery} gallery={gallery} />
      {/* Footer component displays the footer info */}
      <Footer />
    </div>
  );
}

export default App;
