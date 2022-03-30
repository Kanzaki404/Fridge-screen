import "./PrepMeals.css";
import OptionBar from "../../OptionBar/OptionBar";
import MealItem from "./mealItem/MealItem"

const PrepMeals = () => {
  const tempDate = new Date()
  const temp = [
    {
      supperName: 'Curry Rice',
      qnt: 4,
      made: `${tempDate.getDate()}/${tempDate.getMonth()+1}/${tempDate.getFullYear()}`
    },
    {
      supperName: 'Curry Rice',
      qnt: 4,
      made: `${tempDate.getDate()}/${tempDate.getMonth()+1}/${tempDate.getFullYear()}`
    },
    ,
    {
      supperName: 'Curry Rice',
      qnt: 4,
      made: `${tempDate.getDate()}/${tempDate.getMonth()+1}/${tempDate.getFullYear()}`
    }
  ]
  const supperList = temp.map(e => {
    return (
      <MealItem supper={e}/>
    )
  })


  return (
    <div className="prepMealsWrapper">
      <OptionBar/>
      <div className="scrollSupper">{supperList}</div>
     
      
    </div>
  );
};

export default PrepMeals;
