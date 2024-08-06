"use client";

import { Info } from "./Info";
import { Participants } from "./Participants";
import { Toolbar } from "./Toolbar";

interface Props {
    boardId: string;
}

export const Canvas = ({
    boardId
}: Props) => {
    return (
        <main className="w-full h-full relative bg-neutral-100 touch-none">
            <Info />
            <Participants />
            <Toolbar />
        </main>
    )
}
