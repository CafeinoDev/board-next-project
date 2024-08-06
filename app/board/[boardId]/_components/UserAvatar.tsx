import {
    Avatar,
    AvatarImage,
    AvatarFallback
} from "@/components/ui/avatar"
import { Hint } from "@/components/app/hint";

interface Props {
    src?: string;
    name?: string;
    fallback: string;
    borderColor?: string;
}

export const UserAvatar = ({
    fallback,
    borderColor,
    name,
    src
}: Props) => {
    return (
        <Hint
            label={name || "Anonymous"}
            side="bottom"
            sideOffset={18}
        >
            <Avatar
                className="size-8 border-2"
                style={{
                    borderColor
                }}
            >
                <AvatarImage src={src} />
                <AvatarFallback className="text-xs font-semibold">
                    {fallback}
                </AvatarFallback>
            </Avatar>
        </Hint>
    )
}
