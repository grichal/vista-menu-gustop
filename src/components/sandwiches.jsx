import { useState, useEffect } from "react";
import { getSandwiches } from "../firebase/api";
import { Card, Tag, Typography, Divider, Space, Carousel } from "antd";
import { Image } from "antd";

const { Title, Text } = Typography;

const Sandwiches = () => {
  const [sandwiches, setSandwiches] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await getSandwiches();
        setSandwiches(data);
        console.log(data);
      } catch (error) {
        console.error("error loading data", error);
        throw error;
      }
    };
    getdata();
  }, []);

  // Función para dividir el array en grupos de 4
  const chunkArray = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
  };

  // Agrupamos los sándwiches en páginas de 4 elementos
  const sandwichPages = chunkArray(sandwiches, 4);

  return (
    <div className="container mx-full px-4 py-8">
      <Carousel  autoplay autoplaySpeed={5000} dots={{ className: "custom-dots" }} className="[&_.slick-dots_li]:bg-gray-500 [&_.slick-dots_.slick-active]:bg-yellow-400">
        {sandwichPages.map((page, pageIndex) => (
          <div key={pageIndex}>
            <Space
              direction="horizontal"
              size="large"
              className="flex justify-center gap-6"
            >
              {page.map((data, index) => (
                <Card
                  key={index}
                  hoverable
                  className="w-full max-w-xs max-h-xm overflow-hidden"
                  cover={
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={data.imagen || "/placeholder.svg"}
                        preview={false}
                        className="w-full h-full object-cover"
                      />
                      <Title
                        level={4}
                        className="absolute bottom-2 left-2 !text-white !m-0"
                        style={{ color: "white" }}
                      >
                        {data.nombre.toUpperCase()}
                      </Title>
                    </div>
                  }
                >
                  <div className="mb-3">
                    {data.ingredientes.map((ingredient, index) => (
                      <Tag key={index} className="mr-1 mb-1">
                        {ingredient.ingrediente}
                      </Tag>
                    ))}
                  </div>
                  <Divider className="my-2" />
                  <div className="flex justify-between items-center">
                    <div>
                      <Text type="secondary" className="text-xs">
                        Tamaño 8"
                      </Text>
                      <br />
                      <Text strong>${data.price6}</Text>
                    </div>
                    <Divider type="vertical" className="h-8" />
                    <div>
                      <Text type="secondary" className="text-xs">
                        Tamaño 12"
                      </Text>
                      <br />
                      <Text strong>${data.price12}</Text>
                    </div>
                  </div>
                </Card>
              ))}
            </Space>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Sandwiches;
