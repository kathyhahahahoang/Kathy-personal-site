import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useEffect, useRef } from "react";

function App() {
  const cursor = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.current.style.left = x + "px";
      cursor.current.style.top = y + "px";
    });
  }, []);

  return (
    <BrowserRouter>
      <div ref={cursor} className={styles.cursor} />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
