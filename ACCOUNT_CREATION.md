# How to Create a User Account

This document provides instructions on how to create a user account for the Real Estate Management application.

## 1. Prerequisites

The backend server must be running to create a user account. Before starting the server, you must ensure that the database connection is configured correctly.

### Database Configuration

The backend server requires a connection to a PostgreSQL database. The configuration for this connection is located in the file `real-estate-backend/src/config/database.ts`.

When attempting to start the server, the following error was encountered:
`ConnectionError [SequelizeConnectionError]: password authentication failed for user "postgres"`

This error indicates that the password for the `postgres` user in the `database.ts` file is incorrect.

**Action Required:** Please open the `real-estate-backend/src/config/database.ts` file and update the `password` field with the correct password for your PostgreSQL database.

```typescript
// real-estate-backend/src/config/database.ts

export const sequelize = new Sequelize({
  database: "real_estate_db", // Database name
  username: "postgres",       
  password: "YOUR_DATABASE_PASSWORD",  // <-- IMPORTANT: Replace with your actual password
  host: "127.0.0.1",
  dialect: "postgres",
  models: [User],
});
```

## 2. Running the Backend Server

Once the database configuration is corrected, you can start the backend server.

1.  **Compile the code:**
    Open a terminal in the `real-estate-backend` directory and run the following command to compile the TypeScript code:
    ```bash
    npx tsc
    ```

2.  **Start the server:**
    After compilation, start the server with this command:
    ```bash
    node dist/server.js
    ```
    If successful, you will see the message: `🚀 Server running on port 5000`.

## 3. Creating a User Account

With the backend server running, you can create a new user by sending a `POST` request to the signup endpoint.

-   **URL:** `http://localhost:5000/api/auth/signup`
-   **Method:** `POST`
-   **Headers:** `Content-Type: application/json`
-   **Body:**

    ```json
    {
      "name": "DemoUser",
      "email": "demo@example.com",
      "password": "your_secure_password",
      "termsAccepted": true
    }
    ```

### Example using `curl`

You can use the `curl` command-line tool to create a user. Open a new terminal and run the following command:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "DemoUser", "email": "demo@example.com", "password": "DemoPassword123!", "termsAccepted": true}' http://localhost:5000/api/auth/signup
```

A successful request will return a `201` status code and a JSON object containing the new user's information.
