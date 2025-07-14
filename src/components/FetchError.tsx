import { FetchErrorProps } from "@/types/index.types";


export default function FetchError({ title = "Uh Oh!", description = "Something went wrong", className }: FetchErrorProps) {

    return (
        <div data-testid="fetch-error" className={`${className ? className : ''} fetch-error`}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}