import React from 'react';
import { Layout, Row, Col, Card } from 'antd';

const { Content } = Layout;

const MenuScreen = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '24px' }}>
        <Row gutter={[16, 16]}>
          {/* Sección de Sandwiches */}
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card title="Sandwiches" bordered={false}>
              Contenido de Sandwiches
            </Card>
          </Col>

          {/* Sección de Wraps */}
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card title="Wraps" bordered={false}>
              Contenido de Wraps
            </Card>
          </Col>

          {/* Sección de Panes */}
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card title="Panes" bordered={false}>
              Contenido de Panes
            </Card>
          </Col>

          {/* Sección de Promos */}
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card title="Promos" bordered={false}>
              Contenido de Promos
            </Card>
          </Col>

          {/* Sección de Proteínas */}
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card title="Proteínas" bordered={false}>
              Contenido de Proteínas
            </Card>
          </Col>

          {/* Sección de Ensaladas */}
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card title="Ensaladas" bordered={false}>
              Contenido de Ensaladas
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MenuScreen;