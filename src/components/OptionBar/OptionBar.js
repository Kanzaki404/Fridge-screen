import "./OptionBar.css";

const OptionBar = () => {


  return (
    <div className="optionBarWrapper">
      <div className="addItem">
        <p className="plusSign">+</p>
        <p>Add Supper</p>
      </div>
      <div className="ClearItem">
        <span>Clear List</span>
      </div>
    </div>
  );
};

export default OptionBar;
