import React, { useState } from "react";
import { ShortcutProps } from "./type";
import { ShortcutItem } from "../../search-filter-css";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
const Shortcut = (props: ShortcutProps) => {
  const { options, onChange, label } = props;
  const handleRangePicker = (dates: any, datestring: any) => {
    onChange?.({ [`${label}`]: datestring });
  };
  return (
    <>
      <RangePicker size={"small"} onChange={handleRangePicker} />
    </>
  );
};

export default Shortcut;
