import StatCard from "./StatCard"
import { useEffect, useState } from "react";
function App() {

  const [backendStatus, setBackendStatus] = useState("Checking...");

  useEffect(() => {
    fetch("/api/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }
        return response.json();
      })
      .then(() => {
        setBackendStatus("Connected");
      })
      .catch(() => {
        setBackendStatus("Disconnected");
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-100 ">
          Model-Meter
        </h1>
        <div>
          <button className="border-2 border-gray-300 rounded-xl p-2 hover bg-blue-600 hover:bg-blue-500 text-white">
            Add Provider
          </button>
          <p className="mt-2 text-sm text-slate-400">
            Backend Status: {backendStatus}
          </p>
        </div>
      </div>
      <p className="mt-2 text-slate-500">
        LLM Usage & Cost Dashboard
      </p>
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Tokens" fields="12,234" details="Input + output tokens" />
        <StatCard title="API Cost" fields="$0.42" details="Tracked API spending" />
        <StatCard title="API Requests" fields="86" details="Total recorded requests" />
        <StatCard title="Connected LLMs" fields="1 / 5" details="Providers configured" />
      </div>
    </div>
  )
}
export default App