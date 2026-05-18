import Sidebar from "../components/Sidebar";
import ChatBuilder from "../components/ChatBuilder";
import PreviewPanel from "../components/PreviewPanel";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      
      {/* Left Sidebar */}
      <Sidebar />

      {/* Center Chat Builder */}
      <div className="w-[35%] border-r bg-white">
        <ChatBuilder />
      </div>

      {/* Right Preview Panel */}
      <div className="flex-1">
        <PreviewPanel />
      </div>
    </div>
  );
}