import "./assets/css/app.css";
import SiderBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import ContentRowTop from "./components/ContentRowTop";

function App() {
  return (
    <div id="wrapper">
      <SiderBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <ContentRowTop />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
