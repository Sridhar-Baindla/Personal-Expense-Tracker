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
<img width="960" alt="image" src="https://github.com/user-attachments/assets/dce5bd82-8685-451b-9357-792aef90256d"/>

### Register Page:
<img width="960" alt="image" src="https://github.com/user-attachments/assets/537bec61-b1f1-44ce-8a35-8c8fe4160114"/>

### Adding the expenses:
<img width="960" alt="image" src="https://github.com/user-attachments/assets/fb8c0bee-ea4c-4676-991b-097b555b18cf"/>

### Records:
<img width="960" alt="image" src="https://github.com/user-attachments/assets/d47879ce-9a00-4acb-bed3-e7a86b2d749a"/>

### Dashboard:
<img width="960" alt="image" src="https://github.com/user-attachments/assets/0c5e47e7-d879-4dd8-84fb-d80233a13696"/>
