import React, { useState } from "react";
import HeaderComponent from "../../components/header";
import {
  TagsOutlined,
  UploadOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import {
  Row,
  Col,
  Card,
  Input,
  Select,
  Tag,
  Form,
  type FormProps,
  Button,
  Layout,
  Upload,
  message,
  Modal,
} from "antd";
const { TextArea } = Input;
import type { SelectProps, GetProp, UploadProps, UploadFile } from "antd";
type TagRender = SelectProps["tagRender"];
const options: SelectProps["options"] = [
  { value: "gold", label: "Tag1" },
  { value: "blue", label: "Technology" },
  { value: "green", label: "Travel" },
  { value: "cyan", label: "Tag2" },
];
const tagRender: TagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 4 }}
    >
      {label}
    </Tag>
  );
};
type FieldType = {
  titlepost?: string;
  contentpost?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const CreatePostPage: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);

    setPreviewTitle(
      file.name ||
        (file.url ? file.url.substring(file.url.lastIndexOf("/") + 1) : "")
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  const handleReset = () => setFileList([]);

  return (
    <>
      <Layout>
        <HeaderComponent />
        <Row justify="center">
          <Col style={{}} xs={24} sm={20} md={16} lg={12}>
            <div style={{paddingTop: 20}} className="post-container">
              <Card title="New post">
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  autoComplete="off"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Card size="small" title="Title post">
                    <Form.Item<FieldType>
                      name="titlepost"
                      rules={[
                        {
                          required: true,
                          message: "Please input title post",
                        },
                      ]}
                    >
                      <TextArea
                        variant="filled"
                        showCount
                        maxLength={1000}
                        placeholder="Enter your title post"
                      />
                    </Form.Item>
                  </Card>
                  <Card
                    size="small"
                    title="Content post"
                    style={{ marginTop: 20 }}
                  >
                    <Form.Item<FieldType>
                      name="contentpost"
                      rules={[
                        {
                          required: true,
                          message: "Please input content post",
                        },
                      ]}
                    >
                      <TextArea
                        variant="filled"
                        showCount
                        placeholder="Enter your content post"
                        style={{ height: 120, resize: "none" }}
                      />
                    </Form.Item>
                  </Card>
                  <Card
                    size="small"
                    title="Tags post"
                    style={{ marginTop: 20 }}
                  >
                    <Select
                      variant="filled"
                      placeholder={
                        <div>
                          <TagsOutlined />
                          <span style={{ paddingLeft: 5 }}>
                            Add your post tags
                          </span>
                        </div>
                      }
                      mode="multiple"
                      tagRender={tagRender}
                      style={{ width: "100%" }}
                      options={options}
                    />
                  </Card>
                  <Card
                    size="small"
                    title="Add images"
                    style={{ marginTop: 20 }}
                    extra={
                      <Button
                        type="default"
                        icon={<ReloadOutlined />}
                        onClick={handleReset}
                      >
                        Reset
                      </Button>
                    }
                  >
                    <Upload
                      beforeUpload={beforeUpload}
                      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                      multiple
                      maxCount={12}
                    >
                      {fileList.length >= 12 ? null : uploadButton}
                    </Upload>

                    <Modal
                      open={previewOpen}
                      title={previewTitle}
                      footer={null}
                      onCancel={handleCancel}
                    >
                      <img
                        alt="example"
                        style={{ width: "100%" }}
                        src={previewImage}
                      />
                    </Modal>
                  </Card>
                  <Form.Item
                    wrapperCol={{ offset: 22, span: 16 }}
                    style={{ margin: 10 }}
                  >
                    <Button type="primary" htmlType="submit">
                      Post
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default CreatePostPage;
