import React, {
    useCallback,
    useEffect,
    useState,
    useMemo,
    useRef,
    Fragment,
    ReactElement,
} from "react";
import { Form, ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "moment/locale/zh-cn";
import "antd/lib/form/style/index";
import type { SearchFormProps, ISearchOptions } from "./search-form-types";
import SearchInput from "./search-input";
import SearchRangePicker from "./search-rangePicker";
import SearchCascader from "./search-cascader";
import SearchSelect from "./search-select";
import SearchTree from "./search-treeselect";
import SearchTransfer from "./search-transfer";
import "./styles/index.less";
import classNames from "classNames";
import Button from "../Button";
import styled from "styled-components";

export const Context = React.createContext<any | null>(null);
const SearchForm = (props: SearchFormProps) => {
    const [form] = Form.useForm();
    const formRef = useRef<any>();
    const { options, callback, prefix = "search", className, Container } = props;

    const formItemLayout = {
        labelCol: { span: 7 },
        wrapperCol: { span: 17 },
    };

    const [rowslength, setrowslength] = useState<number>(0);

    const [collapsed, setCollapsed] = useState<boolean>(true);

    const getGridRows = useCallback(() => {
        setrowslength(
            window.getComputedStyle(formRef.current).gridTemplateRows.split(" ")
                ?.length
        );
    }, []);
    useEffect(() => {
        getGridRows();
    }, [getGridRows]);

    useEffect(() => {
        setCollapsed(rowslength > 2 ? true : false);
    }, [rowslength]);

    const classes = classNames(
        prefix,
        {
            [`${prefix}-default`]: true,
            [`${prefix}-hidden-grid`]: collapsed,
        },
        className
    );

    const buttonSwitch = useCallback(() => {
        return (
            <div className="search-buttons">
                {rowslength > 2 && (
                    <span
                        className="search-collapsed"
                        onClick={() => {
                            setCollapsed((v) => !v);
                        }}
                    >
                        {!collapsed ? "收起" : "更多"}
                    </span>
                )}

                <Button
                    onClick={() => {
                        form.resetFields();
                        void callback?.(form.getFieldsValue());
                    }}
                >
                    重置
                </Button>
                <Button
                    type="primary"
                    onClick={() => {
                        return form.validateFields()?.then((values: object) => {
                            try {
                                callback?.(values);
                                return Promise.resolve();
                            } catch (e) { }
                        });
                    }}
                >
                    查询
                </Button>
            </div>
        );
    }, [collapsed]);
    const getFunctionalComponent = (m: ISearchOptions, index: number): ReactElement => {
        switch (m.type) {
            case "input":
                return <SearchInput {...m} key={m.field} />;
            case "rangePicker":
                return <SearchRangePicker {...m} key={m.field} />;
            case "cascader":
                return <SearchCascader {...m} key={m.field} />;
            case "select":
                return <SearchSelect {...m} key={m.field} />;
            case "tree":
                return <SearchTree {...m} key={m.field} />;
            case "transfer":
                return <SearchTransfer {...m} key={m.field} />;
            default:
                return <></>;
        }
    }



    return (
        <ConfigProvider
            locale={zhCN}
            prefixCls={"custom-search"}
            getPopupContainer={() => {
                return formRef?.current;
            }}
        >
            <Context.Provider value={{ form }}>
                <Form form={form} {...formItemLayout} style={{ width: "100%" }}>
                    <div ref={formRef} className={classes}>
                        {options &&
                            options?.map((m: ISearchOptions, index: number) => {
                                return getFunctionalComponent(m, index);
                                //             (
                                //                 <>
                                //                     {m?.type == "input" && <SearchInput {...m} key={m.field} />}
                                // {m?.type == "rangePicker" && (
                                //   <SearchRangePicker {...m} key={m.field} />
                                // )}
                                // {m?.type == "cascader" && (
                                //   <SearchCascader {...m} key={m.field} />
                                // )}
                                // {m?.type == "select" && <SearchSelect {...m} key={m.field} />}
                                // {m?.type == "tree" && <SearchTree {...m} key={m.field} />}
                                //                 </>
                                //             );
                            })}
                        {!collapsed ? buttonSwitch() : null}
                    </div>
                    <div className="outer-layer">{collapsed ? buttonSwitch() : null}</div>
                </Form>
            </Context.Provider>
        </ConfigProvider>
    );
};
const StyledSearchForm = styled(SearchForm)`
.custom-search-select-selection-item{
display: flex;
justify-content: center;
align-items: center;
}
`

export default StyledSearchForm;
