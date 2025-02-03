import React from "react";
import { Card, Col, Layout, Row, Space, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import logo from "./assets/Untitled-1.png";
import { Content } from "antd/es/layout/layout";

const { Title } = Typography;

const menuData = {
  sandwiches: [
    {
      name: "Sándwich de Pollo",
      ingredients: "Pollo, lechuga, mayonesa",
      price: "$5.00",
    },
    {
      name: "Sándwich Vegetariano",
      ingredients: "Tomate, aguacate, lechuga",
      price: "$4.50",
    },
    {
      name: "Sándwich de Pavo",
      ingredients: "Pavo, lechuga, mostaza",
      price: "$5.50",
    },
    {
      name: "Sándwich de Atún",
      ingredients: "Atún, cebolla, mayonesa",
      price: "$4.80",
    },
  ],
  wraps: [
    {
      name: "Wrap de Pollo",
      ingredients: "Pollo, ensalada, salsa",
      price: "$6.00",
    },
    {
      name: "Wrap Vegetariano",
      ingredients: "Hummus, espinaca, pepino",
      price: "$5.50",
    },
  ],
  promos: [
    { name: "Combo Sándwich + Bebida", price: "$7.50" },
    { name: "Combo Wrap + Ensalada", price: "$8.00" },
  ],
  panes: [
    { name: "Pan de Ajo", price: "$2.00" },
    { name: "Pan Integral", price: "$2.50" },
  ],
  proteins: [
    { name: "Pollo Asado", price: "$4.00" },
    { name: "Carne de Res", price: "$5.00" },
  ],
  ensaladas: [
    { name: "Ensalada César", price: "$4.50" },
    { name: "Ensalada Griega", price: "$5.00" },
  ],
};

const MenuScreen = () => {
  return (
    <Layout
      className="flex  flex-wrap-reverse"
      style={{ minHeight: "100vh", background: "#fff", padding: "20px" }}
    >
      <Content>
        <Row gutter={[16, 16]} style={{ height: "50vh" }}>
          <Col
            span={12}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3">
              <Title level={2}>Sandwiches</Title>
            </div>

            <div className="flex m-2 text-2xl">
              <Space direction="vertical" size={16}>
                <Card
                  size="small"
                  title={
                    <>
                      <h1 className="text-2xl">sandwiches</h1>
                    </>
                  }
                  className="text-left"
                  style={{ width: 300 }}
                >
                  <ul className="list-disc pl-5">
      <li className="mb-2">
        <p>Card content</p>
      </li>
      <li className="mb-2">
        <p>Card content</p>
      </li>
      <li>
        <p>Card content</p>
      </li>
    </ul>
                </Card>
              </Space>
            </div>
          </Col>
          <Col
            span={6}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3">
              <Title level={2}>Ensaladas</Title>
            </div>
            <div></div>
          </Col>
          <Col
            span={6}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3">
              <Title level={2}>Promos</Title>
            </div>
            <div></div>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ height: "50vh" }}>
          <Col
            span={6}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3">
              <Title level={2}>Panes</Title>
            </div>
            <div></div>
          </Col>
          <Col
            span={6}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3">
              <Title level={2}>Proteínas</Title>
            </div>
            <div></div>
          </Col>
          <Col
            span={12}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3">
              <Title level={2}>wraps</Title>
            </div>
            <div></div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MenuScreen;
