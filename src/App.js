
import './App.css';
import {useState} from 'react'
import Navigation from './components/navigation/navigation';
import MainContent from './components/MainContent/MainContent';
import OptionBar from './components/optionBar/OptionBar'
function App() {
  const [currentSection, setCurrentSection] = useState(1)
  //take out later

  const navOptions = [
    {
      id: 1,
      title: 'Prep Food'
    },
    {
      id: 2,
      title: 'To buy'
    },
    {
      id: 3,
      title: 'Dishes'
    }
  ]
  return (
    <div className="App">
      <Navigation navOptions={navOptions} setCurrentSection={setCurrentSection}/>
      <OptionBar currentSection={currentSection}/>
      <MainContent currentSection={currentSection}/>
     
    </div>
  );
}

export default App;
