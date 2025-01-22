import { useState, useEffect } from "react";
import { Users } from "lucide-react";

const ServerStatus = () => {
  const [status, setStatus] = useState({
    online: true,
    players: 42,
    maxPlayers: 100,
  });

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 border border-gray-200 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${status.online ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="font-medium text-gray-700">
            {status.online ? 'Online' : 'Offline'}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Users size={20} className="text-primary" />
          <span className="font-medium text-gray-700">
            {status.players}/{status.maxPlayers}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServerStatus;