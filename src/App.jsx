import React from "react";
import { Layout, Typography, Row, Col } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const sections = [
  { title: "Sándwiches", span: 12 },
  { title: "Wraps", span: 6 },
  { title: "Promos", span: 6 },
  { title: "Panes", span: 8 },
  { title: "Proteínas", span: 8 },
  { title: "Ensaladas", span: 8 },
];

const MenuScreen = () => {
  return (
    <Layout className="flex  flex-wrap-reverse" style={{ minHeight: "100vh", background: "#fff", padding: "20px" }}>
      <Content>
        <Row gutter={[16, 16]} style={{ height: "50vh" }}>
          <Col span={12} style={sectionStyle}>
            <Title level={2}>Sándwiches</Title>
          </Col>
          <Col span={6} style={sectionStyle}>
            <Title level={2}>Wraps</Title>
          </Col>
          <Col span={6} style={sectionStyle}>
            <Title level={2}>Promos</Title>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ height: "50vh" }}>
          <Col span={8} style={sectionStyle}>
            <Title level={2}>Panes</Title>
          </Col>
          <Col span={8} style={sectionStyle}>
            <Title level={2}>Proteínas</Title>
          </Col>
          <Col span={8} style={sectionStyle}>
            <Title level={2}>Ensaladas</Title>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

const sectionStyle = {
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #ddd",
  borderRadius: "8px",
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
};

export default MenuScreen;
