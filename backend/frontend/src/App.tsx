import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SeasonalAvailability from "./components/SeasonalAvailability";
import OrchardMonitoring from "./components/OrchardMonitoring";
import CommodityProfile from "./components/CommodityProfile";
import SupplyChainTracker from "./components/SupplyChainTracker";
import EcoCalculator from "./components/EcoCalculator";
import ProductAuthentication from "./components/ProductAuthentication";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Dashboard />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Future routes can be added here */}
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

<div>
  <Dashboard />
  <SeasonalAvailability />
  <OrchardMonitoring />
  <CommodityProfile />
  <SupplyChainTracker />
  <EcoCalculator />
  <ProductAuthentication />
</div>

export default App;