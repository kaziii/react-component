import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { SearchForm } from "../packages/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div style={{ width: 1400 }}>
        <SearchForm
          callback={(v) => console.log(v)}
          options={[
            {
              field: "projectBuildingId",
              type: "cascader",
              label: "项目楼宇",
              placeholder: "搜索项目/楼宇",
              defaultValue: "",
            },
            {
              type: "rangePicker",
              label: "交账时间",
              placeholder: "请选择日期范围",
              field: "matchTime",
            },
            {
              type: "input",
              field: "matchName",
              label: "交账人",
              placeholder: "请输入员工姓名",
            },
            {
              type: "input",
              field: "financeName",
              label: "审核人",
              placeholder: "请输入财务审核人名称",
            },
            {
              type: "input",
              field: "financeName",
              label: "审核人",
              placeholder: "请输入财务审核人名称",
            },
            {
              type: "input",
              field: "financeName",
              label: "审核人",
              placeholder: "请输入财务审核人名称",
            },
            {
              type: "select",
              field: "financeName",
              label: "审核人",
              placeholder: "请输入财务审核人名称",
            },

            {
              type: "input",
              field: "financeName",
              label: "审核人",
              placeholder: "请输入财务审核人名称",
            },
            {
              type: "input",
              field: "financeName",
              label: "审核人",
              placeholder: "请输入财务审核人名称",
            },
            {
              type: "input",
              field: "financeName",
              label: "审核人",
              placeholder: "请输入财务审核人名称",
            },
            {
              type: "select",
              field: "financeName",
              label: "审核人",
              placeholder: "请输入财务审核人名称",
            },
            {
              type: "input",
              field: "financeName",
              label: "审核人",
              placeholder: "请输入财务审核人名称",
            },
            {
              type: "input",
              field: "financeName",
              label: "审核人",
              placeholder: "请输入财务审核人名称",
            },
            {
              type: "input",
              field: "financeName",
              label: "审核人",
              placeholder: "请输入财务审核人名称",
            },
            {
              type: "select",
              field: "financeName",
              label: "审核人",
              placeholder: "请输入财务审核人名称",
            },
          ]}
        />
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
