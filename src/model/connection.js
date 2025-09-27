import { Sequelize } from "sequelize";

// Replace with your actual DB details
const DB_NAME = 'postgres';          // your database name
const DB_USER = 'postgres';      // your username
const DB_PASS = 'Manish123';    // your password
const DB_HOST = 'localhost';     // your host
const DB_PORT = 5432;            // default PostgreSQL port

// Initialize Sequelize instance
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  logging: false, // set to true if you want SQL logs
});

// Function to test connection
export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error.message);
  }
};

export default sequelize;