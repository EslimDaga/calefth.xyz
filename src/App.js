import styled from "styled-components";
import video from "./assets/video/pexels-pavel-danilyuk-7218609.mp4";
import "./assets/css/main.css";

const Video = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const Main = styled.div`
  background: rgba(158, 212, 243, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const Title = styled.h1`
  color: #f8cf2d;
  font-size: 55px;
  margin: 0;
  padding: 0;
  letter-spacing: 2px;
  text-shadow: 6px 6px 0px rgb(0 0 0 / 20%);
  font-family: "Pacifico";
`;

const App = () => {
  return (
    <>
      <Video autoPlay muted loop src={video}></Video>
      <Main>
        <div className="grid h-screen place-items-center">
          <Title>
            ❤️ Calefth Manasés 💙
          </Title>
        </div>
      </Main>
    </>
  );
}

export default App;
