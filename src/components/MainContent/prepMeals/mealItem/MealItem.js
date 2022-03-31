import "./MealItem.css";

const MealItem = ({supper, openModal}) => {


  return (
    <div className="mealItemWrapper" onClick={()=> openModal({state: true, type: 1, supperId: supper.id})}>
     {supper.qnt < 1 && <div className="outOfStock">Out of Stock</div> }
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
