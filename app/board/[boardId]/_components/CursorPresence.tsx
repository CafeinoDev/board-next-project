"use client";

import { useOthersConnectionIds } from "@liveblocks/react/suspense";
import { memo } from "react";
import { Cursor } from "./Cursor";

const Cursors = () => {
    const ids = useOthersConnectionIds();

    return (
        <>
            {
                ids.map((connectionId) => (
                    <Cursor
                        key={connectionId}
                        connectionId={connectionId}
                    />
                ))
            }
        </>
    )
}

export const CursorPresence = memo(() => {
    return (
        <>
            <Cursors />
        </>
    )
})

CursorPresence.displayName = "CursorPresence"