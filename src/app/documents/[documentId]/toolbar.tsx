"use client";

import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { LucideIcon, Undo2 } from "lucide-react";

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

const Toolbar = () => {
  const { editor } = useEditorStore();

  console.log("Toolbar", editor);

  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2,
        onClick: () => editor?.chain().focus().undo().run(),
      },
    ],
  ];
  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Toolbar;
