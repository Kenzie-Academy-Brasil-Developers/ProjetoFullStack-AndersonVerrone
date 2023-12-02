import styled, { css } from "styled-components";
import { IStyledTypography } from "../interfaces/IStyledTypography";

export const StyledTypography = styled.p<IStyledTypography>`
    color: ${({ color }) => color || 'var(--color-gray)'};

    ${({ type }) => {
        if (type === "title") {
            return css`
                font-family: var(--font-details);
                font-size: 2rem;
                text-transform: uppercase;
            `;
        } else if (type === "menu") {
            return css`
                font-family: var(--font-details);
                font-size: 1.25rem;
            `;
        } else if (type === "highlight") {
            return css`
                font-size: 1.5rem;
                font-weight: 700;
            `;
        } else if (type === "footer") {
            return css`
                font-family: var(--font-details);
                font-size: 2rem;
            `;
        } else if (type === "detail") {
            return css`
                font-size: 1rem;
            `;
        } else {
            return css`
                font-size: 1.25rem;
                font-weight: 700;
            `;
        }
    }}

    ${({ weight }) => {
        return css`
            font-weight: ${weight};
        `;
    }}
`;