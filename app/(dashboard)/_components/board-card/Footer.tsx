import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

interface Props {
    title: string;
    authorLabel: string;
    createdAtLabel: string;
    isFavorite: boolean;
    onClick: () => void;
    disabled: boolean;
}

export const Footer = ({
    authorLabel,
    createdAtLabel,
    disabled,
    isFavorite,
    onClick,
    title,
}: Props) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        e.preventDefault();

        onClick()
    }

    return (
        <div className="relative bg-white p-3">
            <p className="text-xs truncate max-w-[calc(100%-20px)]">
                {title}
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-muted-foreground">
                {authorLabel}, {createdAtLabel}
            </p>
            <button
                disabled={disabled}
                onClick={handleClick}
                className={
                    cn(
                        "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
                        disabled && "cursor-not-allowed opacity-75"
                    )
                }
            >
                <Star
                    className={
                        cn(
                            "size-4",
                            isFavorite && "fill-blue-600 text-blue-600"
                        )
                    }
                />
            </button>
        </div>
    )
}
