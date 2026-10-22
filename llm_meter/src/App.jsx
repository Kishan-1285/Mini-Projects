import StatCard from "./StatCard"
function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold text-slate-900">
        Model-Meter
      </h1>

      <p className="mt-2 text-slate-500">
        LLM Usage & Cost Dashboard
      </p>
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Tokens" fields="12,234" />
        <StatCard title="API Cost" fields="$0.42" />
        <StatCard title="API Requests" fields="86" />
        <StatCard title="Connected LLMs" fields="1 / 5" />
      </div>
    </div>
  )
}
export default App