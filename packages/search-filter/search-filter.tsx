import React, { useState, useMemo } from "react";
import {
  SearchFilterProps,
  IShortcutOption,
  IOptions,
  ISearchOptions,
  dropDownOptionType,
} from "./search-filter-types";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import {
  SearchInput,
  LeftDrop,
  Px12Text,
  DownOutlinedIcon,
  UpOutlinedIcon,
  RightInput,
  ShortcutStyled,
  ShortcutItem,
  DropDownPanel,
  DropDownPanelItem,
  DropDownPanelLable,
  DropDownPanelValue,
} from "./search-filter-css";
import { Button, ConfigProvider, Input } from "antd";
import { ShortcutSelect, ShortcutRangePicker } from "./components";
import zhCN from "antd/es/locale/zh_CN";
import "moment/locale/zh-cn";
import "antd/lib/form/style/index";
const SearchFilter = (props: SearchFilterProps) => {
  const { shortcut, shortcutCallback, options, callback, searchOptions } =
    props;

  const dropDownOptions = useMemo(() => {
    return options?.length
      ? options?.filter((f) => f.type == "select" || f.type == "rangePicker")
      : [];
  }, [options]);
  //下拉框显示隐藏变量
  const [dropDownVisble, setdropDownVisble] = useState<Boolean>(false);

  //快捷路径存储数组
  const [shortcutCheck, setshortcutCheck] = useState<any[]>([]);
  const handleCheckShortcut = (item: IShortcutOption) => {
    if (shortcutCheck?.includes(item.value)) {
      setshortcutCheck([]);
    } else {
      setshortcutCheck([item.value]);
    }
    shortcutCallback?.(shortcutCheck, item);
  };

  //点选搜索存储数组
  const [dropDownSelectKeys, setdropDownSelectKeys] = useState<
    dropDownOptionType[]
  >([]);

  const [query, setquery] = useState<IOptions[]>([]);

  const handleShortcutCallback = (value: IOptions) => {
    setquery((v) => {
      callback?.([Object.assign({}, ...v, value)]);
      return [Object.assign({}, ...v, value)];
    });
  };

  const searchPlaceholder =
    searchOptions?.map((m) => m?.label).join("/") || "输入要搜索的内容";

  return (
    <>
      <ConfigProvider prefixCls={"custom-search"} locale={zhCN}>
        <SearchInput>
          <LeftDrop onClick={() => setdropDownVisble(!dropDownVisble)}>
            {dropDownVisble ? <UpOutlinedIcon /> : <DownOutlinedIcon />}

            <ShortcutItem checked={dropDownVisble}>筛选</ShortcutItem>
          </LeftDrop>
          <RightInput placeholder={searchPlaceholder}></RightInput>
          <Button type="primary">
            <SearchOutlined />
          </Button>
        </SearchInput>
        <ShortcutStyled>
          {shortcut?.map((m) => (
            <ShortcutItem
              onClick={() => handleCheckShortcut(m)}
              checked={shortcutCheck?.includes(m?.value)}
            >
              {m?.label}
            </ShortcutItem>
          ))}
        </ShortcutStyled>
        <>
          {dropDownVisble ? (
            <DropDownPanel>
              {dropDownOptions?.map((m) => (
                <>
                  {m?.type == "select" && (
                    <DropDownPanelItem>
                      <DropDownPanelLable>{m?.label}</DropDownPanelLable>
                      <DropDownPanelValue>
                        <ShortcutSelect
                          label={m?.field}
                          options={m?.options}
                          onChange={handleShortcutCallback}
                        />
                      </DropDownPanelValue>
                    </DropDownPanelItem>
                  )}
                  {m?.type == "rangePicker" && (
                    <DropDownPanelItem>
                      <DropDownPanelLable>{m?.label}</DropDownPanelLable>
                      <DropDownPanelValue>
                        <ShortcutRangePicker
                          label={m?.field}
                          options={m?.options}
                          onChange={handleShortcutCallback}
                        />
                      </DropDownPanelValue>
                    </DropDownPanelItem>
                  )}
                </>
              ))}
            </DropDownPanel>
          ) : null}
        </>
      </ConfigProvider>
    </>
  );
};

export default SearchFilter;
