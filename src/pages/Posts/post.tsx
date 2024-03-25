import React from "react";
import HeaderComponent from "../../components/header";
import { Col, Layout, Row, Tag, Typography, Avatar } from "antd";
import { Content } from "antd/es/layout/layout";
import { UserOutlined } from "@ant-design/icons";
import { posts } from "../Home/home";
const { Title, Paragraph } = Typography;
const SinglePost: React.FC = () => {
  return (
    <>
      <Layout>
        <HeaderComponent />
        <Content style={{ padding: "0 48px" }}>
          <div style={{ padding: 24 }}>
            <Row justify="center">
              <Col xs={24} sm={20} md={16} lg={16}>
                {posts.slice(0, 1).map((post) => (
                  <div className="post-info" key={post.id}>
                    <Tag color={post.tag.color}>{post.tag.name}</Tag>
                    <Title>{post.title}</Title>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Avatar size="small" icon={<UserOutlined />} />
                      <p style={{ paddingLeft: 5 }}>Avatar</p>
                      <p style={{ paddingLeft: 10 }}>March 19,2024</p>
                    </div>
                    <div className="post-img" style={{ width: "100%" }}>
                      <img
                        style={{ width: "100%", height: 400 }}
                        src={post.image}
                        alt={post.title}
                      />
                    </div>
                    <div
                      className="post-content"
                      style={{ marginTop: 10,  }}
                    >
                      <Paragraph>
              {post.content && (
                <span dangerouslySetInnerHTML={{ __html: post.content }} />
              )}
            </Paragraph>
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </>
  );
};
export default SinglePost;
