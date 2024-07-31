"use client"

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface Props {
    orgId: string;
    disabled?: boolean;
}

export const NewBoardButton = ({
    orgId,
    disabled
}: Props) => {
    const { mutate, pending } = useApiMutation(api.board.create);

    const onClick = () => {
        mutate({
            orgId,
            title: "Untitled"
        })
            .then((id) => {
                toast.success("Board created");
                // TODO: Redirect to created board
            })
            .catch(() => toast.error("Error while creating board"))
    }

    return (
        <button
            disabled={pending || disabled}
            onClick={onClick}
            className={
                cn(
                    "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center",
                    (pending || disabled) && "opacity-75 cursor-not-allowed hover:bg-blue-600"
                )
            }
        >
            <div />
            <Plus className="size-12 text-white stroke-1" />
            <p className=" text-white">
                New board
            </p>
        </button>
    )
}