import "./ToBuy.css";
import OptionBar from "../../OptionBar/OptionBar";
import ShoppingList from "./ShoppingList/ShoppingList"

const ToBuy = () => { 

  const temp = [
    {
      item: 'Toilet Paper'
    },
    {
      item: 'Salt'
    },
    {
      item: 'Coffee'
    },
    {
      item: 'Tomatoes'
    },
    {
      item: 'Coffee Filter'
    }
  ]

  const shopItems = temp.map((e, index) => {
    return ( 
      <ShoppingList shopItem={e} listNum={index}/>
    )
  })
  return (
    <div className="toBuyWrapper">
     <OptionBar/>
    {shopItems}
      
    </div>
  );
};

export default ToBuy;
