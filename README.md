## **Museum Art Gallery App**
### **About**
This is an art gallery app that displays artworks from Arts Institute of Chicago Museum API. Data in each artwork contains;

    - Image
    - Artwork title
    - Artist title
    - Start date of the artwork
    - End date of the artwork

A user can be able to give a rating for each artwork and also leave a comment.
The ratings are then posted to the database and automatically reflect on the web app.

### **Live link**

### **Technologies used**
#### **Backend**
The backend server was developed with Ruby using Active Record

#### **Frontend**
The frontend design was developed with React js utilizing the capabilities of
states, props, and hooks.

### **Date published**
13/Sept/2022


### **Artworks API**
API link: https://api.artic.edu/api/v1/artworks

API docs: https://api.artic.edu/docs/#quick-start

### **Cloning**
Incase you are interested in running the app on your local pc,follow the steps below;

- Clone this repository
- Navigate into the Backend folder
- Run `bundle install` then `bundle exec rake db:migrate db:seed` to create tables and add data from API
- Run `bundle exec rake server` which will open up a link to the server usually http://localhost:9292
- Add /arts to the end of the link to view the JSON data http://localhost:9292/arts
- Open a new terminal and navigate into the frontend folder then into the artgalleryapp folder
- Navigate into src/App.js and and make sure the fetch is from your backend server link. If not copy and paste your server link there. http://localhost:9292/arts
- Run `npm install && npm start` to install dependancies and open the frontend link. Usually http://localhost:3000/
- Add a rating and comment to the first artwork then click on view ratings to see your posted rating
- You can also check on the first artwork in your API http://localhost:9292/arts and confirm your rating has been posted
- That's it! Kudos! You can now give a rating of the other artworks
### **Author**
[**David Nene**](https://www.github.com/davidnene)

**Software Engineer**






