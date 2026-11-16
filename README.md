🧑‍🌾 FarmConnect – Full Stack Farming Network

FarmConnect is a full-stack web application that connects Farmers & Consumers directly — enabling product browsing, transaction tracking, market access, and language support for regional users.


📘 About the Project

FarmConnect is India's largest farmer-to-consumer digital platform, enabling farmers to sell their products directly to consumers.

The app supports:

secure authentication (JWT)

Language support (EN / HI / KN / TE)

Protected routes & dashboard

MongoDB-based storage

Market price & orders tracking

🔥 Features

Feature	Description

👤 User Roles	Farmer / Consumer

🔐 Authentication	JWT-based Login & Signup

🌐 Multi-language Support: English, Hindi, Kannada, Telugu

📦 Product Management	Browse & list farm products

📊 Dashboard	Track orders & transactions

🤝 Market Access: Latest market opportunities

📱 Fully Responsive	Works on mobile & PC

🚀 Full Deployment	Render (Full Stack Deployed)

⚙️ Tech Stack

🖥️ Frontend

•React + Vite

•React Router

•Tailwind CSS

•i18next (Language Translation)

⚙️ Backend

•Node.js

•Express.js

•MongoDB Atlas

•JWT Authentication

•Mongoose

☁️ Deployment

Service 	  Platform

Frontend	  Render (Static Site)

Backend   	Render (Web Service)

Database 	 MongoDB Atlas


🛠 Installation & Setup

🔹 Clone the repo
   git clone      
https://github.com/Sneham-06/farmconnect.git
  cd farmconnect

🔹 Setup Backend

  cd server
  npm install
  npm start


Create a .env file inside server/:

MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret_key
PORT=5000

🔹 Setup Frontend

.  cd ../client
   npm install
   npm run dev    # for development
   npm run build  # for production

📡 API Endpoints (Sample)

Method   Endpoint        Description 
POST	    /auth/register 	Register user
POST	    /auth/login	    Login user
GET	      /products    	Get all products
POST	    /orders      	Place a new order
GET	      /dashboar     	User dashboard


🚀 Future Enhancements

📍 GPS-based farm location tracking

💰 Online payment methods (UPI / Razorpay)

🧠 AI-based price prediction

📈 Analytics dashboard
