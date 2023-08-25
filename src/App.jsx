import Footer from "./components/footer";
import Header from "./components/header";
import AboutUs from "./screens/aboutUs";
import Banner from "./screens/banner";
import Capsule from "./screens/capsule";
import Categories from "./screens/categories";
import Kratom from "./screens/kratom";

function App() {
  return (
    <>
      <Header />

      <Banner />
      <AboutUs />
      <Categories />
      <Capsule />
      <Kratom />

      <Footer />
    </>
  );
}

export default App;
