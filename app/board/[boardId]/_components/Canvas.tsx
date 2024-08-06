"use client";

import { useCallback, useState } from "react";
import { Info } from "./Info";
import { Participants } from "./Participants";
import { Toolbar } from "./Toolbar";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import { useHistory, useCanUndo, useCanRedo, useMutation } from "@liveblocks/react/suspense";
import { CursorPresence } from "./CursorPresence";
import { pointerEventToCanvasPoint } from "@/lib/utils";

interface Props {
    boardId: string;
}

export const Canvas = ({
    boardId
}: Props) => {
    const [canvasState, setCanvasState] = useState<CanvasState>(
        {
            mode: CanvasMode.None
        }
    );

    const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();

    const onWheel = useCallback((e: React.WheelEvent) => {
        setCamera((prev) => ({
            x: prev.x - e.deltaX,
            y: prev.y - e.deltaY
        }))
    }, []);

    const onPointerMove = useMutation(({ setMyPresence }, e: React.PointerEvent) => {
        e.preventDefault();

        const current = pointerEventToCanvasPoint(e, camera);

        setMyPresence({ cursor: current })
    }, [])

    const onPointerLeave = useMutation(({ setMyPresence }) => {
        setMyPresence({ cursor: null })
    }, [])

    return (
        <main className="w-full h-full relative bg-neutral-100 touch-none">
            <Info boardId={boardId} />
            <Participants />
            <Toolbar
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                canUndo={canUndo}
                canRedo={canRedo}
                undo={history.undo}
                redo={history.redo}
            />
            <svg
                className="h-screen w-screen"
                onWheel={onWheel}
                onPointerMove={onPointerMove}
                onPointerLeave={onPointerLeave}
            >
                <g>
                    <CursorPresence />
                </g>
            </svg>
        </main>
    )
}
