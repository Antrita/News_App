# News Website

A modern full-stack news application built with React, Express.js, and MongoDB, featuring category-based news organization and real-time updates.

## Project Overview

### Client-Side Development (React)
- Built with React, offering a dynamic and interactive user interface
- Category-based news browsing (Sports, Entertainment, Technology. Headlines)
- Responsive design with Tailwind CSS
- Dark/Light mode theming
- Real-time news updates and infinite scrolling

### Server-Side Development (Express & MongoDB)
- Express.js backend with structured API routes
- MongoDB for efficient data storage and retrieval
- User authentication and authorization
- Category-based news caching
- Error handling and logging

### Key Features
- Categorized news browsing
- User authentication and profile management
- Saved articles functionality
- Search across categories
- Mobile-responsive design
- Performance optimized with caching
- API rate limiting and security measures

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Context API for state management
- Tailwind CSS for styling
- Axios for API requests

### Backend
- Node.js & Express.js
- MongoDB & Mongoose
- JWT for authentication
- Bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/Antrita/News_App.git
cd news-website
```

2. Install server dependencies
```bash
cd server
npm install
```

3. Install client dependencies
```bash
cd ../client
npm install
```

4. Environment Setup
   
Server (.env):
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Client (.env):
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Running the Application

Start backend:
```bash
cd server
npm run dev
```

Start frontend:
```bash
cd client
npm start
```

## Project Structure
```
news-website/
├── client/                # React frontend
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── context/      # Context providers
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   └── styles/       # Global styles
│   └── package.json
└── server/               # Express backend
    ├── src/
    │   ├── config/       # Configuration files
    │   ├── controllers/  # Route controllers
    │   ├── middleware/   # Custom middleware
    │   ├── models/       # MongoDB models
    │   ├── routes/       # API routes
    │   └── utils/        # Utility functions
    └── package.json
```



## License
This project is licensed under the MIT License