import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Form, TreeSelect } from "antd";
import "antd/lib/select/style/index";
import type { SearchTreeProps } from "./search-form-types";

function SearchTree(
  {
    labelWidth,
    label,
    defaultValue,
    width,
    handleSearch,
    inputype,
    field,
    options,
    ...restProps
  }: SearchTreeProps,
  ref: any
) {
  return (
    <section className="search-item">
      <Form.Item label={label} colon={false} name={field}>
        <TreeSelect
          treeData={options}
          style={{ height: 40, borderRadius: 4 }}
          {...restProps}
          showSearch
          multiple
          allowClear
        />
      </Form.Item>
    </section>
  );
}

export default SearchTree;