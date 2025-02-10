import { Layout, Row, Col, Typography } from "antd"
import { Content } from "antd/es/layout/layout"
import Sandwiches from "./components/sandwiches"
import Ensaladas from "./components/ensaladas"
import Promos from "./components/Promos"
import Panes from "./components/Panes"
import Proteinas from "./components/Proteinas"
import Wraps from "./components/Wraps"

const { Title } = Typography

const MenuScreen = () => {
  return (
    <Layout className="menu-layout">
      <Content>
        <Row gutter={[16, 16]} style={{ height: "48vh" }}>
          <Col span={12} className="menu-card sandwich-card">
            <Title level={2} className="menu-title text-start">
              <span role="img" aria-label="sandwich">
                🥪
              </span>{" "}
              Sandwiches
            </Title>
            <div className="menu-content">
              <Sandwiches />
            </div>
          </Col>
          <Col span={6} className="menu-card salad-card">
            <Title level={2} className="menu-title">
              <span role="img" aria-label="salad">
                🥗
              </span>{" "}
              Ensaladas
            </Title>
            <div className="menu-content">
              <Ensaladas />
            </div>
          </Col>
          <Col span={6} className="menu-card promo-card">
            <Title level={2} className="menu-title">
              <span role="img" aria-label="party">
                🎉
              </span>{" "}
              Promos
            </Title>
            <div className="menu-content">
              <Promos />
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ height: "48vh" }}>
          <Col span={6} className="menu-card bread-card">
            <Title level={2} className="menu-title">
              <span role="img" aria-label="bread">
                🍞
              </span>{" "}
              Panes
            </Title>
            <div className="menu-content">
              <Panes />
            </div>
          </Col>
          <Col span={6} className="menu-card protein-card">
            <Title level={2} className="menu-title">
              <span role="img" aria-label="meat">
                🥩
              </span>{" "}
              Proteinas
            </Title>
            <div className="menu-content">
              <Proteinas />
            </div>
          </Col>
          <Col span={12} className="menu-card wrap-card">
            <Title level={2} className="menu-title">
              <span role="img" aria-label="wrap">
                🌯
              </span>{" "}
              Wraps
            </Title>
            <div className="menu-content">
              <Wraps />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default MenuScreen

