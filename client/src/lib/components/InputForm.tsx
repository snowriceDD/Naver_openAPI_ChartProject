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
                    <Form.Item style={{fontWeight: 700}} label="시작일자" name="startDate" required>
                        <DatePicker format="YYYY-MM-DD" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item style={{fontWeight: 700}} label="종료일자" name="endDate" required>
                        <DatePicker format="YYYY-MM-DD" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item style={{fontWeight: 700}} label="카테고리" name="category" required>
                        <Input />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item style={{fontWeight: 700}} label="키워드" name="keyword" required>
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={0}>
                <Col span={30}>
                    <Form.Item style={{fontWeight: 600}} label="Time Unit" name="timeUnit" colon={false} required>
                        <Select bordered={false}>
                            <Option value="date">Daily</Option>
                            <Option value="week">Weekly</Option>
                            <Option value="month">Monthly</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item style={{fontWeight: 600}} label="Ages" name="ages" colon={false} >
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
                    <Form.Item style={{fontWeight: 600}} label="Gender" name="gender" colon={false} >
                        <Select bordered={false}>
                            <Option value="m">Male</Option>
                            <Option value="f">Female</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item style={{fontWeight: 600}} label="Device" name="device" colon={false} >
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