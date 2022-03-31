import "./OptionBar.css";

const OptionBar = ({ from, setOpenModal}) => {

  function optionType(type) {
    return {
      1: { add: 2, clear: 3 },
      2: { add: 5, clear: 6 }
    }[type];
  }

  function optionText(type) {
    return {
      1: 'Add Supper',
      2: 'Add Shop Item'
    }[type];
  }

  return (
    <div className="optionBarWrapper">
      <div className="addItem" onClick={()=> setOpenModal({state: true, type: optionType(from).add})}>
        <p className="plusSign">+</p>
        <p>{optionText(from)}</p>
      </div>
      <div className="ClearItem" onClick={()=> setOpenModal({state: true, type: optionType(from).clear})}>
        <span >Clear List</span>
      </div>
    </div>
  );
};

export default OptionBar;
