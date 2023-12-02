import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  > label {
    font-size: 1.25rem;
    color: var(--color-gray-200);
    margin-bottom: 0.5rem;
  }

  > div {
    position: relative;
    width: 100%;

    > input {
      width: 100%;
      height: 2.5rem;
      padding: 0 2rem 0 1rem;
      border-radius: 5px;
      border: none;
      background-color: var(--color-gray-800);
      font-size: 1.25rem;
      outline: none;
    }

    > svg {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  > span {
    color: var(--color-red);
    font-size: 0.6rem;
    font-weight: 300;
    text-transform: uppercase;
  }
`;
