import React from "react";
import { Col, Layout, Row, Space, Typography } from "antd";
import logo from "./assets/Untitled-1.png";
import background from "./assets/328.jpg";
import { Content } from "antd/es/layout/layout";
import Sandwiches from "./components/sandwiches";
import Ensaladas from "./components/Ensaladas"
import Promos from "./components/Promos";
import Panes from "./components/Panes";
import Proteinas from "./components/Proteinas";
import Wraps from "./components/Wraps";

const { Title } = Typography;

// #fffbeb → bg-amber-100
// #fffbf2 → bg-yellow-100
// #fffcf3 → bg-yellow-50
// #fffbf3 → bg-amber-50
// #fffcec → bg-orange-50

const MenuScreen = () => {
  return (
    <Layout
      className="flex flex-wrap-revers"
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#fffbeb",
      }}
    >
      <Content>
        <Row gutter={[16, 16]} style={{ height: "62vh" }}>
          <Col
            span={19}
            className=" bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3 justify-between">
              <Title level={2} className="flex ">
                <p className="m-2 text-yellow-700">🥪 Sandwiches</p>
              </Title>
              <img src={logo} className="h-25 mr-10" alt="" />
            </div>
            <div className="flex -mt-5 m-2 text-2xl">

                <Sandwiches />
            </div>
          </Col>

          <Col
            span={5}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md w-full"
          >
            <div className="flex m-3  w-fit">
              <Title level={2}>
                <p className="m-2 text-teal-600">🌯 Wraps</p>
              </Title>
            </div>
            <div className="flex m-2 text-2xl">
              <Wraps />
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ height: "34vh" }}>
          <Col
            span={6}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3">
              <Title level={2}>
                <p className="m-2 text-green-600 w-full">🥗 Ensaladas</p>
              </Title>
            </div>
            <div className="flex m-2 text-xl">
              <Ensaladas />
            </div>
          </Col>
          <Col
            span={6}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3  w-fit">
              <Title level={2}>
                <p className="m-2 text-orange-600">🍞 Panes</p>
              </Title>
            </div>
            <div className="flex m-2 text-2xl">
              <Panes />
            </div>
          </Col>
          <Col
            span={6}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl font-bold shadow-md"
          >
            <div className="flex m-3  w-fit">
              <Title level={2}>
                <p className="m-2 text-rose-700">🥩 Proteinas</p>
              </Title>
            </div>
            <div className="flex m-2 text-2xl">
              <Proteinas />
            </div>
          </Col>
          <Col
            span={6}
            className="bg-white flex border border-gray-300 rounded-lg text-center text-xl shadow-md"
          >
            <div className="flex m-3 w-fit">
              <Title level={2} className="flex">
                <p className="m-2 text-red-500">🎉 Promos</p>
                <p className="text-xs m-2 text-red-500 self-center">sandwich + Jugo 16oz</p>
              </Title>
            </div>
            <div className="flex m-2 text-2xl">
              <Promos />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MenuScreen;
