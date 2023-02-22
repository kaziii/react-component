import React, {
    useState,
    forwardRef,
    useImperativeHandle,
    useEffect,
    useCallback,
    Fragment,
} from "react";
import { Select, Checkbox, Col, Row, Form, Input ,} from 'antd';
import { uniqBy } from "lodash-es";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import Icon, { } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import styled from "styled-components";
import SearchSelect from "./search-select";
import SearchModal from "../Modal/SearchModal";
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { ISearTransfer, ICrumb, ISearTransferData } from "./search-form-types";
import Button from "../Button";

const { Option } = Select;

const TransferItem = ({
    placeholder,
    labelWidth,
    label,
    defaultValue,
    width,
    handleSearch,
    inputType,
    field,
    API,
    ...restProps
}: ISearTransfer) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasChoose, setHasChoose] = useState<Array<ICrumb>>([]);
    const [data, setData] = useState<ISearTransferData>({});
    const [checkAll, setCheckAll] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {

        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const toUp = async (id: string, name?: string): Promise<void> => {
        const { data, status } = await API?.({ deptId: id, deptName: name }) || {};
        console.log('toUp', data);
        if (status === 200) {
            setData(data);
        } else {
            // const { data } = JSON.parse(JSON.stringify({ "data": { "crumbList": [{ "childDepartments": null, "createTime": null, "departmentManagers": null, "departmentMembers": null, "deptCode": null, "deptManager": null, "deptName": "测试公司", "id": "4728838086007455747", "level": null, "parentId": null, "totalEmployee": null }], "departmentVOList": [{ "childDepartments": null, "createTime": null, "departmentManagers": null, "departmentMembers": null, "deptCode": null, "deptManager": null, "deptName": "产品部", "id": "4744931801980469251", "level": null, "parentId": null, "totalEmployee": null }, { "childDepartments": null, "createTime": null, "departmentManagers": null, "departmentMembers": null, "deptCode": null, "deptManager": null, "deptName": "运营部", "id": "4744931818607738883", "level": null, "parentId": null, "totalEmployee": null }, { "childDepartments": null, "createTime": null, "departmentManagers": null, "departmentMembers": null, "deptCode": null, "deptManager": null, "deptName": "品牌部", "id": "4744931829490909187", "level": null, "parentId": null, "totalEmployee": null }, { "childDepartments": null, "createTime": null, "departmentManagers": null, "departmentMembers": null, "deptCode": null, "deptManager": null, "deptName": "推广部", "id": "4744931836806823939", "level": null, "parentId": null, "totalEmployee": null }, { "childDepartments": null, "createTime": null, "departmentManagers": null, "departmentMembers": null, "deptCode": null, "deptManager": null, "deptName": "人力资源部", "id": "4744931842759589891", "level": null, "parentId": null, "totalEmployee": null }, { "childDepartments": null, "createTime": null, "departmentManagers": null, "departmentMembers": null, "deptCode": null, "deptManager": null, "deptName": "财务管理中心", "id": "4744931850109059075", "level": null, "parentId": null, "totalEmployee": null }, { "childDepartments": null, "createTime": null, "departmentManagers": null, "departmentMembers": null, "deptCode": null, "deptManager": null, "deptName": "研发部", "id": "4744931855557459971", "level": null, "parentId": null, "totalEmployee": null }, { "childDepartments": null, "createTime": null, "departmentManagers": null, "departmentMembers": null, "deptCode": null, "deptManager": null, "deptName": "线上推广部", "id": "4744931866332626947", "level": null, "parentId": null, "totalEmployee": null }, { "childDepartments": null, "createTime": null, "departmentManagers": null, "departmentMembers": null, "deptCode": null, "deptManager": null, "deptName": "运输部", "id": "4744931879537344515", "level": null, "parentId": null, "totalEmployee": null }] }, "error": null, "message": null, "rel": true, "status": 200 }));
            // console.log(data);

            // setData(data);
        }


    };
    const closeItem = (value: string): void => {
        setHasChoose(_ => _.filter(item => item.id !== value));
    }
    const onChange = (e: CheckboxChangeEvent, list?: Array<ICrumb>) => {
        if (e.target.checked) {
            if (list?.length) {
                const obj = list.find(i => i.id === e.target.value);
                if (!obj) return;
                setHasChoose(v => [...v, obj]);
            }
        } else {
            setHasChoose(v => v.filter(i => i.id !== e.target.value));
            
        }
    };
    const onCheckAllChange = (e: CheckboxChangeEvent, list?: Array<ICrumb>) => {
        if (e.target.checked) {
            if (list?.length) {
                setHasChoose(v => uniqBy([...v, ...list], "id"));
            }
        } else {
            setHasChoose([]);
        }
        setCheckAll(e.target.checked);
    };
    const searchOnChange = (e:string)=>{
        toUp('',e);  
    }
    useEffect(() => {
        if (data.departmentVOList?.length && hasChoose.length) {
            setCheckAll(data.departmentVOList?.length === hasChoose.length)
        }else{
            setCheckAll(false);
        }
    }, [data, hasChoose])

    useEffect(() => {
        toUp('');
    }, []);
    return (
        <Fragment>
            <Form.Item label={label} colon={false} name={field}>
                <span onClick={() => showModal()}>
                    <SearchSelect open={false} placeholder={placeholder} />
                </span>
            </Form.Item>

            <SearchModal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                title="选择部门"
                className="transfer"
                width={650}
                footer={<Fragment>
                    <Button onClick={handleCancel}>取消</Button>
                    <Button type="primary" onClick={handleOk}>确定</Button>
                </Fragment>}

            >
                <div className="left">
                    <div className="search-input">
                    <Input.Search placeholder="请输入关键字搜索" allowClear onSearch={searchOnChange} style={{ width: "100%",height:'100%' }} />
                    </div>
                    <div className="tagBox" style={{ padding: '12px 0' }}>
                        <a style={{ color: "#3C55D8" }} onClick={() => toUp("")}>
                            通讯录
                        </a>
                        {data?.crumbList?.map((item, index) => (
                            <a
                                key={index}
                                onClick={() =>
                                    (index + 1 < (data?.crumbList?.length || 0)) && toUp(item.id, item.deptName)
                                }
                            >
                                {">"}
                                {item.deptName}
                            </a>
                        ))}
                    </div>
                    <Checkbox
                        onChange={(e) => onCheckAllChange(e, data?.departmentVOList)}
                        checked={checkAll}
                    >全选</Checkbox>
                    <Checkbox.Group value={hasChoose.map(i => i.id)} >
                        <Row>
                            {data?.departmentVOList?.map(item => (
                                <Col span={24} style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
                                    <Checkbox value={item.id} style={{ lineHeight: '32px' }} onChange={(e) => onChange(e, data?.departmentVOList)}>
                                        {item.deptName}
                                    </Checkbox>
                                    <a
                                        className={
                                            !hasChoose.some(i=>i.id===item.id) ? "checkChild" : "checkChild has"
                                        }
                                        onClick={() =>
                                            !hasChoose.some(i=>i.id===item.id)&&toUp(item.id, item.deptName)
                                        }
                                    >
                                        下级
                                    </a>
                                </Col>
                            ))}

                        </Row>
                    </Checkbox.Group>
                </div>
                <div className="right">
                    <div className="title">已选</div>
                    <div className="content">
                        {hasChoose?.map((item, index) => (
                            <div className="body-item" key={index}>
                                {item?.deptName}
                                <span className="icon-close" onClick={() => closeItem(item?.id)}  >×</span>
                            </div>
                        ))}
                    </div>

                </div>

            </SearchModal >
        </Fragment>
    )
}

const StyledTransferItem = styled(TransferItem) <{}>`
    
`

export default React.memo(StyledTransferItem);
