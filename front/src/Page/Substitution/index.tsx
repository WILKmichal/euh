import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SelectFood from "../../components/SelectFood";
import SelectSubstitue from "../../components/SelectSubstitue";
import { getFoods, getFoodByCode } from "../../core";

const SubstitutionPage = (props: any) => {
  const params = useParams();

  const [Product, setProducct] = useState<any>({
    code: "",
    product: {
      brands: "",
      categories_tags: [],
      code: "",
      countries: "",
      image_url: "",
      ingredients_text: "",
      stores: "",
      _keywords: [],
      success: "",
    },
  });
  const fetchgetFoods = async () => {
    try {
      const data = { code: params.code };

      const infoFoods = await getFoodByCode(data);
      if (infoFoods.success === true) {
        // setFoods(infoFoods);
        setProducct(infoFoods);
        // fetchgetSubstitut(infoFoods)
      } else {
        console.log("non");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchgetSubstitut = async (category: string) => {
    try {
      const data = { code: category };

      const infoFoods = await getFoods(data);
      if (infoFoods.success === true) {
        // setFoods(infoFoods);
        console.log(infoFoods);
      } else {
        console.log(infoFoods);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container style={{ marginTop: "5%" }}>
        <Row>
          <Col>
            <SelectFood Product={Product} fetchgetFoods={fetchgetFoods} />
          </Col>
          <Col>
            <SelectSubstitue Product={Product} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubstitutionPage;
