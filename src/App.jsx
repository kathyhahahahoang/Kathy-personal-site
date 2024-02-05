import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Homepage from "./pages/Homepage";
import ClimateDeathWheel from "./pages/ClimateDeathWheel";
import TabiTomodachi from "./pages/TabiTomodachi";
import Auroramalet from "./pages/Auroramalet";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="climate-death-wheel" element={<ClimateDeathWheel />} />
        <Route path="tabi-tomodachi" element={<TabiTomodachi />} />
        <Route path="auroramalet" element={<Auroramalet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <>
<div className={styles.container}>
  <div className={styles["text-container"]}>
    <TextContainer />
  </div>
  <div className={styles["project-container"]}>
    <ProjectContainer />
  </div>
</div>
</> */
}
