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
              field: "financeName1",
              label: "审核人",
              placeholder: "请输入财务审核人名称",
              selectDater: true,
              selectDaterValue: 2,
              options: [
                {
                  label: "正常",
                  value: 1,
                },
                {
                  label: "弹窗",
                  value: 2,
                },
              ],
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
              type: "tree",
              field: "financeName2",
              label: "审核人",
              placeholder: "请输入财务审核人名称",
              options: [
                {
                  value: "1",
                  label: "农、林、牧、渔业",
                  children: [
                    {
                      value: "101",
                      label: "农业",
                    },
                    {
                      value: "102",
                      label: "林业",
                    },
                    {
                      value: "103",
                      label: "畜牧业",
                    },
                    {
                      value: "104",
                      label: "渔业",
                    },
                    {
                      value: "105",
                      label: "农、林、牧、渔服务业",
                    },
                  ],
                },
                {
                  value: "2",
                  label: "采矿业",
                  children: [
                    {
                      value: "201",
                      label: "煤炭开采和洗选业",
                    },
                    {
                      value: "202",
                      label: "石油和天然气开采业",
                    },
                    {
                      value: "203",
                      label: "黑色金属矿采选业",
                    },
                    {
                      value: "204",
                      label: "有色金属矿采选业",
                    },
                    {
                      value: "205",
                      label: "非金属矿采选业",
                    },
                    {
                      value: "206",
                      label: "开采辅助活动",
                    },
                    {
                      value: "207",
                      label: "其他采矿业",
                    },
                  ],
                },
                {
                  value: "3",
                  label: "制造业",
                  children: [
                    {
                      value: "301",
                      label: "农副食品加工业",
                    },
                    {
                      value: "302",
                      label: "食品制造业",
                    },
                    {
                      value: "303",
                      label: "酒、饮料和精制茶制造业",
                    },
                    {
                      value: "304",
                      label: "烟草制品业",
                    },
                    {
                      value: "305",
                      label: "纺织业",
                    },
                    {
                      value: "306",
                      label: "纺织服装、服饰业",
                    },
                    {
                      value: "307",
                      label: "皮革、毛皮、羽毛及其制品和制鞋业",
                    },
                    {
                      value: "308",
                      label: "木材加工和木、竹、藤、棕、草制品业",
                    },
                    {
                      value: "309",
                      label: "家具制造业",
                    },
                    {
                      value: "310",
                      label: "造纸和纸制品业",
                    },
                    {
                      value: "311",
                      label: "印刷和记录媒介复制业",
                    },
                    {
                      value: "312",
                      label: "文教、工美、体育和娱乐用品制造业",
                    },
                    {
                      value: "313",
                      label: "石油加工、炼焦和核燃料加工业",
                    },
                    {
                      value: "314",
                      label: "化学原料和化学制品制造业",
                    },
                    {
                      value: "315",
                      label: "医药制造业",
                    },
                    {
                      value: "316",
                      label: "化学纤维制造业",
                    },
                    {
                      value: "317",
                      label: "橡胶和塑料制品业",
                    },
                    {
                      value: "318",
                      label: "非金属矿物制品业",
                    },
                    {
                      value: "319",
                      label: "黑色金属冶炼和压延加工业",
                    },
                    {
                      value: "320",
                      label: "有色金属冶炼和压延加工业",
                    },
                    {
                      value: "321",
                      label: "金属制品业",
                    },
                    {
                      value: "322",
                      label: "通用设备制造业",
                    },
                    {
                      value: "323",
                      label: "专用设备制造业",
                    },
                    {
                      value: "324",
                      label: "汽车制造业",
                    },
                    {
                      value: "325",
                      label: "铁路、船舶、航空航天和其他运输设备制造业",
                    },
                    {
                      value: "326",
                      label: "电气机械和器材制造业",
                    },
                    {
                      value: "327",
                      label: "计算机、通信和其他电子设备制造业",
                    },
                    {
                      value: "328",
                      label: "仪器仪表制造业",
                    },
                    {
                      value: "329",
                      label: "其他制造业",
                    },
                    {
                      value: "330",
                      label: "废弃资源综合利用业",
                    },
                    {
                      value: "331",
                      label: "金属制品、机械和设备修理业",
                    },
                  ],
                },
                {
                  value: "4",
                  label: "电力、热力、燃气及水生产和供应业",
                  children: [
                    {
                      value: "401",
                      label: "电力、热力生产和供应业",
                    },
                    {
                      value: "402",
                      label: "燃气生产和供应业",
                    },
                    {
                      value: "403",
                      label: "水的生产和供应业",
                    },
                  ],
                },
                {
                  value: "5",
                  label: "建筑业",
                  children: [
                    {
                      value: "501",
                      label: "房屋建筑业",
                    },
                    {
                      value: "502",
                      label: "土木工程建筑业",
                    },
                    {
                      value: "503",
                      label: "建筑安装业",
                    },
                    {
                      value: "504",
                      label: "建筑装饰和其他建筑业",
                    },
                  ],
                },
                {
                  value: "6",
                  label: "批发和零售业",
                  children: [
                    {
                      value: "601",
                      label: "批发业",
                    },
                    {
                      value: "602",
                      label: "零售业",
                    },
                  ],
                },
                {
                  value: "7",
                  label: "交通运输、仓储和邮政业",
                  children: [
                    {
                      value: "701",
                      label: "铁路运输业",
                    },
                    {
                      value: "702",
                      label: "道路运输业",
                    },
                    {
                      value: "703",
                      label: "水上运输业",
                    },
                    {
                      value: "704",
                      label: "航空运输业",
                    },
                    {
                      value: "705",
                      label: "管道运输业",
                    },
                    {
                      value: "706",
                      label: "装卸搬运和运输代理业",
                    },
                    {
                      value: "707",
                      label: "仓储业",
                    },
                    {
                      value: "708",
                      label: "邮政业",
                    },
                  ],
                },
                {
                  value: "8",
                  label: "住宿和餐饮业",
                  children: [
                    {
                      value: "801",
                      label: "住宿业",
                    },
                    {
                      value: "802",
                      label: "餐饮业",
                    },
                  ],
                },
                {
                  value: "9",
                  label: "信息传输、软件和信息技术服务业",
                  children: [
                    {
                      value: "901",
                      label: "电信、广播电视和卫星传输服务",
                    },
                    {
                      value: "902",
                      label: "互联网和相关服务",
                    },
                    {
                      value: "903",
                      label: "软件和信息技术服务业",
                    },
                  ],
                },
                {
                  value: "10",
                  label: "金融业",
                  children: [
                    {
                      value: "1001",
                      label: "货币金融服务",
                    },
                    {
                      value: "1002",
                      label: "资本市场服务",
                    },
                    {
                      value: "1003",
                      label: "保险业",
                    },
                    {
                      value: "1004",
                      label: "其他金融业",
                    },
                  ],
                },
                {
                  value: "11",
                  label: "房地产业",
                  children: [
                    {
                      value: "1101",
                      label: "房地产业",
                    },
                  ],
                },
                {
                  value: "12",
                  label: "租赁和商务服务业",
                  children: [
                    {
                      value: "1201",
                      label: "租赁业",
                    },
                    {
                      value: "1202",
                      label: "商务服务业",
                    },
                  ],
                },
                {
                  value: "13",
                  label: "科学研究和技术服务业",
                  children: [
                    {
                      value: "1301",
                      label: "研究和试验发展",
                    },
                    {
                      value: "1302",
                      label: "专业技术服务业",
                    },
                    {
                      value: "1303",
                      label: "科技推广和应用服务业",
                    },
                  ],
                },
                {
                  value: "14",
                  label: "水利、环境和公共设施管理业",
                  children: [
                    {
                      value: "1401",
                      label: "水利管理业",
                    },
                    {
                      value: "1402",
                      label: "生态保护和环境治理业",
                    },
                    {
                      value: "1403",
                      label: "公共设施管理业",
                    },
                  ],
                },
                {
                  value: "15",
                  label: "居民服务、修理和其他服务业",
                  children: [
                    {
                      value: "1501",
                      label: "居民服务业",
                    },
                    {
                      value: "1502",
                      label: "机动车、电子产品和日用产品修理业",
                    },
                    {
                      value: "1503",
                      label: "其他服务业",
                    },
                  ],
                },
                {
                  value: "16",
                  label: "教育",
                  children: [
                    {
                      value: "1601",
                      label: "教育",
                    },
                  ],
                },
                {
                  value: "17",
                  label: "卫生和社会工作",
                  children: [
                    {
                      value: "1701",
                      label: "卫生",
                    },
                    {
                      value: "1702",
                      label: "社会工作",
                    },
                  ],
                },
                {
                  value: "18",
                  label: "文化、体育和娱乐业",
                  children: [
                    {
                      value: "1801",
                      label: "新闻和出版业",
                    },
                    {
                      value: "1802",
                      label: "广播、电视、电影和影视录音制作业",
                    },
                    {
                      value: "1803",
                      label: "文化艺术业",
                    },
                    {
                      value: "1804",
                      label: "体育",
                    },
                    {
                      value: "1805",
                      label: "娱乐业",
                    },
                  ],
                },
                {
                  value: "19",
                  label: "公共管理、社会保障和社会组织",
                  children: [
                    {
                      value: "1901",
                      label: "中国共产党机关",
                    },
                    {
                      value: "1902",
                      label: "国家机构",
                    },
                    {
                      value: "1903",
                      label: "人民政协、民主党派",
                    },
                    {
                      value: "1904",
                      label: "社会保障",
                    },
                    {
                      value: "1905",
                      label: "群众团体、社会团体和其他成员组织",
                    },
                    {
                      value: "1906",
                      label: "基层群众自治组织",
                    },
                  ],
                },
                {
                  value: "20",
                  label: "国际组织",
                  children: [
                    {
                      value: "2001",
                      label: "国际组织",
                    },
                  ],
                },
              ],
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
