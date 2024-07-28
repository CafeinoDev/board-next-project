import React from 'react'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"

interface Props {
    label: string;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
    duration?: number;
}

export const Hint = ({
    children,
    label,
    align,
    side,
    alignOffset,
    sideOffset,
    duration = 100
}: Props) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={duration}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    className='text-white bg-black border-black'
                    side={side}
                    align={align}
                    alignOffset={alignOffset}
                    sideOffset={sideOffset}
                >
                    <p className='font-semibold capitalize'>
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
