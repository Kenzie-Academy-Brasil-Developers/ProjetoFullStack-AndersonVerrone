import styled from "styled-components";

export const StyledFooter = styled.footer`
    background: var(--color-gray-900);
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;

    >img {
        width: 2rem;
    }

    >p {
        font-size: 0.6rem;
    }
`