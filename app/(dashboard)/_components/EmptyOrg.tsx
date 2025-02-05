import Image from "next/image"

import { CreateOrganization } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog"

export const EmptyOrg = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <Image
                src="/images/elements.svg"
                alt="Empty"
                height={300}
                width={300}
            />
            <h2 className="text-2xl font-semibold mt-6">
                Welcome to Boarding
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Create an organization to get started
            </p>
            <div className="mt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg">
                            Create organization
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="pt-0 border-none bg-transparent max-w-xl">
                        <CreateOrganization
                            routing="hash"
                        />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
