import Header from "./components/header/Header";
import Content from "./components/main/Content";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div
      style={{
        backgroundColor: "gray",
        width: "100%",
        height: "200vh",
        overflowX: "hidden",
      }}
    >
      <Header />
      <Content />
    </div>
  );
}

export default App;
