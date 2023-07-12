/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Row, Col, Form, Input, Button, DatePicker, Select } from "antd";
import {FormContainer} from './styled';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setTrendParams } from "../store/trendParamsSlice";
import { useEffect } from "react";
import moment from "moment";

const { Option } = Select;

interface InputFormProps {
    onSubmit: (params: {
        startDate: string;
        endDate: string;
        timeUnit: string;
        category: string;
        keyword: string;
        device: string;
        gender: string;
        ages: string[];
    }) => void;
}

export const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
    const trendParams = useSelector((state: RootState) => state.trendParams);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({
          startDate: moment(trendParams.startDate),
          endDate: moment(trendParams.endDate),
          timeUnit: trendParams.timeUnit,
          category: trendParams.category,
          keyword: trendParams.keyword,
          device: trendParams.device,
          gender: trendParams.gender,
          ages: trendParams.ages,
        });
      }, [trendParams, form]);
    
    const handleSubmit = (values: any) => {
        const submittedParams = {
            startDate: values.startDate.format("YYYY-MM-DD"),
            endDate: values.endDate.format("YYYY-MM-DD"),
            timeUnit: values.timeUnit,
            category: values.category,
            keyword: values.keyword,
            device: values.device,
            gender: values.gender,
            ages: values.ages,
          };
        dispatch(setTrendParams(submittedParams));
        onSubmit(submittedParams);
    };

    return (
        <FormContainer>
        <Form form={form} onFinish={handleSubmit} layout="inline" style={{ justifyContent: 'center'}}>
            <Row gutter={24}>
                <Col span={30}>
                    <Form.Item label="시작일자" name="startDate" required>
                        <DatePicker format="YYYY-MM-DD" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item label="종료일자" name="endDate" required>
                        <DatePicker format="YYYY-MM-DD" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item label="카테고리" name="category">
                        <Input />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item label="키워드" name="keyword">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={12}>
                <Col span={30}>
                    <Form.Item label="Time Unit" name="timeUnit" colon={false} required>
                        <Select bordered={false}>
                            <Option value="date">Daily</Option>
                            <Option value="week">Weekly</Option>
                            <Option value="month">Monthly</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item label="Ages" name="ages" colon={false} required>
                        <Select mode="multiple" bordered={false}>
                            <Option value="10">10대</Option>
                            <Option value="20">20대</Option>
                            <Option value="30">30대</Option>
                            <Option value="40">40대</Option>
                            <Option value="50">50대</Option>
                            <Option value="60">60대</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item label="Gender" name="gender" colon={false} required>
                        <Select bordered={false}>
                            <Option value="m">Male</Option>
                            <Option value="f">Female</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item label="Device" name="device" colon={false} required>
                        <Select bordered={false}>
                            <Option value="pc">PC</Option>
                            <Option value="mobile">Mobile</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        조회
                    </Button>
                </Form.Item>
            </Row>
        </Form>
        </FormContainer>
    );
};