3-13-25: Citrus Argentina Web App Beta Version

This repository contains the beta version of the Citrus Argentina Agricultural Technology Platform. The project is split into two main parts:
	•	Backend: An Express server written in TypeScript, handling API endpoints, session management, and real-time WebSocket updates.
	•	Frontend: A React application (using TypeScript) built with Create React App, integrated with React Query and styled using Tailwind CSS and shadcn/ui.

Local URLs:
	•	Backend: http://localhost:3000
	•	Frontend: http://localhost:3000
(Note: The development build is not optimized. Use npm run build for a production build.)

⸻

Documentation Summary – Thursday, March 13, 2025

What We Accomplished Today:
	1.	Project Setup & Repository Management:
	•	Renamed the local folder from CA-WEBAPP to citrus-argentina-webapp to comply with npm naming conventions.
	•	Successfully cloned the private GitHub repository.
	2.	Backend Setup:
	•	Initialization:
	•	Created the backend folder.
	•	Ran npm init -y to initialize the project.
	•	Dependency Installation:
	•	Installed key packages: express, express-session, passport, body-parser, ws, multer, and dotenv.
	•	Set up TypeScript with typescript, ts-node, and installed type definitions (@types/express, @types/express-session, @types/passport, @types/ws).
	•	Folder Structure & Server:
	•	Created the folder structure under backend/src/ with subdirectories for controllers, models, and routes.
	•	Developed a minimal server.ts that configures Express with session management, Passport, and a WebSocket server.
	•	Environment Configuration:
	•	Added a .env file with configuration variables (e.g., PORT, SESSION_SECRET).
	•	Verification:
	•	Successfully ran the backend server using npx ts-node src/server.ts and verified it runs on port 3000.
	3.	Frontend Setup:
	•	Project Creation:
	•	Created a new React project for the frontend with TypeScript using:

npx create-react-app frontend --template typescript


	•	Running the App:
	•	Navigated into the frontend folder and started the app with npm start.
	•	Confirmed that the React app compiled successfully and is accessible at http://localhost:3000.

	4.	Visual Studio Code CLI Setup:
	•	Installed VS Code via Homebrew.
	•	Configured the code command by adding /opt/homebrew/bin to the PATH.
	•	Verified that running code . opens the project in VS Code.

⸻

Plan for Friday

Backend Enhancements:
	•	Expand API Endpoints:
	•	Authentication: Implement routes/controllers for user registration and login.
	•	Products (Commodity Data): Create routes/controllers to serve dummy product data.
	•	Orchard Monitoring: Set up endpoints to return dummy orchard sensor data.
	•	Supply Chain Tracking: Develop endpoints for shipment and tracking data.
	•	Eco-Friendly Calculator: Build an endpoint to serve eco-friendly metrics.
	•	Blockchain Simulation: Create a dummy product verification endpoint.
	•	Testing:
	•	Use Postman or cURL to verify that each endpoint returns the expected data.

Frontend Integration:
	•	API Client:
	•	Create an apiClient.ts to handle fetch requests.
	•	Data-Fetching Components:
	•	Update the Seasonal Availability component to fetch product data from the backend.
	•	Develop additional components for Orchard Monitoring, Supply Chain Tracking, Eco Calculator, and Product Authentication.
	•	Real-Time Updates:
	•	Implement a React component that connects to the WebSocket server and displays live updates.
	•	Routing & UI Enhancements:
	•	If needed, set up routing (using React Router or a similar solution) to manage different views.
	•	Begin refining the UI with Tailwind CSS and shadcn/ui components.

Additional Tasks:
	•	Documentation:
	•	Update this README with instructions on running both the backend and frontend.
	•	Document configuration and environment setup details.
	•	Testing & Iteration:
	•	Run end-to-end tests to ensure the frontend correctly fetches data from the backend.
	•	Address any bugs or integration issues that arise.

⸻ 
