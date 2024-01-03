import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { meta } from "src/utils/meta";
import { dataPortfolio } from "src/utils/fakeData/portfolio";

import "./index.css";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        dataPortfolio.map(async (item) => {
          const imageModule = await item.image;
          return {
            image: imageModule.default, // Важно использовать .default
            description: item.description,
            link: item.link,
          };
        }),
      );
      setPortfolioData(data);
    };

    fetchData();
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {portfolioData.map((data) => {
            return (
              <div key={data.description} className="po_item">
                <img src={data?.image} alt={data.description} />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
export default Portfolio;
