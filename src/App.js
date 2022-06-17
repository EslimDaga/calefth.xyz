import Video from "./assets/video/pexels-pavel-danilyuk-7218609.mp4";
import "./assets/css/main.css";

function App() {
  return <video autoPlay muted loop src={Video} className="main-video"></video>;
}

export default App;
