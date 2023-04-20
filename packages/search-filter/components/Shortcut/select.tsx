import React, { useState } from "react";
import { ShortcutProps } from "./type";
import { ShortcutItem } from "../../search-filter-css";

const Shortcut = (props: ShortcutProps) => {
  const { options, onChange, label } = props;
  const [checkedValue, setcheckedValue] = useState<any>();
  return (
    <>
      {options?.map((m) => (
        <ShortcutItem
          checked={checkedValue == m?.value}
          onClick={() => {
            setcheckedValue((v: any) => {
              onChange?.({ [`${label}`]: m?.value });
              return m?.value;
            });
          }}
        >
          {m.label}
        </ShortcutItem>
      ))}
    </>
  );
};

export default Shortcut;
