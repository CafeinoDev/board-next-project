import { Canvas } from "./_components/Canvas";
import { Room } from "@/components/app/Room";
import { Loading } from "./_components/Loading";

interface Props {
    params: {
        boardId: string
    }
}

export default function BoardPage({
    params
}: Props) {

    return (
        <Room
            roomId={params.boardId}
            fallback={<Loading />}
        >
            <Canvas boardId={params.boardId} />
        </Room>
    );
}