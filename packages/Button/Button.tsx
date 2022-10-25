import React, { useRef, useEffect, useState } from "react";
import { Button as AntButton } from "antd";
import { ButtonProps } from "./button-types";
import "antd/lib/button/style/index";

function isPromise(value: unknown): value is Promise<unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    "then" in value &&
    typeof (value as { then: unknown }).then === "function"
  );
}

const Button = (props: ButtonProps) => {
  const { onClick, loading: primitiveLoading, ...params } = props;
  const [loading, setloading] = useState<boolean>(false);
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
                setloading(true);
                await returnValue;
                setTimeout(() => {
                  setloading(false);
                }, 500);
              } catch (e) {
                setloading(false);
                throw e;
              }
            }
          }
        }}
      />
    </span>
  );
};
export default Button;
