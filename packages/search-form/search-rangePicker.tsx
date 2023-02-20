import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Form, DatePicker } from "antd";
import "antd/lib/date-picker/style/index";
import type { SearchInputProps } from "./search-form-types";
import moment from "moment";
function SearchRangePicker(
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

  const RenderDatePicker = ({
    value,
    onChange,
  }: {
    value?: string;
    onChange?: (v: string | undefined) => void;
  }) => {
    return (
      <DatePicker
        format={"YYYY-MM-DD"}
        value={value ? moment(value) : undefined}
        style={{ width: "100%", height: 40, borderRadius: 4 }}
        onChange={(date) => {
          void onChange?.(date?.format("YYYY-MM-DD"));
        }}
      />
    );
  };

  return (
    <section className="search-item">
      <Form.Item label={label} colon={false} name={field}>
        <RenderDatePicker {...restProps} />
      </Form.Item>
    </section>
  );
}

export default SearchRangePicker;
