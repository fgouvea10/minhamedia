import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  overflow-x: hidden !important;
`;

export const HomeContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 4rem auto;

  @media (max-width: 1280px) {
    padding: 1rem;
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;

export const PresentationContainer = styled.div`
  h1 {
    display: block;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 129%;
    color: ${(props) => props.theme.colors.white};
  }

  p {
    display: block;
    margin-top: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 129%;
    color: ${(props) => props.theme.colors["gray.100"]};
  }

  @media (max-width: 1024px) {
    h1,
    p {
      text-align: center;
    }
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;

export const EvaluationTabsContainer = styled.div`
  width: 100%;
`;

export const EvaluationTabs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  button:first-child {
    border-radius: 5px 0px 0px 5px;
  }

  button:last-child {
    border-radius: 0px 5px 5px 0px;
  }
`;

export const EvaluationTab = styled.button`
  padding: 1rem 4rem;
  background: ${(props) => props.theme.colors["gray.800"]};
  border: 1px solid ${(props) => props.theme.colors["gray.600"]};
  color: ${(props) => props.theme.colors["gray.500"]};
  font-size: 1rem;
  font-family: "Lexend Peta";
  line-height: 129%;
  letter-spacing: -0.175em;

  &.active {
    background: ${(props) => props.theme.colors["blue.500"]};
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
    border: 1px solid ${(props) => props.theme.colors["blue.500"]};
  }

  @media (max-width: 640px) {
    padding: 1rem 2rem;
  }
`;

export const EvaluationInputContainer = styled.div`
  margin: 3rem 0;

  > div {
    position: relative;
    margin: 1rem 0;
    width: 100%;
  }

  > div input:focus + label,
  > div:valid + label {
    font-size: 11px;
    top: -5px;
  }

  > div input:focus + label {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors["gray.800"]} !important;
  }
`;

export const EvaluationLabel = styled.label`
  position: absolute;
  cursor: text;
  z-index: 2;
  top: 16px;
  left: 10px;
  font-size: 12px;
  background: transparent;
  transition: all 0.3s ease;
  font-family: "Lexend Peta";
  color: ${(props) => props.theme.colors["gray.600"]};
  outline: 0;
`;

export const EvaluationInput = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.colors["gray.800"]};
  border: 1px solid ${(props) => props.theme.colors["gray.600"]};
  transition: all 0.3s ease;
  padding: 0 1rem;
  font-family: "Lexend Peta";

  &:focus {
    border-color: ${(props) => props.theme.colors.white};
  }
`;

export const EvaluationButtonContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
  display: block;
`;

export const EvaluationButton = styled.button`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.colors["blue.500"]};
  color: ${(props) => props.theme.colors.white};
  font-family: "Lexend Peta";
  font-weight: 700;
  line-height: 129%;
  letter-spacing: -0.175em;
  text-transform: uppercase;
  font-size: 0.875rem;
  transition: all 0.3s;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ResultInfoText = styled.span`
  display: block;
  font-family: "Lexend Peta";
  font-weight: 400;
  line-height: 129%;
  text-align: center;
  letter-spacing: -0.175em;
  color: ${(props) => props.theme.colors["gray.100"]};
  text-transform: uppercase;
`;

export const ResultText = styled.strong`
  display: block;
  margin-top: 4px;
  font-family: "Lexend Peta";
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 129%;
  letter-spacing: -0.175em;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
`;

export const FooterText = styled.p`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);

  a {
    color: ${(props) => props.theme.colors["yellow.500"]};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
