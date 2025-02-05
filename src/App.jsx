import React from "react";
import { Card, Col, Layout, Row, Space, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import logo from "./assets/Untitled-1.png";
import { Content } from "antd/es/layout/layout";
import Sandwiches from "./components/sandwiches";
import Ensaladas from "./components/ensaladas";
import Promos from "./components/Promos";
import Panes from "./components/Panes";
import Proteinas from "./components/Proteinas";
import Wraps from "./components/Wraps";


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
        <Row gutter={[16, 16]} style={{ height: "48vh" }}>
          <Col
            span={12}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3 -mt-5 bg-white w-fit">
              <Title level={2} className="m-2">
                Sandwiches
              </Title>
            </div>

            <div className="flex m-2 text-2xl">
              <Space
                direction="horizontal"
                className="flex flex-wrap justify-center"
              >
                <Sandwiches />
                <Sandwiches />
                <Sandwiches />
                <Sandwiches />
                <Sandwiches />
                <Sandwiches />
                <Sandwiches />
                <Sandwiches />
              </Space>
            </div>
          </Col>
          <Col
            span={6}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3 -mt-5 bg-white w-fit">
              <Title level={2} className="m-2">
                Ensaladas
              </Title>
            </div>

            <div className="flex m-2 text-xl">
              <Space
                direction="horizontal"
                className="flex flex-wrap justify-center"
              >
                <Ensaladas />
                <Ensaladas />
                <Ensaladas />
                <Ensaladas />
                <Ensaladas />
                <Ensaladas />
                <Ensaladas />
                <Ensaladas />
                <Ensaladas />
                <Ensaladas />
              </Space>
            </div>
          </Col>
          <Col
            span={6}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3 -mt-5 bg-white w-fit">
              <Title level={2} className="m-2">
                Promos
              </Title>
            </div>
            <div className="flex m-2 text-2xl">
              <Space
                direction="horizontal"
                className="flex flex-wrap justify-center"
              >
                <Promos/>
                <Promos/>
                <Promos/>
                <Promos/>
                <Promos/>
                <Promos/>
                <Promos/>
                <Promos/>
              </Space>
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ height: "48vh" }}>
          <Col
            span={6}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3 -mt-5 bg-white w-fit">
              <Title level={2} className="m-2">
                Panes
              </Title>
            </div>
            <div className="flex m-2 text-2xl">
              <Space
                direction="horizontal"
                className="flex flex-wrap justify-center"
              >
                <Panes/>
                <Panes/>
                <Panes/>
                <Panes/>
                <Panes/>
                <Panes/>
                <Panes/>
                <Panes/>
              </Space>
            </div>
          </Col>
          <Col
            span={6}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3 -mt-5 bg-white w-fit">
              <Title level={2} className="m-2">
                Proteinas
              </Title>
            </div>
            <div className="flex m-2 text-2xl">
              <Space
                direction="horizontal"
                className="flex flex-wrap justify-center"
              >
                <Proteinas/>
                <Proteinas/>
                <Proteinas/>
                <Proteinas/>
                <Proteinas/>
                <Proteinas/>
                <Proteinas/>
                <Proteinas/>
              </Space>
            </div>
          </Col>
          <Col
            span={12}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3 -mt-5 bg-white w-fit">
              <Title level={2} className="m-2">
                Wraps
              </Title>
            </div>
            <div className="flex m-2 text-2xl">
              <Space
                direction="horizontal"
                className="flex flex-wrap justify-center"
              >
                <Wraps/>
                <Wraps/>
                <Wraps/>
                <Wraps/>
                <Wraps/>
                <Wraps/>
                <Wraps/>
                <Wraps/>
              </Space>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MenuScreen;
