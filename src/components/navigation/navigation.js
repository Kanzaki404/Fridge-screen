import "./navigation.css";

const Navigation = ({ navOptions,setCurrentSection, currentSection}) => {
  console.log(navOptions);
  
  const navItems = navOptions.map((e) => {
     
    return <div key={e.id} onClick={()=> setCurrentSection(e.id)} className={`navItem ${currentSection === e.id ? "active" : ""}`}>{e.title}</div>;
  });

  return (
    <div className="NavigationWrapper">
      {navItems}
    </div>
  );
};

export default Navigation;
