import './App.css';
import HomePage from './components/Pages/Home';
import ExploreFood from './components/Pages/explore';
import PhonePage from './components/Pages/Phonepage';
import ParaContent from './components/Pages/Para1';
import FoodComponent from './components/Pages/foodimg';
function App() {
  return (
    <div id='App'>
      <HomePage></HomePage>
      <ParaContent></ParaContent>
      <FoodComponent></FoodComponent>
      <ExploreFood></ExploreFood>
       <PhonePage></PhonePage>
    </div>
  );
}

export default App;
