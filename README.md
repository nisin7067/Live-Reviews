

### Backend Setup:

1. **Navigate to the Backend Directory:**
   cd backend

2. **Install Dependencies:**
   npm install

3. **Start the Backend Server:**
   npm start
   The backend server should now be running on `http://localhost:3000`.

4. **MongoDB Setup:**
   - Ensure MongoDB is running on its default port (`27017`).
   - You can use MongoDB Compass to manage the database.

### Frontend Setup:

1. **Navigate to the Frontend Directory:**
   cd frontend/live-reviews

2. **Install Dependencies:**

   npm install

3. **Start the Frontend Server:**
   npm start
   The frontend server should now be running on `http://localhost:3000`.

### Backend API Routes:

1. **Fetch Reviews:**
   - **Method:** GET
   - **Route:** `http://localhost:3000/api/reviews`
   - **Purpose:** Fetch all reviews.

2. **Add Review:**
   - **Method:** POST
   - **Route:** `http://localhost:3000/api/reviews`
   - **Purpose:** Add a new review.

3. **Update Review:**
   - **Method:** PUT
   - **Route:** `http://localhost:3000/api/reviews/:id`
   - **Purpose:** Update an existing review with the specified `id`.

4. **Delete Review:**
   - **Method:** DELETE
   - **Route:** `http://localhost:3000/api/reviews/:id`
   - **Purpose:** Delete the review with the specified `id`.


### Frontend URLs:

1. **Reviews List:**
   - **URL:** `http://localhost:3001/`
   - **Purpose:** Displays a list of reviews with options to edit and delete.

2. **Create New Review:**
   - **URL:** `http://localhost:3001/new`
   - **Purpose:** Form to create a new review.

3. **Edit Review:**
   - **URL:** `http://localhost:3001/edit/:id`
   - **Purpose:** Form to edit an existing review, where `:id` is the ID of the review.

### Running the Application:
   - After setting up the backend and frontend, navigate to the respective directories and follow the instructions to start the servers.
   - Access the frontend URLs in your browser to interact with the application.
