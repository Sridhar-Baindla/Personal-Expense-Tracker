# Personal-Expense-Tracker
### A Personal Expenses Tracker Application using React.js for frontend, Node.js and Express for Backend and Middleware and MongoDB as Database.


## Run Locally:

To get a local copy up and running, follow these simple steps:

1. Clone this repository.
2. Install NPM packages with command: `npm install` in both backend(`root folder package.json`) and also in frontend(`client folder package.json`).
3. Configure environment variables for database connection(like mongoDB connection string, PORT numbers) in `.env` file in root directory (or) directly replace `process.env.MONGO_URL` in the `config/connectDB.js` file with your connection string.
4. Run the server with command: `npm run dev`.
5. Navigate to `localhost:3000` in your browser.

Then, the application will run locally at `http://localhost:3000/login` with port number `3000`. You can use your application with this URL.

## Project Description
The Personal Expense Tracker is designed to streamline expense management and provide insights into spending habits. Users can easily log expenses by entering amount, description, and date, which are organized into a central repository. A standout feature is the dashboard, offering visual summaries of spending trends over daily, weekly, or monthly periods. This helps users spot high expenditure areas and identify potential savings.

The application includes secure user management features for account creation, login, and session handling. It supports comprehensive expense management with options to add, edit, view, and delete entries. Users can categorize expenses with default or custom categories, enhancing organization and analysis. Built on Node.js and Express for backend operations and integrated with a frontend framework React.js, it ensures a responsive user interface. Data is stored efficiently in MongoDB or similar databases, ensuring reliability. The system also provides error handling to maintain smooth functionality and provide meaningful user feedback.

##
### Login Page:
![image](https://github.com/NIRANJAN-K-DESHMUKH/Expense-Management-System/assets/82277471/8b38ebb2-6764-4c49-8ced-85cb0c1861dd)
##
### Register Page:
![image](https://github.com/NIRANJAN-K-DESHMUKH/Expense-Management-System/assets/82277471/16431dc4-b3c3-45e4-805f-9a121766b7eb)
##
### Adding the expenses:
![Screenshot (91)](https://github.com/NIRANJAN-K-DESHMUKH/Expense-Management-System/assets/82277471/d8bf2881-39d8-45ce-a72c-af14ad7855eb)
##
### Records:
![Screenshot (92)](https://github.com/NIRANJAN-K-DESHMUKH/Expense-Management-System/assets/82277471/cbf709be-fef1-470c-a161-9c4ad5316dbd)
##
### Dashboard:
![Screenshot (93)](https://github.com/NIRANJAN-K-DESHMUKH/Expense-Management-System/assets/82277471/f3c1b04a-23aa-47b2-a098-d6e5f7b78e59)