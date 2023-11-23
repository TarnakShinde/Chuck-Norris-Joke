import chuck from "../assets/1.png";

import "./Container.css";

const Container = () => {
  const url = "https://api.chucknorris.io/jokes/random";

  const nextF = () => {
    const pdata = document.getElementsByClassName("data");
    fetch(url)
      .then((response) => response.json())
      .then((success) => addData(success))
      .catch((err) => console.log(err));
    function addData(success) {
      pdata[0].innerHTML = success.value;
    }
  };

  return (
    <div className="container">
      <div className="image">
        <img src={chuck} alt="" />
      </div>
      <div className="textBox">
        <div className="data">Press Next to Start</div>
        <button
          onClick={() => {
            nextF();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Container;
