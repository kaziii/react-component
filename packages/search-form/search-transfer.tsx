import React, {
    useState,
    forwardRef,
    useImperativeHandle,
    useEffect,
    useCallback,
} from "react";
import { Select, Checkbox, Col, Row, Modal, Form } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { ISearTransfer, IOptions } from "./search-form-types";

const { Option } = Select;

const TransferItem = ({ }: ISearTransfer) => {
    const [form] = Form.useForm()
    return (
        <Modal >
            <Form form={form}>
                <Form.Item name="checkbox-group" label="Checkbox.Group">
                    <Checkbox.Group>
                        <Row>
                            <Col span={8}>
                                <Checkbox value="A" style={{ lineHeight: '32px' }}>
                                    A
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="B" style={{ lineHeight: '32px' }} disabled>
                                    B
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="C" style={{ lineHeight: '32px' }}>
                                    C
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="D" style={{ lineHeight: '32px' }}>
                                    D
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="E" style={{ lineHeight: '32px' }}>
                                    E
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="F" style={{ lineHeight: '32px' }}>
                                    F
                                </Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </Form.Item>
            </Form>

        </Modal >
    )
}


export default React.memo(TransferItem);
