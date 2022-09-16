import {
  EvaluationTabsContainer,
  EvaluationTabs,
  EvaluationTab,
  HomeContainer,
  HomeContent,
  PresentationContainer,
  FlexContainer,
  EvaluationInputContainer,
  EvaluationInput,
  EvaluationLabel,
  EvaluationButtonContainer,
  EvaluationButton,
  ResultInfoText,
  ResultText,
  FooterText,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <PresentationContainer>
          <h1>Calcule a sua nota do bloco</h1>
          <p>Siga os passos do site e veja a sua nota para este bloco</p>
        </PresentationContainer>

        <FlexContainer>
          <div>
            <EvaluationTabsContainer>
              <EvaluationTabs>
                <EvaluationTab className="active">A1</EvaluationTab>
                <EvaluationTab>A2</EvaluationTab>
                <EvaluationTab>A3</EvaluationTab>
                <EvaluationTab>A4</EvaluationTab>
              </EvaluationTabs>
            </EvaluationTabsContainer>

            <EvaluationInputContainer>
              <div>
                <EvaluationInput placeholder=" " />
                <EvaluationLabel>AVA1</EvaluationLabel>
              </div>
              <div>
                <EvaluationInput placeholder=" " />
                <EvaluationLabel>AVA2</EvaluationLabel>
              </div>
            </EvaluationInputContainer>
            <EvaluationButtonContainer>
              <EvaluationButton disabled>calcular</EvaluationButton>
            </EvaluationButtonContainer>
          </div>
          <div>
            <ResultInfoText>seu resultado</ResultInfoText>
            <ResultText>9.8 APROVADO</ResultText>
          </div>
        </FlexContainer>
        <FooterText>
          Feito com ❤ por <a href="https://felipegouvea.com">gouvea</a>
        </FooterText>
      </HomeContent>
    </HomeContainer>
  );
}
