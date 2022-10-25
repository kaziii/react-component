import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Form, Select } from "antd";
import "antd/lib/select/style/index";
import type { SearchInputProps } from "./search-form-types";
function SearchSelect(
  {
    labelWidth,
    label,
    defaultValue,
    width,
    handleSearch,
    inputype,
    field,
    ...restProps
  }: SearchInputProps,
  ref: any
) {
  return (
    <section className="search-item">
      <Form.Item label={label} colon={false} name={field}>
        <Select
          style={{ height: 40, borderRadius: 4 }}
          {...restProps}
          allowClear
        />
      </Form.Item>
    </section>
  );
}

export default SearchSelect;
