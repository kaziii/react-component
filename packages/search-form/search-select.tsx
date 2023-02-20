import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useContext,
} from "react";
import { Form, Select, Modal, DatePicker } from "antd";
import "antd/lib/select/style/index";
import "antd/lib/modal/style/index";
import "antd/lib/date-picker/style/index";
import moment from "moment";
import type { SearchSelectProps } from "./search-form-types";
import { Context } from "./search-form";
const { RangePicker } = DatePicker;
const RenderRangePicker = ({
  value = [undefined, undefined],
  onChange,
}: {
  value?: any[];
  onChange?: (v: any) => any;
}) => {
  return (
    <RangePicker
      format={"YYYY-MM-DD"}
      value={[moment(value[0]), moment(value[1])]}
      style={{ width: "100%", height: 40, borderRadius: 4 }}
      onChange={(date) => {
        const newDateStart = date?.length
          ? date[0]?.format("YYYY-MM-DD")
          : undefined;
        const newDateEnd = date?.length
          ? date[1]?.format("YYYY-MM-DD")
          : undefined;
        void onChange?.([newDateStart, newDateEnd]);
      }}
    />
  );
};

function SearchSelect(
  {
    labelWidth,
    label,
    defaultValue,
    width,
    handleSearch,
    inputType,
    field,
    selectDater,
    selectDaterValue,
    placeholder,
    ...restProps
  }: SearchSelectProps,
  ref: any
) {
  const { form } = useContext(Context);
  const [modalShow, setModalShow] = useState(false);
  function handleOk() {
    setModalShow(false);
    form.setFieldsValue({
      [`${field}`]: form.getFieldValue([`${field}`])?.join(" ~ "),
    });
  }
  return (
    <section className="search-item">
      <Form.Item
        label={label}
        colon={false}
        name={field}
        getValueFromEvent={(value) => {
          if (selectDater && selectDaterValue == value) {
            setModalShow(true);
          } else {
            return value;
          }
        }}
      >
        <Select
          onChange={(value) => {}}
          style={{ height: 40, borderRadius: 4 }}
          placeholder={placeholder}
          {...restProps}
          allowClear
        />
      </Form.Item>
      <Modal
        open={modalShow}
        title={placeholder}
        width={650}
        onOk={handleOk}
        onCancel={() => {
          setModalShow(false);
        }}
      >
        <div>
          <Form.Item label={label} colon={false} name={field}>
            <RenderRangePicker />
          </Form.Item>
        </div>
      </Modal>
    </section>
  );
}

export default SearchSelect;
