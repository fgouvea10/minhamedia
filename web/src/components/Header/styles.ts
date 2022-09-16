import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem;

  > div {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    cursor: pointer;
  }

  img {
    width: 120px;
    height: auto;
  }

  .vertical-divider {
    width: 1px;
    height: 1rem;
    background: ${props => props.theme.colors["gray.600"]};
  }
`;