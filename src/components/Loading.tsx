import { LoadingProps } from "@/types/index.types";


export default function Loading({ className }: LoadingProps) {

    return (
        <div className={`${className ? className : ''} users-loading`}>
            <span className="loading-icon"></span>
            <span className="text">Please wait..</span>
        </div>
    )
};