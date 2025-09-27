🛒 E-Commerce Backend (Node.js + Express + PostgreSQL)

This is the backend for an e-commerce application built with Node.js, Express, PostgreSQL, and Sequelize ORM.
It provides APIs for user authentication and product management (extendable for orders, carts, payments, etc.).

🚀 Features

User authentication with JWT tokens

Password hashing using bcrypt

PostgreSQL with Sequelize ORM

Environment variable management with dotenv

RESTful API structure

Scalable and easy to extend

📂 Project Structure
backend/
│── src/
│   ├── models/
│   │   ├── db.js           # Database connection
│   │   ├── UserData.js     # User model
│   ├── app.js              # Main app file
│── .env                    # Environment variables
│── package.json
│── README.md

⚙️ Installation
1. Clone repository
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend

2. Install dependencies
npm install

3. Set up environment variables

Create a .env file in the project root:

PORT=3000
DB_NAME=ecommerce
DB_USER=postgres
DB_PASS=yourpassword
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=yourSecretKey

4. Run migrations / sync DB

Ensure PostgreSQL is running, then:

npm start