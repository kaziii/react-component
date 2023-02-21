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
    options?: Array<IOptions>,
    mode?: string,
    maxTagCount?: string,
    output?: string,
    multiple?: boolean,
    tostring?: boolean,
    moreChoose?: boolean,
    selectString?: boolean,
    valueInString?: boolean,
    defaultValue?: string | number,
}
export interface IOptions {
    value: string | number,
    label: string,
    text?: string,
    children?: IOptions,
}

export interface SearchInputProps {
    labelWidth?: string;
    label?: string;
    defaultValue?: string | number | undefined;
    width?: string | number;
    handleSearch?: () => void;
    field?: string;
    inputType?: string;
}

export interface SearchTreeProps {
    labelWidth?: string;
    label?: string;
    defaultValue?: string | number | undefined;
    width?: string | number;
    handleSearch?: () => void;
    field?: string;
    inputType?: string;
    options?: any[] | undefined;
}

export interface SearchSelectProps {
    labelWidth?: string;
    label?: string;
    defaultValue?: string | number | undefined;
    width?: string | number;
    handleSearch?: () => void;
    field?: string;
    inputType?: string;
    selectDater?: boolean;
    selectDaterValue?: string | number;
    placeholder?: string;
    open?: boolean;
}
export interface ISearTransfer {
    labelWidth?: string;
    size?: string | number;
    width?: string | number;
    projectDepartmentId?: Array<any>;
    handleCorrect?: (val: Array<any>, list: Array<any>) => void;
    handleSearch?: () => void;
    API?: any;
    updateMapDTO?: string;
    inputType?: string;
    selectDater?: boolean;
    selectDaterValue?: string | number;
    type: string,
    label: string,
    placeholder: string,
    field: string,
    options?: Array<IOptions>,
    mode?: string,
    maxTagCount?: string,
    output?: string,
    multiple?: boolean,
    tostring?: boolean,
    moreChoose?: boolean,
    selectString?: boolean,
    valueInString?: boolean,
    defaultValue?: string | number,
}

export interface ISearTransferData {
    crumbList?: Array<ICrumb>,
    departmentVOList?: Array<ICrumb>, 
}
export interface ICrumb {
    deptName: string,
    id: string,
    parentId: string,
}