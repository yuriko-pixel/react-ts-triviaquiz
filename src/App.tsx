import "./styles.css";
import React, { useEffect, useState } from "react";
import CategoryChoose from "./components/CategoryChoose";
import DifficultyChoose from "./components/DifficultyChoose";
import ChooseQuiz from "./components/ChooseQuiz";
import Quiz from "./components/Quiz";
import styled from "styled-components";

const AppContainer = styled.div`
  background: #888afb;
  margin: 0;
  font-family: "Trebuchet MS";
  text-align: center;
  color: white;
`;

export default function App() {
  const [categoryChosen, setCategoryChosen]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState<number>(0);
  const [difficultyChosen, setDifficultyChosen]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");
  return (
    <AppContainer>
      <h1>Quizz App</h1>
      {difficultyChosen.length === 0 ? (
        <ChooseQuiz
          categoryChosen={categoryChosen}
          setCategoryChosen={setCategoryChosen}
          difficultyChosen={difficultyChosen}
          setDifficultyChosen={setDifficultyChosen}
        />
      ) : (
        <Quiz
          categoryChosen={categoryChosen}
          difficultyChosen={difficultyChosen}
        />
      )}
    </AppContainer>
  );
}
