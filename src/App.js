import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [bio, setBio] = useState("");
  const [upperCaseBio, setUpperCaseBio] = useState("");

  const enteredText = (e) => {
    setBio(e.target.value);
  };

  const handleClick = () => {
    return setUpperCaseBio(bio.toUpperCase());
  };
  return (
    <div className="App container justify-content-center align-items-center ">
      <h1 className="row justify-content-center align-items-center">Enter Introduction/Bio</h1> <br/>
      <textarea className="row justify-content-center align-items-center w-100 " onChange={enteredText}></textarea> <br />
      <div className="text-center">
      <Button onClick={handleClick}>Change Text</Button> <br />
      </div>
      <p className="row justify-content-center align-items-center">{upperCaseBio}</p>
    </div>
  );
}

export default App;
