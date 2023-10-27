import './App.css';
import HomePage from './components/Pages/Home';
import ExploreFood from './components/Pages/explore';
import PhonePage from './components/Pages/Phonepage';
import ParaContent from './components/Pages/Para1';
import FoodComponent from './components/Pages/foodimg';
import BookingComp from './components/Pages/bookingpage';
import Footer from './components/Pages/footer';
import ParaContenttwo from './components/Pages/para2';
import DeliveryComp from './components/Pages/deliverypage';
function App() {
  return (
    <div id='App'>
      <HomePage></HomePage>
      <ParaContent></ParaContent>
      <FoodComponent></FoodComponent>
      <BookingComp></BookingComp>
      <ParaContenttwo></ParaContenttwo>
      <DeliveryComp></DeliveryComp>
      <ExploreFood></ExploreFood>
       <PhonePage></PhonePage>
       <Footer></Footer>
    </div>
  );
}

export default App;
