import { UserProps } from "@/types/index.types";

export default function UserInformations({ user }: UserProps) {
    if(!user) return null;

    return (
        <section className="user-details block">
            <ul>
                {
                    user.details.map(([heading, informations, gridColumns]) => (
                        <li key={heading} className="user-information-container">
                            <h3>{heading}</h3>
                            <ul className={`user-information ${gridColumns}`}>
                                {
                                    informations?.map(([title, value]) => (
                                        <li key={title}>
                                            <h4>{title}</h4>
                                            <p>{value}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}