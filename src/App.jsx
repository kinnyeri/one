import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import menuData from "./assets/data_body.json";
function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get("/assets/data_body.json").then((resp) => {
  //     setData(resp.data);
  //   });
  // }, []);
  console.log(menuData);
  return (
    <div>
      <div>
        {menuData.map((data) => {
          console.log(data);
          return <div>1</div>;
        })}
      </div>
    </div>
  );
}

export default App;
