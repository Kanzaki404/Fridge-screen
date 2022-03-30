import "./MealItem.css";

const MealItem = ({supper}) => {


  return (
    <div className="mealItemWrapper">
     <div className="outOfStock">Out of Stock</div>
     <div className="supperInfo">
         <span>
             {supper.supperName}
         </span>
         <span>Qnt: {supper.qnt}</span>
         <span>Made: {supper.made}</span>
     </div>
      
    </div>
  );
};

export default MealItem;
