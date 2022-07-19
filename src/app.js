import Header from "./components/header/header";
import Section from "./components/section/section";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="body-container">
      <div className="container">
        <Header></Header>
        <Section></Section>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
