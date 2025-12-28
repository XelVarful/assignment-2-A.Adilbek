# Assignment 2 – Backend API Integration & Service Development

## Project Overview
This project was developed as part of Assignment 2 and focuses on backend API integration and service development.  
The main goal of the project is to retrieve data from third-party APIs on the **server side**, process it, and provide clean and structured data to the frontend.

The application fetches real-time weather data using the OpenWeather API and additional country-related information using the REST Countries API.

## Technologies Used
- Node.js
- Express.js
- Axios
- OpenWeather API
- HTML
- CSS


## Project Features
- Server-side API integration
- Real-time weather data retrieval
- Additional country information integration
- Clean and structured backend architecture
- Responsive and user-friendly frontend interface
- Secure usage of API keys via environment variables


## APIs Used

### 1. OpenWeather API
Used to retrieve real-time weather information for a given city:
- Temperature
- Feels-like temperature
- Weather description
- Wind speed
- Rain volume (last 3 hours)
- Country code

### 2. REST Countries API
Used to retrieve additional country-related information:
- Country name
- Capital city
- Currency

All API requests are performed strictly on the **server side**.

 ## Project Structure

```
assignment-2-A.Adilbek/
│
├── server.js
├── package.json
├── .env
└── public/
    ├── index.html
    └── style.css
```

## Running the Project

### Start the server using:
```
npm start
```

The application will be available at:
```
http://localhost:3000
```
## Conclusion

This project demonstrates practical backend API integration, secure handling of API keys, and clean separation between backend and frontend responsibilities.
It follows best practices for server-side development and meets all the requirements of Assignment 2.
