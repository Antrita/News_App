# News Website

A modern news aggregation platform built with the MERN stack (MongoDB, Express.js, React, Node.js) that provides real-time news updates using TheNewsAPI.

## Features

- Real-time news updates
- Category-based filtering
- Responsive design
- Personalized news preferences

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Context API for state management
- Tailwind CSS & Bootstrap for styling

### Backend
- Node.js
- Express.js
- MongoDB for database
- JWT for authentication

### External API
- TheNewsAPI for news content

## Project Structure

```
news-website/
├── client/                # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── pages/
│       └── services/
└── server/                # Express backend
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── routes/
    └── models/
```

## API Endpoints

### News Routes
```
GET /api/news/top          # Get top stories
GET /api/news/category/:category  # Get news by category
GET /api/news/search?q=:query    # Search news articles
GET /api/news/article/:uuid      # Get single article
```

### User Routes
```
POST /api/users/register   # Register new user
POST /api/users/login      # User login
GET /api/users/profile     # Get user profile
PUT /api/users/preferences # Update news preferences
```

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/Antrita/news-website.git
cd news-website
```

2. Install dependencies
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. Environment Variables

Create .env files in both client and server directories:

Frontend (.env in client folder):
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_NEWS_API_KEY=your_api_key_here
```

Backend (.env in server folder):
```
PORT=5000
MONGODB_URI=your_mongodb_uri
NEWS_API_KEY=your_api_key_here
JWT_SECRET=your_jwt_secret
```

4. Start the application
```bash
# Start backend server
cd server
npm run dev

# Start frontend in a new terminal
cd client
npm start
```

The application will be available at `http://localhost:3000`

## Available Scripts

In the client directory:
```bash
npm start    # Start development server
npm test     # Run tests
npm run build    # Build for production
```

In the server directory:
```bash
npm run dev      # Start development server
npm run start    # Start production server
```


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [TheNewsAPI](https://www.thenewsapi.com/) for providing news data
- [React Documentation](https://reactjs.org/)
- [Express.js Documentation](https://expressjs.com/)