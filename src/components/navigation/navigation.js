import "./navigation.css";

const Navigation = ({ navOptions,setCurrentSection }) => {
  console.log(navOptions);
  const active = true;
  const navItems = navOptions.map((e) => {
    return <div key={e.id} onClick={()=> setCurrentSection(e.id)} className={`navItem ${active ? "active" : ""}`}>{e.title}</div>;
  });

  return (
    <div className="NavigationWrapper">
      {navItems}
    </div>
  );
};

export default Navigation;
