import "../styles/InfoPanel.css";

function InfoPanel({ currentNode, onStartQuiz, quizMessage }) {
  return (
    <div className="infoPanel">
      <h1>{currentNode.title}</h1>

      <p>{currentNode.description}</p>

      {quizMessage && <p className="quizMessage">{quizMessage}</p>}

      {currentNode.type === "lesson" && (
        <>
          <h3>Questions</h3>
          <p>{currentNode.questions}</p>
        </>
      )}

      {currentNode.type === "folder" && (
        <button className="randomButton" onClick={onStartQuiz}>
          🎲 Random Test
        </button>
      )}

      {currentNode.type === "lesson" && (
        <button className="startButton" onClick={onStartQuiz}>
          ▶ Start Test
        </button>
      )}

      {currentNode.type === "exam" && (
        <button className="examButton" onClick={onStartQuiz}>
          ▶ Start Exam
        </button>
      )}
    </div>
  );
}

export default InfoPanel;
