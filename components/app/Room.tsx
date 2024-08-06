"use client";

import { LiveblocksProvider, ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";

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
                    cursor: null
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
