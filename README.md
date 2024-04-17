# React Gallery Application <a name="top"></a>

This project is a web-based image gallery application. The image data is stored on a database that communicates with a server. Users can easily add, edit, delete, and mark tasks as complete. The user interface is designed using Material UI. The images are organized in a gallery that is easy to navigate.

![App Screenshot](/public/images/preview.png)

## Navigation
- [Features](#features)
- [Technologies used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features 

- Adding to the Gallery
- Removal from Gallery
- Like Functionality
- Click to display description

[Back to Top](#top)
## Technologies Used

- `HTML`: Structure of the to do list and its components
- `CSS`: Styling of the HTML page and components
- `JavaScript`: Form submission, communication with server, communication with database.
- `React`: Jsx extension of JavaScript, component creation, useEffect, useState
- `Express.js`: Server-side logic to store, modify, and retrieve gallery items
- `Axios`: Promise-based HTTP client for making requests to the server
- `Material UI`: React UI component library

[Back to Top](#top)
## Getting Started

### Prerequisites

- `Node.js` installed on your machine
- A modern web browser
- Access to Postgres and Postico(Only availible on MAC)

### Installation

1. Clone this repository to your local machine using Terminal:

    - Click the green code button on this repository to get the SSH address and paste it into your terminal after typing:
        ```shell
        git clone
        ```
    - Make sure to set up your SSH key with GitHub prior.
2. Navigate to the project directory:

    ```shell
    cd weekend-react-gallery
    ```

3. Install the required dependencies:

    ```shell
    npm install
    ```
4. Create a database in Postico named:
    
    `react-gallery`
5. Run the code from `database.sql` in your new    database.

6. Start the server:

    ```shell
    npm run server
    ```
7. Start the client in a separate terminal:

    ```shell
    npm run client
    ```
8. Open your web browser and navigate to http://localhost:5173/ to access the app.

### Usage

- Use the camera icon in the top left to begin adding to the gallery.
- Fill out the input fields.
- Click the `Submit Photo` button to add the data to your database.
- Click the `Heart Button` on a gallery image to add to the like count.
- Click the `three dots` button to reveal the delete button for a gallery image.
- Click `Delete` to remove an image.

[Back to Top](#top)
