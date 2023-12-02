import styled from "styled-components";

export const StyledFormLogin = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-gray-900);
  padding: 2rem 1.5rem;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(250, 250, 250, 0.1);
  width: clamp(16.25rem, 30vw, 30rem);

  > p:first-of-type {
    margin-bottom: 2rem;
  }

  > button:first-of-type,
  > p:last-of-type,
  > div {
    margin-bottom: 1.3rem;
  }
`;
