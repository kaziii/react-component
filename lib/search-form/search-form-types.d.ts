import React from "react";
export interface SearchFormProps {
    children?: React.ReactNode;
    options: Record<string, any>;
    callback: (value: object) => void;
    prefix?: string;
    className?: string;
    Container?: HTMLElement;
}
export interface SearchInputProps {
    labelWidth?: string;
    label?: String;
    defaultValue?: string | number | undefined;
    width?: string | number;
    handleSearch?: () => void;
    field?: string;
    inputype?: String;
}
