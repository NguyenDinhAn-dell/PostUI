import React, { ChangeEvent } from "react";
import { Rule } from "antd/lib/form";
import { Button, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./signUpStyle.module.css";

import * as yup from "yup";

const { Text, Title, Link } = Typography;

const signUpSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Email is invalid")
    .required("Please input your name"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: yup.string().required("Confirm Password is required"),
});

const SignUpForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: ChangeEvent<HTMLInputElement>) => {
    console.log("Received values of form: ", values);
  };

  const yupNameSync: Rule = {
    validator: async (_, value) => {
      await signUpSchema.validateSyncAt("name", { name: value });
    },
  };
  const yupEmailSync: Rule = {
    validator: async (_, value) => {
      await signUpSchema.validateSyncAt("email", { email: value });
    },
  };

  const yupPasswordSync: Rule = {
    validator: async (_, value) => {
      await signUpSchema.validateSyncAt("password", { password: value });
    },
  };

  const yupPasswordConfirmSync: Rule = {
    validator: async (_, value) => {
      await signUpSchema.validateSyncAt("confirmPassword", {
        confirmPassword: value,
      });
    },
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
          <Title className={styles.title}>Sign up</Title>
          <Text className={styles.text}>
            Welcome! Please enter your details below to sign up.
          </Text>
        </div>
        <Form
          form={form}
          name="normal_login"
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item name="name" rules={[yupNameSync]}>
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item name="email" rules={[yupEmailSync]}>
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" hasFeedback rules={[yupPasswordSync]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              yupPasswordConfirmSync,
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm password"
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block={true} type="primary" htmlType="submit">
              Sign Up
            </Button>
            <div className={styles.footer}>
              <Text className={styles.text}>Already have an account?</Text>{" "}
              <Link href="/login">Log in</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default SignUpForm;
