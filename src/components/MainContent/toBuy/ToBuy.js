import "./ToBuy.css";
import OptionBar from "../../OptionBar/OptionBar";
import ShoppingList from "./ShoppingList/ShoppingList"
import Modal from "../../Modal/Modal"
import { useState } from "react";

const ToBuy = () => { 
  const [openModal, setOpenModal] = useState({state: false, type: 1, itemId: 0})
  const temp = [
    {
      id: 0,
      item: 'Toilet Paper'
    },
    {
      id: 1,
      item: 'Salt'
    },
    {
      id: 2,
      item: 'Coffee'
    },
    {
      id: 3,
      item: 'Tomatoes'
    },
    {
      id: 4,
      item: 'Coffee Filter'
    }
  ]

  const shopItems = temp.map((e, index) => {
    return ( 
      <ShoppingList key={index} shopItem={e} listNum={index} removeItem={setOpenModal}/>
    )
  })
  return (
    <div className="toBuyWrapper">
     <OptionBar from={2} setOpenModal={setOpenModal}/>
    {shopItems}
    {openModal.state && <Modal setOpenModal={setOpenModal} type={openModal}/>}
    </div>
  );
};

export default ToBuy;
