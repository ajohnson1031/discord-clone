"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import ActionTooltip from "../ActionTooltip";

interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();

  const onClick = () => router.push(`/servers/${id}`);

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button onClick={onClick} className="group relative flex items-center">
        <div
          className={cn("absolute left-0 bg-primary rounded-r-full transition-all w-[4px] h-2", { "group-hover:h-5": params?.serverId !== id, "h-9": params?.serverId === id })}
        />
        <div
          className={cn("relative group flex mx-3 h-12 w-12 rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden", {
            "bg-primary/10 text-primary rounded-[16px]": params?.serverId === id,
          })}
        >
          <Image fill src={imageUrl} alt="Channel" />
        </div>
      </button>
    </ActionTooltip>
  );
};

export default NavigationItem;
