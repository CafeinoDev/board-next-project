"use client";

import { LiveblocksProvider, ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";

interface Props {
    children: React.ReactNode;
    roomId: string;
    fallback?: NonNullable<React.ReactNode>;
}

export const Room = ({ children, roomId, fallback }: Props) => {
    const apiKey = process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_API_KEY!

    return (
        <LiveblocksProvider
            // publicApiKey={apiKey}
            authEndpoint={ "/api/liveblocks-auth" }
        >
            <RoomProvider id={roomId} initialPresence={{}}>
                <ClientSideSuspense
                    fallback={fallback}
                >
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    )
}
