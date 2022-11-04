import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";
import { Form, ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "moment/locale/zh-cn";
import "antd/lib/form/style/index";
import type { SearchFormProps } from "./search-form-types";
import SearchInput from "./search-input";
import SearchRangePicker from "./search-rangePicker";
import SearchCascader from "./search-cascader";
import SearchSelect from "./search-select";
import SearchTree from "./search-treeselect";
import "./styles/index.less";
import classNames from "classNames";
import Button from "../Button";

export const Context = React.createContext<any | null>(null);
const SearchForm = (props: SearchFormProps) => {
  const [form] = Form.useForm();
  const formRef = useRef<any>();
  const { options, callback, prefix = "search", className, Container } = props;

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  const [rowslength, setrowslength] = useState<number>(0);

  const [collapsed, setcollapsed] = useState<boolean>(true);

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
    setcollapsed(rowslength > 2 ? true : false);
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
      <div className="seach-buttons">
        {rowslength > 2 && (
          <span
            className="search-collapsed"
            onClick={() => {
              setcollapsed((v) => !v);
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
              } catch (e) {}
            });
          }}
        >
          查询
        </Button>
      </div>
    );
  }, [collapsed]);

  return (
    <ConfigProvider
      locale={zhCN}
      getPopupContainer={() => {
        return formRef?.current;
      }}
    >
      <Context.Provider value={{ form }}>
        <Form form={form} {...formItemLayout} style={{ width: "100%" }}>
          <div ref={formRef} className={classes}>
            {options &&
              options?.map((m: Record<string, unknown>, index: number) => {
                return (
                  <>
                    {m?.type == "input" && <SearchInput {...m} key={index} />}
                    {m?.type == "rangePicker" && (
                      <SearchRangePicker {...m} key={index} />
                    )}
                    {m?.type == "cascader" && (
                      <SearchCascader {...m} key={index} />
                    )}
                    {m?.type == "select" && <SearchSelect {...m} key={index} />}
                    {m?.type == "tree" && <SearchTree {...m} key={index} />}
                  </>
                );
              })}
            {!collapsed ? buttonSwitch() : null}
          </div>
          <div className="outer-layer">{collapsed ? buttonSwitch() : null}</div>
        </Form>
      </Context.Provider>
    </ConfigProvider>
  );
};

export default SearchForm;
