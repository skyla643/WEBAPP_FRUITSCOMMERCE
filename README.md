# CA-WEBAPP
 web app beta version

http://localhost:3000 - when running!

3-13-25: Below is a summary of what we accomplished today and our plan for Friday:

⸻

Documentation Summary – Thursday

What We Accomplished Today:
	1.	Project Setup & Repository Management:
	•	Renamed the local folder from CA-WEBAPP to citrus-argentina-webapp to comply with npm naming conventions.
	•	Cloned the GitHub repository successfully.
	2.	Backend Setup:
	•	Initialization:
	•	Created the backend folder.
	•	Ran npm init -y to initialize the project.
	•	Installed Dependencies:
	•	Installed key packages: express, express-session, passport, body-parser, ws, multer, dotenv.
	•	Set up TypeScript with typescript, ts-node, and installed type definitions (@types/express, @types/express-session, @types/passport, @types/ws).
	•	Folder Structure & Server:
	•	Created a folder structure under backend/src/ with subdirectories for controllers, models, and routes.
	•	Created a minimal server.ts that configures Express with session management, Passport, and a WebSocket server.
	•	Environment Configuration:
	•	Added a .env file with configuration variables (e.g., PORT, SESSION_SECRET).
	•	Verification:
	•	Successfully ran the backend server using npx ts-node src/server.ts and verified it runs on port 3000.
	3.	Frontend Setup:
	•	Project Creation:
	•	Created a new React project for the frontend with TypeScript by running:

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
	•	Authentication: Create and implement routes/controllers for user registration and login.
	•	Products (Commodity Data): Implement routes/controllers to serve dummy product data.
	•	Orchard Monitoring: Set up endpoints to return dummy orchard sensor data.
	•	Supply Chain Tracking: Create endpoints for shipment and tracking data.
	•	Eco-Friendly Calculator: Build an endpoint to serve eco-friendly metrics.
	•	Blockchain Simulation: Create a dummy product verification endpoint.
	•	Testing:
	•	Use Postman or cURL to verify that each endpoint returns the expected data.

Frontend Integration:
	•	API Client:
	•	Create an apiClient.ts to handle fetch requests.
	•	Data-Fetching Components:
	•	Build or update the Seasonal Availability component to fetch product data from the backend.
	•	Develop additional components for Orchard Monitoring, Supply Chain Tracking, Eco Calculator, and Product Authentication.
	•	Real-Time Updates:
	•	Implement a simple React component to connect to the WebSocket server and display live updates.
	•	Routing & UI:
	•	If needed, set up routing (using React Router or similar) to manage different views.
	•	Start refining the UI with Tailwind CSS and shadcn/ui components.

Additional Tasks:
	•	Documentation:
	•	Update the README with instructions on running both the backend and frontend.
	•	Document any configuration or environment setup details.
	•	Testing & Iteration:
	•	Run end-to-end tests ensuring the frontend fetches data correctly from the backend.
	•	Address any bugs or integration issues.

⸻

This plan will set us up to integrate and expand our core features on Friday. Let me know if you need any more details or adjustments, and we can pick up with backend enhancements and frontend integration tomorrow!
