import { List } from "./List"
import { NewButton } from "./NewButton"

export const Sidebar = () => {
    return (
        <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-16 p-3 flex flex-col gap-y-4 text-white">
            <List />
            <NewButton />
        </aside>
    )
}