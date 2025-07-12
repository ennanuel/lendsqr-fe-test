import { HeadingProps } from "@/types/index.types";


export default function Heading({ children }: HeadingProps) {
    return (
        <h2 className="heading">{children}</h2>
    )
}