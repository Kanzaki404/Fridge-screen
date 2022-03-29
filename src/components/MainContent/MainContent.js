import './MainContent.css';
import Dishes from './dishes/Dishes'
import PrepMeals from './prepMeals/PrepMeals'
import ToBuy from './toBuy/ToBuy'
const MainContent = ({currentSection}) => {
  const page = () => {
    switch(currentSection) {

      case 1:   return <PrepMeals />;
      case 2:   return <ToBuy />;
      case 3: return <Dishes />;

      default:      return <h1>No project match</h1>
    }
  }
  return <div className="mainContentWrapper">
    {page()}
  </div>;
};

export default MainContent;
