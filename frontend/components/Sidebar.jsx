export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex flex-col p-6">
      <h1 className="text-3xl font-bold mb-8 text-purple-400">
        AI Agent
      </h1>

      <button className="bg-purple-500 hover:bg-purple-600 rounded-xl py-3 mb-6">
        + New Project
      </button>

      <div className="space-y-4 text-gray-300">
        <p className="hover:text-white cursor-pointer">Dashboard</p>
        <p className="hover:text-white cursor-pointer">Templates</p>
        <p className="hover:text-white cursor-pointer">Agent History</p>
        <p className="hover:text-white cursor-pointer">Settings</p>
      </div>

      <div className="mt-auto text-sm text-gray-500">
        AI Website Architect v1.0
      </div>
    </div>
  );
}