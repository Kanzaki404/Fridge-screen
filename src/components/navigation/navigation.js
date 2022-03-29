import "./navigation.css";
import logo from '../../'
const Navigation = ({ navOptions,setCurrentSection }) => {
  console.log(navOptions);
  const active = true;
  const navItems = navOptions.map((e) => {
    return <div key={e.id}><button onClick={()=> setCurrentSection(e.id)} className={`navItem ${active ? "active" : ""}`}>{e.title}</button></div>;
  });

  return (
    <div className="NavigationWrapper">
        <img className="logo" src="/logo192.png" alt="log"></img>
      <div className="navItems">{navItems}</div>
    </div>
  );
};

export default Navigation;
