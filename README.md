# restful-api-with-student-data
A smiple restful api with student data where we can perform all operation ( get, post, put,delete)

## Setting Up and Testing APIs Using VS Code

### 1. Install npm:
   - Open the terminal in VS Code and ensure npm is installed.
   - If not installed, install Node.js which comes with npm.
   - In the terminal, run `npm start` to start the server.

### 2. Install MongoDB:
   - Install MongoDB on your system.
   - Create a database named `studentinformation`.
   - Inside `studentinformation`, create a collection named `studentdatas`.

### 3. Use Postman to check the APIs:
   - Install Postman if not already installed.
   - Test the APIs using Postman.

### 4. Modules Used:
   - Express
   - Mongoose

### 5. API Endpoints:

   - **GET** `127.0.0.1:8000/user`
   - **POST** `127.0.0.1:8000/user` 
     - Body:
     ```json
     {
         "admission": "22mt0229",
         "name": "nobin sahu",
         "phone": 1234567890,
         "course": "mtechcse",
         "hostel": "sapphire"
     }
     ```
   - **PUT** `127.0.0.1:8000/user/22mt0229/mtech` (to update course)
   - **DELETE** `127.0.0.1:8000/user/22mt0229`

### 6. To excute the code
  - node app.js
