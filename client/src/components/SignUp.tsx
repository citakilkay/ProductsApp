import { Button, Checkbox, Form, Input } from 'antd';

const SignUp = () => {
    const onFinish = () => {
        return;
    };
    const onFinishFailed = () => {
        return;
    };
    return (
        <Form className='auth-page__form'
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Password Again"
                name="passwordAgain"
                rules={[{ required: true, message: 'Please input your password again!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item className='tab-content__submit'>
                <Button type="primary" htmlType="submit" className='tab-content__btn'>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignUp;
