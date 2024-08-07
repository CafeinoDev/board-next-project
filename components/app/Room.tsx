"use client";

import { Layer, Color } from "@/types/canvas";
import { LiveList, LiveObject, LiveMap } from "@liveblocks/client";
import {
    LiveblocksProvider,
    ClientSideSuspense,
    RoomProvider,
} from "@liveblocks/react/suspense";

interface Props {
    children: React.ReactNode;
    roomId: string;
    fallback?: NonNullable<React.ReactNode>;
}

export const Room = ({ children, roomId, fallback }: Props) => {

    return (
        <LiveblocksProvider
            authEndpoint={"/api/liveblocks-auth"}
            throttle={16}
        >
            <RoomProvider
                id={roomId}
                initialPresence={{
                    cursor: null,
                    selection: []
                }}
                initialStorage={{
                    layers: new LiveMap<string, LiveObject<Layer>>(),
                    layerIds: new LiveList([])
                }}
            >
                <ClientSideSuspense
                    fallback={fallback}
                >
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    )
}
