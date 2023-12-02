import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;

    > div {
        display: flex;
        align-items: center;
        background: var(--color-gray-900);
        padding: 1rem 3rem 2.5rem;
        border-radius: 0 0 35px 35px;
        box-shadow: 1px 1px 5px rgba(250, 250, 250, 0.1);

        > img:first-child {
            width: 3.5rem;
        }

        > img:last-child {
            width: 10rem;
        }
    }
`