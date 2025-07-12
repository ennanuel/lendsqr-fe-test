
import { FilterInputProps } from "@/types/index.types";

import Image from "next/image";


export default function FilterInput({ inputId, inputLabel, inputType, placeholder, icon, includeButton }: FilterInputProps) {

    return (
        <div className="filter-input">
            <label htmlFor={inputId}>{inputLabel}</label>
            <div className="input">
                <input className="font-work-sans" type={inputType} placeholder={placeholder} />
                {
                    includeButton ?
                        <button className="input-icon">
                            {icon ? <Image src={icon} width={16} height={16} alt="Input icon" /> : null}
                        </button> :
                        null
                }
            </div>
        </div>
    )
}