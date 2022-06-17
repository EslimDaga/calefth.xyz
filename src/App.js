import styled from "styled-components";
import video from "./assets/video/pexels-pavel-danilyuk-7218609.mp4";
import "./assets/css/main.css";

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

const Main = styled.div`
  background: rgba(158, 212, 243, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const App = () => {
  return (
    <>
      <Video autoPlay muted loop src={video}></Video>
      <Main></Main>
    </>
  );
}

export default App;
