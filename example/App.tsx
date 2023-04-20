import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { SearchForm, SearchFilter } from "../packages/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div style={{ width: 1100 }}>
        <SearchForm
          callback={(v) => v}
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
              type: "transfer",
              field: "manageDeptId",
              label: "管理部门",
              placeholder: "请选择管理部门",
              defaultValue: "",
            },
          ]}
        />
      </div>

      <div>
        <SearchFilter
          callback={(v) => console.log(v)}
          shortcut={[
            { label: "未签约(12)", value: 1 },
            { label: "已签约(12)", value: 2 },
            { label: "待签约(12)", value: 3 },
          ]}
          options={[
            {
              field: "projectBuildingId",
              type: "select",
              label: "审批状态",
              placeholder: "搜索项目/楼宇",
              options: [
                { label: "不限", value: "" },
                { label: "等待发起审批", value: 1 },
                { label: "审批中", value: 2 },
                { label: "审批通过", value: 3 },
                { label: "审批被拒绝", value: 4 },
              ],
            },
            {
              field: "matchTime",
              type: "select",
              label: "合同状态",
              placeholder: "搜索项目/楼宇",
              options: [
                { label: "不限", value: "" },
                { label: "新签", value: 1 },
                { label: "续签", value: 2 },
              ],
            },
            {
              type: "rangePicker",
              label: "起租日期",
              placeholder: "请选择日期范围",
              field: "matchTime1",
            },
            {
              type: "rangePicker",
              label: "结束日期",
              placeholder: "请选择日期范围",
              field: "matchTime2",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
