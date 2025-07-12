
import Image from "next/image";
import { moreVert } from "@/assets/icons";
import { USER_OPTIONS } from "@/assets/data/user";
import { UserOptionsProps } from "@/types/index.types";



export default function UserOptions({ openOptionsModal, handleModalClick, id, idOfUserOptionToShow, optionsContainerRef }: UserOptionsProps) {
    return (
        <span className="button-and-options-container">
            <button onClick={() => openOptionsModal(id)} className="more-btn">
                <Image src={moreVert} className="more-icon" alt="More icon" width={20} height={20} />
            </button>

            <div onClick={handleModalClick} className={`options-container ${idOfUserOptionToShow == id ? 'show-menu' : 'hide'}`}>
                <ul ref={optionsContainerRef}>
                    {
                        USER_OPTIONS.map(({ title, icon }) => (
                            <li key={title}>
                                <button className="option">
                                    <Image src={icon} alt={`${title} icon`} width={14} height={14} className="option-icon" />
                                    <span className="font-work-sans">{title}</span>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </span>
    )
}