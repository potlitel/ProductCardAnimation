import Main from "./components/Main";
//import "./code.js"

const susi = (event) => {
  let card;
  card = event.currentTarget;
  //console.log(event.currentTarget.id);
  card.classList.add("selected");
};

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
