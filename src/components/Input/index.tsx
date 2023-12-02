import { ForwardedRef, useState } from "react";
import { StyledInput } from "./styles";
import { IInputProps } from "../../interfaces/IInputProps";
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

export const Input = ({ label, id, placeholder, password, helper, ...rest }: IInputProps & { ref?: ForwardedRef<HTMLInputElement> }) => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <StyledInput>
            {label && (<label htmlFor={id}>{label}</label>)}
            <div>
                <input autoComplete="off" type={password ? (isHidden ? "password" : "text") : "text"} id={id} placeholder={placeholder} ref={rest.ref} {...rest} />
                {password && (
                    isHidden ? (
                        <FaRegEyeSlash size={19} color={"var(--color-gray-200)"} onClick={() => setIsHidden(false)} />
                    ) : (
                        <FaRegEye size={19} color={"var(--color-gray-200)"} onClick={() => setIsHidden(true)} />
                    )
                )}
            </div>
            {helper && <span>{helper}</span>}
        </StyledInput>
    );
};