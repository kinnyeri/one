import menuData from "./assets/data_body.json";
import { Menu } from "./components";
import "./index.css";

function App() {
  console.log(menuData);
  return (
    <div>
      <Menu></Menu>
      {/* <div>
        {menuData.map((data) => {
          console.log(data);
          return (
            <div>
              <div>{data.description}</div>
              <div>
                {data.childMenus.map((d) => (
                  <div>{d.description}</div>
                ))}
              </div>
              <div>----</div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
