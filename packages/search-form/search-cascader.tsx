import React, { useState } from "react";
import { Form, Cascader } from "antd";
import "antd/lib/cascader/style/index";
import type { SearchInputProps } from "./search-form-types";
function SearchCascader(
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
  return (
    <section className="search-item">
      <Form.Item label={label} colon={false} name={field}>
        <Cascader {...restProps} />
      </Form.Item>
    </section>
  );
}

export default SearchCascader;
