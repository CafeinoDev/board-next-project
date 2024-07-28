"use client";

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

export const OrgSidebar = () => {
    const searchParams = useSearchParams();
    const favorites = searchParams.get("favorites")

    return (
        <div className="hidden lg:flex flex-col space-y-6 w-52 pl-5 pt-5">
            <Link href="/" className="flex items-center gap-x-2">
                <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    height={60}
                    width={60}
                />
                <span className={
                    cn(
                        "font-semibold text-2xl",
                        font.className
                    )
                }>
                    Boarding
                </span>
            </Link>
            <OrganizationSwitcher
                hidePersonal
                appearance={{
                    elements: {
                        rootBox: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        },
                        organizationSwitcherTrigger: {
                            padding: "6px",
                            width: "100%",
                            borderRadius: "8px",
                            border: "1px solid #E5E7EB",
                            justifyContent: "space-between",
                            backgroundColor: "white",
                        },
                        organizationPreviewMainIdentifier: {
                            fontWeight: "600",
                        }
                    },
                }}
            />
            <div className="space-y-1 w-full">
                <Button
                    asChild
                    size="lg"
                    className="font-normal justify-start px-2 w-full"
                    variant={favorites ? "ghost" : "secondary"}
                >
                    <Link href="/">
                        <LayoutDashboard className="size-4 mr-2" />
                        Team boards
                    </Link>
                </Button>
                <Button
                    asChild
                    size="lg"
                    className="font-normal justify-start px-2 w-full"
                    variant={favorites ? "secondary" : "ghost"}
                >
                    <Link href={{
                        pathname: "/",
                        query: { favorites: true }
                    }}>
                        <Star className="size-4 mr-2" />
                        Favorite
                    </Link>
                </Button>
            </div>
        </div>
    )
}
