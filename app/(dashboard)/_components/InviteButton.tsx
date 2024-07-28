import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const InviteButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus className="size-4 mr-2" />
                    Invite
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-4xl">
                <OrganizationProfile
                    routing="hash"
                />
            </DialogContent>
        </Dialog>
    )
}
