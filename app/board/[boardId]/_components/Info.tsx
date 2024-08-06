
export const Info = () => {
    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-3 py-1 h-12 flex items-center shadow-md">
            TODO: Board information here
        </div>
    )
}

Info.Skeleton = function InfoSkeleton() {
    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-3 py-1 h-12 flex items-center shadow-md w-[300px]" />
    )
}