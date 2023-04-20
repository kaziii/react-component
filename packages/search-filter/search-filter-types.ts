import React from "react";

export interface SearchFilterProps {
  children?: React.ReactNode;
  callback: (value: object) => void;
  options: Array<ISearchOptions>;
  prefix?: string;
  shortcut?: Array<IShortcutOption>;
  shortcutCallback?: (value: object, item: IShortcutOption) => void;
  searchOptions?: Array<TSearchItem>;
}

export interface TSearchItem {
  fetchData: () => void;
  label: string;
}

export interface ISearchOptions {
  type: string;
  label: string;
  placeholder: string;
  field: string;
  options?: Array<IOptions>;
  mode?: string;
  maxTagCount?: string;
  output?: string;
  multiple?: boolean;
  tostring?: boolean;
  moreChoose?: boolean;
  selectString?: boolean;
  valueInString?: boolean;
  defaultValue?: string | number;
}
export interface IOptions {
  value: string | number;
  label: string;
  text?: string;
  children?: IOptions;
}

export interface IShortcutOption {
  label: string;
  value: string | number;
}

export interface dropDownOptionType {
  [key: string]: string | number;
}
