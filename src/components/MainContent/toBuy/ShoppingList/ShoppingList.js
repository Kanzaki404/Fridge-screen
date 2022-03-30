import "./ShoppingList.css";

const ShoppingList = ({shopItem,listNum}) => { 
  return (
    <div className="shoppingListWrapper">
        <span>{listNum +1}. {shopItem.item}</span>
        <span className="del">X</span>
      
    </div>
  );
};

export default ShoppingList;
