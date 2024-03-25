import React from "react";
import HeaderComponent from "../../components/header";

import {
  Layout,
  Row,
  Col,
  Card,
  Tag,
  Avatar,
  Carousel,
  Typography,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Paragraph, Title, Text } = Typography;
const { Content, Footer } = Layout;
const { Meta } = Card;

export const posts = [
  {
    id: 1,
    title: "Bãi tắm Quy Nhơn",
    image:
      "https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-binh-dinh-1.jpg?tr=dpr-2,w-675",
    tag: {
      name: "Travel",
      color: "purple",
    },
    describe:
      "Nằm giữa lòng thành phố biển xinh đẹp cùng tên, bãi tắm Quy Nhơn được thiên nhiên cực ưu ái với bãi cát vàng dài lấp lánh dọc bờ biển cùng những rặng núi thấp bao xung quanh. Trước đây, bãi tắm này là nơi nuôi trồng thủy - hải sản của người dân địa phương và mới chỉ đi vào khai thác du lịch từ 2014.",
    content:
      "Bãi Tắm Quy Nhơn, một trong những điểm đến du lịch nổi tiếng tại Việt Nam, không chỉ nổi tiếng với vẻ đẹp tự nhiên hoang sơ mà còn là điểm đến lý tưởng cho những chuyến du lịch nghỉ dưỡng thú vị. Với bờ cát trắng mịn, biển xanh trong vàng, cùng với hàng dừa bóng mát,<br/> Bãi Tắm Quy Nhơn hứa hẹn mang đến những trải nghiệm đáng nhớ cho du khách Khám phá vẻ đẹp tự nhiên: <br/>Bãi Tắm Quy Nhơn nằm ở thành phố Quy Nhơn, tỉnh Bình Định, nằm giữa hai ngọn đồi nhỏ. Với bãi cát trắng dài vô tận, biển xanh trong vắt, và không khí trong lành, đây là nơi lý tưởng để bạn thư giãn và tận hưởng không gian yên bình bên gia đình và bạn bè.<br/>Hoạt động vui chơi và giải trí: <br/>Bãi Tắm Quy Nhơn không chỉ là nơi tuyệt vời để thư giãn trên bờ biển mà còn cung cấp nhiều hoạt động giải trí hấp dẫn. Du khách có thể tham gia vào các hoạt động như lướt sóng, đi xe đạp dạo quanh bãi biển, câu cá, hay thậm chí là tham gia các tour khám phá vùng lân cận để khám phá vẻ đẹp của Quy Nhơn.<br/>Ẩm thực địa phương: <br/>Một điều không thể bỏ qua khi đến Bãi Tắm Quy Nhơn là thưởng thức ẩm thực địa phương độc đáo và hấp dẫn. Tại đây, du khách có thể thưởng thức các món hải sản tươi ngon, những món ăn đặc sản của vùng biển cùng với hương vị đậm đà và độc đáo.<br/>Nơi lưu trú sang trọng:<br/>Bãi Tắm Quy Nhơn cung cấp nhiều lựa chọn nơi lưu trú từ các biệt thự sang trọng, resort cao cấp đến những homestay truyền thống mang đậm nét văn hóa dân dã. Dù bạn là người muốn thư giãn hoàn toàn trong không gian riêng tư hay muốn trải nghiệm cuộc sống dân dã cùng người dân địa phương, Bãi Tắm Quy Nhơn đều có thể đáp ứng được mọi nhu cầu của du khách.<br/>Khám phá các điểm tham quan lân cận:<br/>Ngoài việc tận hưởng bãi biển và các hoạt động vui chơi tại Bãi Tắm Quy Nhơn, du khách còn có cơ hội khám phá các điểm tham quan lân cận như Đảo Kỳ Co, Eo Gió, nhà thờ mái đá Long Khánh và nhiều điểm đến khác.<br/>Với những trải nghiệm đa dạng và không gian thiên nhiên tuyệt vời, Bãi Tắm Quy Nhơn chắc chắn sẽ là điểm đến lý tưởng cho những chuyến du lịch nghỉ dưỡng tuyệt vời của bạn. Hãy lên kế hoạch và khám phá vẻ đẹp của Quy Nhơn ngay hôm nay!",
  },
  {
    id: 2,
    title: "Bãi tắm Hoàng Hậu",
    image:
      "https://statics.vntrip.vn/data-v2/data-guide/img_content/1472612180_ghenh-rang-binh-dinh-1.jpg",
    tag: {
      name: "Travel",
      color: "purple",
    },
    describe:
      "Sở dĩ nó có cái tên bãi tắm Hoàng Hậu là vì đây đã từng là nơi nghỉ dưỡng riêng của vua Bảo Đại và vị hoàng hậu Nam Phương. Hoàng hậu đã bị vẻ đẹp của cảnh vật, thiên nhiên ở đây hấp dẫn nên đã chọn nơi này để dừng chân, nghỉ dưỡng. Các khách sạn ở bãi tắm Hoàng Hậu là một lựa chọn tuyệt vời để bạn có thể đến đây nghỉ dưỡng và gần với biển trời Bình Định rồi còn gì!",
  },
  {
    id: 3,
    title:
      "Nvidia unveils flagship AI chip, the B200, aiming to extend dominance",
    image:
      "https://www.reuters.com/resizer/v2/LD2DDZZCUBJ2LERDOL54VF6SOE.jpg?auth=d17957dcf4d6e5ee86210e57ab6c6999c915a61c1321f0626bb39bdf4ec15a22&width=960&quality=80",
    tag: {
      name: "Technology",
      color: "blue",
    },
    describe:
      "Nvidia Chief Executive Jensen Huang on Monday kicked off his company's annual developer conference with a slew of announcements designed to keep the chip maker in a dominant position in the artificial-intelligence industry.",
  },
  {
    id: 4,
    title: "huh",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvFU_AnIX6jHx36q1FkYVtXvBLRhemCX5mg&usqp=CAU",
    tag: {
      name: "Animal",
      color: "green",
    },
    describe: "huhh huhh huhh",
  },
  {
    id: 5,
    title: "huh",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvFU_AnIX6jHx36q1FkYVtXvBLRhemCX5mg&usqp=CAU",
    tag: {
      name: "Animal",
      color: "green",
    },
    describe: "huhh huhh huhh",
  },
  {
    id: 6,
    title: "huh",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvFU_AnIX6jHx36q1FkYVtXvBLRhemCX5mg&usqp=CAU",
    tag: {
      name: "Animal",
      color: "green",
    },
    describe: "huhh huhh huhh",
  },
];
const HomePage: React.FC = () => {
  const formatDate = (): string => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <Layout>
        <HeaderComponent />
        <Content style={{ padding: "0 48px" }}>
          <div style={{ padding: 24 }}>
            <Row justify="center">
              <Col style={{}} xs={24} sm={20} md={12} lg={16}>
                <div className="post-container">
                  <Carousel autoplay>
                    {posts.slice(0, 3).map((post) => (
                      <div key={post.id}>
                        <div
                          style={{
                            borderRadius: 10 ,
                            width: "100%",
                            paddingTop: "60%",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          <img
                  
                            style={{
                              
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            alt=""
                            src={post.image}
                          />
                          <div
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              background: "rgba(0, 0, 0, 0.5)",
                            }}
                          >
                            <Col
                              span={22} offset={1}
                              style={{
                                color: "#fff",
                                height: "50%",
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                              }}
                            >
                              <Tag color={post.tag.color}> {post.tag.name}</Tag>
                              <div>
                                <Title level={2} style={{ color: "#fff" }}>
                                  {post.title}
                                </Title>
                                <Text
                                 
                                  type="secondary"
                                  style={{ color: "#fff" }}
                                >
                                  {post.describe}
                                </Text>
                              </div>
                            </Col>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>

                <div className="post-body">
                  <h2>Latest post</h2>
                  <Row gutter={[16, 16]}>
                    {posts.map((post) => (
                      <Col
                        span={8}
                        style={{}}
                        key={post.id}
                        xs={24}
                        sm={12}
                        md={10}
                        lg={8}
                      >
                        <Card
                          hoverable
                          style={{ height: "100%", position: "relative" }}
                          cover={
                            <div
                              style={{
                                borderRadius: 10 ,
                                width: "100%",
                                paddingTop: "60%",
                                position: "relative",
                                overflow: "hidden",
                              }}
                            >
                              <img
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                                alt=""
                                src={post.image}
                              />
                            </div>
                          }
                        >
                          <Tag
                            color={post.tag.color}
                            style={{ marginBottom: 5 }}
                          >
                            {post.tag.name}
                          </Tag>
                          <Meta
                            title={
                              <a href="#">
                                <span style={{ wordWrap: "break-word" }}>
                                  {post.title}
                                </span>
                              </a>
                            }
                            description={
                              <div style={{ paddingBottom: 40 }}>
                                <Paragraph
                                  ellipsis={{
                                    rows: 2,
                                    expandable: true,
                                    symbol: "more",
                                  }}
                                  style={{ textAlign: "justify" }}
                                >
                                  {post.describe}
                                </Paragraph>
                                <div
                                  style={{
                                    position: "absolute",
                                    bottom: 0,
                                    width: "100%",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Avatar
                                      size="small"
                                      icon={<UserOutlined />}
                                    />
                                    <p style={{ paddingLeft: 5 }}>Avatar</p>
                                    <p style={{ paddingLeft: 10 }}>
                                      {formatDate()}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            }
                          />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default HomePage;
