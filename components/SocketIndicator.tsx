"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected)
    return (
      <Badge variant="outline" className="bg-yellow-200 text-black dark:bg-yellow-600 dark:text-white border-none">
        Fallback: Polling every 1s
      </Badge>
    );

  return (
    <Badge variant="outline" className="bg-emerald-300 text-black dark:bg-emerald-600 dark:text-white border-none">
      Live: Real-time updates
    </Badge>
  );
};

export default SocketIndicator;
