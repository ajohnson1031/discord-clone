import { ChannelType } from "@prisma/client";
import { Hash, Mic, Video } from "lucide-react";

interface ChatWelcomeProps {
  type: ChannelType | "conversation";
  name: string;
}

const icon = (type: string, className: string) => {
  const iconMap: Record<string, JSX.Element> = {
    [ChannelType.TEXT]: <Hash className={className} />,
    [ChannelType.AUDIO]: <Mic className={className} />,
    [ChannelType.VIDEO]: <Video className={className} />,
  };
  return iconMap[type];
};

const ChatWelcome = ({ type, name }: ChatWelcomeProps) => {
  return (
    <div className="space-y-2 px-4 mb-4">
      {type !== "conversation" && (
        <div className="h-[75px] w-[75px] rounded-full bg-zinc-500 dark:bg-zinc-700 flex items-center justify-center">
          {type === ChannelType.TEXT && <Hash className="h-12 w-12 text-white" />}
          {type === ChannelType.AUDIO && <Mic className="h-12 w-12 text-white" />}
          {type === ChannelType.VIDEO && <Video className="h-12 w-12 text-white" />}
        </div>
      )}
      <p className="text-xl md:text-3xl font-bold">
        {type !== "conversation" ? (
          <span className="flex">
            Welcome to&nbsp;{icon(type, "relative mr-1 top-2 h-6.5 w-6.5")} {name}
          </span>
        ) : (
          <span>{name}</span>
        )}
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        {type !== "conversation" ? (
          <span className="flex">
            This is the start of the&nbsp;{icon(type, "relative mr-1 top-1 h-3.5 w-3.5")}
            {name} channel
          </span>
        ) : (
          `This is the start of your conversation with ${name}`
        )}
      </p>
    </div>
  );
};

export default ChatWelcome;
