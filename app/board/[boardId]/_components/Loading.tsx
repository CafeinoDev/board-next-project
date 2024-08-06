import { Loader } from 'lucide-react'
import React from 'react'
import { InfoSkeleton } from './Info'
import { ParticipantsSkeleton } from './Participants'
import { ToolbarSkeleton } from './Toolbar'

export const Loading = () => {
    return (
        <main className="w-full h-full relative bg-neutral-100 touch-none flex items-center justify-center">
            <Loader className='size-6 text-muted-foreground animate-spin' />
            <InfoSkeleton />
            <ParticipantsSkeleton />
            <ToolbarSkeleton />
        </main>
    )
}
