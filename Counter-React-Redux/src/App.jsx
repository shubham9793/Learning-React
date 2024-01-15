import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/privacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <center className="px-4 pt-5 my-5 text-center">
        <Container>
          <div className="col-lg-6 mx-auto">
            <Header />
            {privacy ? <PrivacyMessage /> : <DisplayCounter />}
            <Controls />
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
