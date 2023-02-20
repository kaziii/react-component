import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Input, InputNumber, Form } from "antd";
import "antd/lib/input/style/index";
import type { SearchInputProps } from "./search-form-types";
function SearchInput(
  {
    labelWidth,
    label,
    defaultValue,
    width,
    handleSearch,
    inputType,
    field,
    ...restProps
  }: SearchInputProps,
  ref: any
) {
  const [value, setValue] = useState<string | number | undefined>(
    defaultValue ?? ""
  );
  // useImperativeHandle(ref, () => ({
  //   value,
  //   resetValue: () => {
  //     setValue(defaultValue ?? "");
  //   },
  // }));

  return (
    <section className="search-item">
      <Form.Item label={label} colon={false} name={field}>
        {inputType === "number" ? (
          <InputNumber
            style={{ width, height: 40, borderRadius: 4 }}
            {...restProps}
          />
        ) : (
          <Input
            style={{ width, height: 40, borderRadius: 4 }}
            allowClear
            {...restProps}
          />
        )}
      </Form.Item>

      {/* <div className="search-item-label" style={{ width: labelWidth }}>
        {label}
      </div>
      <div className="search-item-component">
        {inputype === "number" ? (
          <InputNumber
            style={{ width }}
            placeholder="请输入"
            onKeyDown={(event) => {
              if (event.nativeEvent.key === "Enter") {
                handleSearch?.();
              }
            }}
            {...restProps}
            value={value}
            onChange={(v: any) => setValue(v)}
          />
        ) : (
          <Input
            style={{ width }}
            placeholder="请输入"
            allowClear
            onKeyDown={(event) => {
              if (event.nativeEvent.key === "Enter") {
                handleSearch?.();
              }
            }}
            {...restProps}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </div> */}
    </section>
  );
}

export default SearchInput;
