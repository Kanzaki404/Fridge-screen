
import './App.css';
import {useState} from 'react'
import Navigation from './components/navigation/navigation';
import MainContent from './components/MainContent/MainContent';

function App() {
  const [currentSection, setCurrentSection] = useState(1)
  //take out later

  const navOptions = [
    {
      id: 1,
      title: 'Supper Storage'
    },
    {
      id: 2,
      title: 'To buy'
    }
  ]
  return (
    <div className="App">
      <Navigation navOptions={navOptions} setCurrentSection={setCurrentSection}/>
     
      <MainContent currentSection={currentSection}/>
     
    </div>
  );
}

export default App;
