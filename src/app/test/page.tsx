import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingDashBoard() {
    return (
        <div className="absolute flex-col items-center pl-36 top-1/3 h-96 w-96">
            <div className="object-center">
                <Skeleton className="w-full h-20 mt-5" />
                <Skeleton className="w-full h-20 mt-5" />
                <Skeleton className="w-full h-20 mt-5" />

            </div>

        </div>
    )
}