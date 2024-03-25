import React, { ChangeEvent } from "react";
import { Rule } from "antd/lib/form";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import styles from "./loginStyle.module.css";
import * as yup from "yup";
const { Text, Title, Link } = Typography;

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email is invalid")
    .required("Please input your name"),
  password: yup.string().required("Please input your password"),
});

const yupEmailSync: Rule = {
  validator: async (_, value) => {
    await loginSchema.validateSyncAt("email", { email: value });
  },
};
const yupPasswordSync: Rule = {
  validator: async (_, value) => {
    await loginSchema.validateSyncAt("password", { password: value });
  },
};

export default function LoginForm() {
  const [form] = Form.useForm();

  console.log(loginSchema);

  const onFinish = (values: ChangeEvent<HTMLInputElement>) => {
    console.log("Received values of form: ", values);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5em"
            height="5em"
            viewBox="0 0 256 256"
          >
            <circle cx="128" cy="128" r="128" fill="#ffe121" />
            <path d="M122.4 60.8v86.4c-24 0-43.2-19.2-43.2-43.2c0-24 19.2-43.2 43.2-43.2m11.2 134.4v-86.4c24 0 43.2 19.2 43.2 43.2c0 23.613-18.586 42.58-42.043 43.185zM154 60.8c11.2 0 20.4 9.2 20.4 20.4s-9.2 20.4-20.4 20.4s-20.4-9.2-20.4-20.4s9.2-20.4 20.4-20.4m-52 93.6c11.2 0 20.4 9.2 20.4 20.4s-9.2 20.4-20.4 20.4s-20.4-9.2-20.4-20.4s9.2-20.4 20.4-20.4" />
          </svg>
          <Title className={styles.title}>Login</Title>
          <Text className={styles.text}>
            Welcome back! Please enter your details below to sign in.
          </Text>
        </div>
        <Form
          form={form}
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item name="email" rules={[yupEmailSync]}>
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[yupPasswordSync]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a style={{ float: "right" }} href="">
              Forgot password?
            </a>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block={true} type="primary" htmlType="submit">
              Log in
            </Button>
            <div className={styles.footer}>
              <Text className={styles.text}>Dont have an account?</Text>{" "}
              <Link href="/signup">Sign up now</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
