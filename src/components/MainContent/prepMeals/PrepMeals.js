import "./PrepMeals.css";
import OptionBar from "../../OptionBar/OptionBar";
import MealItem from "./mealItem/MealItem"
import Modal from "../../Modal/Modal"
import { useState } from "react";

const PrepMeals = () => {
  const [openModal, setOpenModal] = useState({state: false, type: 1, supperId: 0})
  
  const tempDate = new Date()
  const temp = [
    {
      id: 0,
      supperName: 'Curry Rice',
      qnt: 4,
      made: `${tempDate.getDate()}/${tempDate.getMonth()+1}/${tempDate.getFullYear()}`
    },
    {
      id: 1,
      supperName: 'Curry Rice1',
      qnt: 0,
      made: `${tempDate.getDate()}/${tempDate.getMonth()+1}/${tempDate.getFullYear()}`
    },
    {
      id: 2,
      supperName: 'Curry Rice2',
      qnt: 6,
      made: `${tempDate.getDate()}/${tempDate.getMonth()+1}/${tempDate.getFullYear()}`
    }
  ]
  const supperList = temp.map(e => {
    return (
      <MealItem key={e.supperName} supper={e} openModal={setOpenModal}/>
    )
  })


  return (
    <div className="prepMealsWrapper">
      <OptionBar from={1} setOpenModal={setOpenModal}/>
      <div className="scrollSupper">{supperList}</div>
      {openModal.state && <Modal setOpenModal={setOpenModal} type={openModal}/>}
      
      
    </div>
  );
};

export default PrepMeals;
