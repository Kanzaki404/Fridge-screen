import "./ShoppingList.css";

const ShoppingList = ({shopItem,listNum, removeItem}) => { 
  return (
    <div className="shoppingListWrapper">
        <span>{listNum +1}. {shopItem.item}</span>
        <span className="del" onClick={()=> removeItem({state: true, type: 4, itemId: shopItem.id})}>X</span>
      
    </div>
  );
};

export default ShoppingList;
