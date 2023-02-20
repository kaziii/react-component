import React from "react";

export interface SearchFormProps {
    children?: React.ReactNode;
    options: Array<ISearchOptions>;
    callback: (value: object) => void;
    prefix?: string;
    className?: string;
    Container?: HTMLElement
    more?: boolean
}
export interface ISearchOptions {
    type: string,
    label: string,
    placeholder: string,
    field: string,
    options: Array<IOptions>,
    mode?: string,
    maxTagCount?: string,
    output?: string,
    multiple?: boolean,
    tostring?: boolean,
    moreChoose?: boolean,
    selectString?: boolean,
    valueInString?: boolean,
}
export interface IOptions {
    value: string | number,
    label: string,
    children?: IOptions,
}

export interface SearchInputProps {
    labelWidth?: string;
    label?: String;
    defaultValue?: string | number | undefined;
    width?: string | number;
    handleSearch?: () => void;
    field?: string;
    inputType?: String;
}

export interface SearchTreeProps {
    labelWidth?: string;
    label?: String;
    defaultValue?: string | number | undefined;
    width?: string | number;
    handleSearch?: () => void;
    field?: string;
    inputType?: String;
    options?: any[] | undefined;
}

export interface SearchSelectProps {
    labelWidth?: string;
    label?: String;
    defaultValue?: string | number | undefined;
    width?: string | number;
    handleSearch?: () => void;
    field?: string;
    inputType?: String;
    selectDater?: boolean;
    selectDaterValue?: string | number;
    placeholder?: string;
}