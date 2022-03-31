import "./Modal.css";
import {saveSupper, takeAwaySupper} from '../../utils/localStorageControl'
import {useState} from 'react'

const Modal = ({setOpenModal, type}) => {
  const [newSupper, setNewSupper] = useState({id: null,supperName: null, qnt: null, made: null})
  const [newShopItem, setNewShopItem] = useState({id: null,item:null})

  function modalOptions(type) {
    return {
      1: { title: 'Have you stolen food?', actiontype: 1},
      2: { title: 'New Supper ', actiontype: 2 },
      3: { title: 'Did it all spoil?', actiontype: 3 },
      4: { title: 'Did you buy the item?', actiontype: 4 },
      5: { title: 'Add Shopping Item', actiontype: 5 },
      6: { title: 'Clear Shopping List', actiontype: 6 }
    }[type];
  }
 
  function confirm(typeOfAction) {
    
    switch (typeOfAction.actiontype) {
        case 1: takeAwaySupper(type.supperId);
        break;
        case 2: saveSupper(newSupper);
        break;
        case 3: console.log('supper list cleared');
        break;
        case 4: console.log('item removed', type.itemId);
        break;
        case 5: console.log('item added');
        break;
        case 6: console.log('item list cleared');
        break;
      default:
        console.log(`Sorry, we are out of`);
    }

    setOpenModal({state: false})
    
  }
  return (
    <div className="modalWrapper">
      <div className="content">
        <div>
          <h3 className="title">{modalOptions(type.type).title}</h3>
          {type.type == 2 && <div className="textInputWrapper">
      
            <input className="textInput" type="text" placeholder="Supper Name"/>
            <input className="textInput" type="text" placeholder="Quantity"/>
            </div>}
          {type.type == 5 && <div className="textInputWrapper"><input className="textInput" type="text"/></div>}
          <div className="modalOptions">
            <h3 className="confirm" onClick={()=> confirm(modalOptions(type.type))}>Yes</h3>
            <h3 onClick={()=> setOpenModal(false)}>Fat Fingers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
