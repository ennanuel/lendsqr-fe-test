
import { UserDetailsProps } from "@/types/index.types";

import Image from "next/image";
import { useMemo } from "react";

import { generateUserTierStars } from "@/helpers";
import { user1 } from "@/assets/icons";

export default function UserDetails({ user }: UserDetailsProps) {
    const tierStarImages = useMemo(() => generateUserTierStars(user.userTier), [user]);

    return (
        <div className="user-info">
            <div className="user-profile">
                <span className="profile-picture">
                    <Image src={user1} alt="User icon" width={40} height={40} className="user-icon" />
                </span>
                <div className="user-identification">
                    <p className="user-name">{user.firstName} {user.lastName}</p>
                    <p className="user-id">{user._id.slice(0, 11)}</p>
                </div>
            </div>
            <div className="user-tier">
                <p className="tier-title">User&apos;s Tier</p>
                <div className="stars">
                    {
                        tierStarImages.map((image, index) => (
                            <Image key={index} src={image} width={16} height={14} alt="Star icon" className="star" />
                        ))
                    }
                </div>
            </div>
            <div className="user-account-details">
                <p className="account-balance">{user.balance}</p>
                <p className="bank-details">
                    <span className="account-number">{user.accountNumber}</span>
                    <span>/</span>
                    <span className="bank-name">{user.bank}</span>
                </p>
            </div>
        </div>
    )
};