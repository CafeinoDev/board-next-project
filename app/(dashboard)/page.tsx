"use client";

import { BoardList } from "./_components/BoardList";
import { EmptyOrg } from "./_components/EmptyOrg";
import { useOrganization } from '@clerk/nextjs';

interface Props {
    searchParams: {
        search?: string;
        favorites?: string;
    }
};

export default function Home({ searchParams }: Props) {
    const { organization } = useOrganization();

    return (
        <div className="flex-1 h-[calc(100%-80px)] px-5">
            {
                !organization
                    ? <EmptyOrg />
                    : <BoardList
                        orgId={organization.id}
                        query={searchParams}
                    />
            }

        </div>
    );
}
