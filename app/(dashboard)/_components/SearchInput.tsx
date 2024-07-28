"use client";

import {
    ChangeEvent,
    useEffect,
    useState
} from "react"

import qs from "query-string";
import { Search } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState('');
    const debouncedValue = useDebounceValue(value, 500);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: "/",
            query: {
                search: debouncedValue[0]
            }
        }, {
            skipEmptyString: true, skipNull: true
        })

        router.push(url);
    }, [debouncedValue, router])

    return (
        <div className="w-full relative">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground size-4" />
            <Input
                className="w-full max-w-xl pl-9"
                placeholder="Search boards"
                type="search"
                onChange={handleChange}
            />
        </div>
    )
}
