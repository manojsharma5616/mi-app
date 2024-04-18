import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import Slider from "./components/Slider";
import Offers from "./components/Offers.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./data/data.json";
import Heading from "./components/Heading.jsx";
import StarProduct from "./components/StarProduct.jsx";
import HotAccessroiesMenu from "./components/HotAccessroiesMenu.jsx";
import HotAccessories from "./components/HotAccessories.jsx";
import ProductReviews from "./components/ProductReviews.jsx";
import Videos from "./components/Videos.jsx";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import NavOptions from "./components/NavOptions.jsx";
function App() {
  return (
    <Router>
      <PreNavbar></PreNavbar>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<NavOptions miPhones={data.miPhones}></NavOptions>}
        ></Route>
        <Route
          path="/redmiphones"
          element={<NavOptions redmiPhones={data.redmiPhones}></NavOptions>}
        ></Route>
        <Route
          path="/tv"
          element={<NavOptions tv={data.tv}></NavOptions>}
        ></Route>
        <Route
          path="/laptops"
          element={<NavOptions laptop={data.laptop}></NavOptions>}
        ></Route>
        <Route
          path="/lifestyle"
          element={
            <NavOptions lifeStyle={data.fitnessAndLifeStyle}></NavOptions>
          }
        ></Route>
        <Route
          path="/home"
          element={<NavOptions home={data.home}></NavOptions>}
        ></Route>
        <Route
          path="/audio"
          element={<NavOptions audio={data.audio}></NavOptions>}
        ></Route>
        <Route
          path="/accessories"
          element={<NavOptions accessories={data.accessories}></NavOptions>}
        ></Route>
      </Routes>
      <Slider start={data.banner.start}></Slider>
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSROIES" />
      <HotAccessroiesMenu
        hotAccessories={data.hotAccessories}
        hotAccessoriesCover={data.hotAccessoriesCover}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>
        <Route
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>
        <Route
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        ></Route>
        <Route
          path="/lifeStyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        ></Route>
        <Route
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        ></Route>
      </Routes>
      <Heading text="PRODUCT REVIWES" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner.end} />
      <Footer footer={data.footer} />
    </Router>
  );
}
export default App;
