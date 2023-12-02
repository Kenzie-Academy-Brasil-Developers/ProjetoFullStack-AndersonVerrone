import styled from "styled-components";
import { IStyledButton } from "../interfaces/IStyledButton";

export const StyledButton = styled.button<IStyledButton>`
    width: ${({ width }) => (width ? `${width}px` : '100%')};
    height: ${({ height }) => (height ? `${height}px` : 'auto')};
    border-radius: ${({ radius }) => (radius ? `${radius}px` : '10px')};
    background-color: ${({ color }) => color || 'white'};
    color: ${({ colorText }) => colorText || 'var(--color-gray)'};
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    border: none;
    transition: all 0.6s ease-in-out;

    &:hover {
        background-color: ${({ colorhover }) => colorhover || "black"};
    }
`;