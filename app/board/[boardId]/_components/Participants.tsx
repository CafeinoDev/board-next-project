"use client";

import {
    useOthers, useOthersMapped, useSelf
} from "@liveblocks/react/suspense"
import { UserAvatar } from './UserAvatar';
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_USERS = 2;

export const Participants = () => {
    const users = useOthers();
    const currentUser = useSelf();
    const hasMoreUsers = users.length > MAX_SHOWN_USERS;

    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
            <div className="flex gap-x-2">
                {
                    users.slice(0, MAX_SHOWN_USERS)
                        .map(({
                            connectionId,
                            info
                        }) => {
                            return (
                                <UserAvatar
                                    key={connectionId}
                                    src={info?.picture}
                                    name={info?.name}
                                    fallback={info?.name?.[0] || "A"}
                                    borderColor={connectionIdToColor(connectionId)}
                                />
                            )
                        })
                }

                {
                    currentUser && (
                        <UserAvatar
                            borderColor={connectionIdToColor(currentUser?.connectionId)}
                            src={currentUser?.info.picture}
                            name={"You"}
                            fallback={currentUser?.info.name?.[0] || "A"}
                        />
                    )
                }
                {
                    hasMoreUsers && (
                        <UserAvatar
                            name={`${users.length - MAX_SHOWN_USERS} more`}
                            fallback={`+${users.length - MAX_SHOWN_USERS}`}
                        />
                    )
                }
            </div>
        </div>
    )
}

export const ParticipantsSkeleton = () => {
    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[200px]" />
    )
}