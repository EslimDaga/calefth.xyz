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
  background: rgba(24, 96, 179, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const Title = styled.h1`
  color: #F8CF2D;
  margin: 0;
  padding: 0;
  letter-spacing: 2px;
  text-shadow: 6px 6px 0px rgb(0 0 0 / 20%);
  font-family: "Pacifico";
`;

const Subtitle = styled.h2`
  color: #ffffff;
  letter-spacing: 1px;
  text-shadow: 6px 6px 0px rgb(0 0 0 / 20%);
  font-family: "Pacifico";
`;

const App = () => {

  const today = new Date();
  console.log(today);

  return (
    <>
      <Video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </Video>
      <Main>
        <div className="flex h-screen">
          <div className="m-auto">
            <Title className="text-center text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px]">
              ❤️ Calefth Manasés 💙
            </Title>
            <Subtitle className="text-center text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]">
              ¡He nacido! el 11/03/2017 00:00:00
            </Subtitle>
          </div>
        </div>
      </Main>
    </>
  );
}

export default App;
