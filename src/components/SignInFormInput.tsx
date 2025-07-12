import { InputProps } from "@/types/index.types";


export default function Input({ inputType, placeholder, buttonText, buttonAction, includeButton }: InputProps) {

    return (
        <div className="form-input">
            <input
                type={inputType}
                placeholder={placeholder}
                className="font-avenir"
            />
            {
                includeButton ?
                <button onClick={buttonAction} type="button">
                    <span className="font-avenir">{buttonText}</span>
                </button> :
                null
            }
        </div>
    )
}