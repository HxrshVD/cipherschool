
---

# CipherStudio Backend

Backend API for **CipherStudio**, a React-based IDE that allows coding, project management, and live preview. Built with Node.js, Express, MongoDB, JWT authentication, and file upload support.

---

## Technologies

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Multer (for file uploads)

---

## Installation

1. Clone the repository:

git clone [https://github.com/yourusername/cipherstudio-backend.git](https://github.com/yourusername/cipherstudio-backend.git)
cd cipherstudio-backend

2. Install dependencies:

npm install

3. Start the server:

npm run dev

The server runs by default on [http://localhost:5000](http://localhost:5000).

---

## Environment Variables

Create a `.env` file in the root directory:

PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>

---

## API Routes

### User Routes

| Method | Endpoint         | Description               | Body Parameters       |
| ------ | ---------------- | ------------------------- | --------------------- |
| POST   | /api/users       | Register a new user       | name, email, password |
| POST   | /api/users/login | Login user and return JWT | email, password       |
| GET    | /api/users/:id   | Get user info (optional)  | N/A                   |

### Project Routes

| Method | Endpoint              | Description                | Body Parameters |
| ------ | --------------------- | -------------------------- | --------------- |
| POST   | /api/projects         | Create a new project       | name            |
| GET    | /api/projects/:userId | Get all projects of a user | N/A             |
| PUT    | /api/projects/:id     | Update a project           | name            |
| DELETE | /api/projects/:id     | Delete a project           | N/A             |

### File Routes

| Method | Endpoint       | Description                     | Body Parameters                                                          |
| ------ | -------------- | ------------------------------- | ------------------------------------------------------------------------ |
| POST   | /api/files     | Create a new file               | projectId, parentId (optional), name, type ("file" or "folder"), content |
| GET    | /api/files/:id | Get a file by ID                | N/A                                                                      |
| PUT    | /api/files/:id | Update file (rename or content) | name (optional), content (optional)                                      |
| DELETE | /api/files/:id | Delete a file                   | N/A                                                                      |

---

## Example Requests

### Create Project

POST /api/projects

Headers: Authorization: Bearer <JWT_TOKEN>

Body:
{ "name": "MyProject" }

### Add File to Project

POST /api/files

Headers: Authorization: Bearer <JWT_TOKEN>

Body:
{
"projectId": "<project_id>",
"parentId": null,
"name": "src/App.js",
"type": "file",
"content": "export default function App() { return <div>Hello</div>; }"
}

---

## Usage

1. Start the backend server.
2. Use the frontend **CipherStudio React IDE** to interact with backend routes.
3. Features include:

   * Save projects
   * Create files and folders
   * Edit code
   * Live preview

---

## License

MIT License © 2025

---

CipherStudio Frontend

React-based IDE for CipherStudio that provides a code editor, file management, and live preview. Integrates with the CipherStudio backend API to save and manage projects.

Technologies

React.js (v18)

Vite

Tailwind CSS

@monaco-editor/react (Monaco Code Editor)

@codesandbox/sandpack-react (Live Preview)

React Router DOM

Installation

Clone the repository:

git clone https://github.com/yourusername/cipherstudio-frontend.git

cd cipherstudio-frontend

Install dependencies:

npm install

Start the development server:

npm run dev

The app runs by default on http://localhost:5173
.

Environment Variables

Create a .env file in the root directory if needed (for API URLs or keys):

REACT_APP_API_URL=http://localhost:5000

Features

File Tree: Create, rename, delete files and folders.

Code Editor: Edit HTML, CSS, and JS using Monaco Editor.

Live Preview: Real-time rendering of your code using Sandpack.

Project Management: Save and load projects via backend API.

Dark/Light Mode Toggle.

Auto-save files locally in the browser.

Usage

Start backend server first (CipherStudio Backend
).

Start frontend server with npm run dev.

Open the IDE in browser at http://localhost:5173
.

Create or load a project, edit code, and preview changes live.

Folder Structure

src/components – Reusable UI components (CodeEditor, LivePreview, FileTree, TopBar)

src/pages – Main app pages (Dashboard, Home, Login, Register)

src/api – API request helper functions

src/utils – Utility functions (e.g., auth helpers)

License

MIT License © 2025
