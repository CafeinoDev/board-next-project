"use client";

import { LucideIcon } from "lucide-react";
import { Hint } from "@/components/app/hint";
import { Button } from "@/components/ui/button";

interface Props {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
    isDisabled?: boolean;
}


export const ToolButton = ({
    icon: Icon,
    label,
    onClick,
    isActive,
    isDisabled
}: Props) => {
    return (
        <Hint label={label} side="right" sideOffset={14}>
            <Button
                disabled={isDisabled}
                onClick={onClick}
                size="icon"
                variant={
                    isActive ? "boardActive" : "board"
                }
            >
                <Icon />
            </Button>
        </Hint>
    )
}
