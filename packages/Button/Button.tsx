import { useState } from "react";
import { Button as AntButton } from "antd";
import styled from "styled-components";
import { ButtonProps } from "./button-types";
import "antd/lib/button/style/index";

type IProps = any;
function isPromise(value: unknown): value is Promise<unknown> {
    return (
        typeof value === "object" &&
        value !== null &&
        "then" in value &&
        typeof (value as { then: unknown }).then === "function"
    );
}


const Buttons = (props: any) => {
    const { onClick, loading: primitiveLoading, ...params } = props;
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <span>
            <AntButton
                {...params}
                loading={primitiveLoading === undefined ? loading : primitiveLoading}
                onClick={async (...args) => {
                    if (typeof onClick === "function" && !loading) {
                        const returnValue = onClick(...args) as unknown;
                        if (isPromise(returnValue)) {
                            try {
                                setLoading(true);
                                await returnValue;
                                setTimeout(() => {
                                    setLoading(false);
                                }, 500);
                            } catch (e) {
                                setLoading(false);
                                throw e;
                            }
                        }
                    }
                }}
            />
        </span>
    );
};
const Button = styled(Buttons) <{ props: IProps }>`
  width: ${({ width }: IProps) => (width ? width : 'auto')}px;
  height: ${({ height }: IProps) => (height ? height : 40)}px;
  margin: ${({ margin }: IProps) => (margin ? "none" : "0 0 0 8px")};
  font-size: 1em;
  border-radius: 4px;
`;
export default Button;
