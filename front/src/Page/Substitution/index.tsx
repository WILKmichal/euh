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
  })
  
  const [Substitution, setSubstitution] = useState<any>([{

      brands: "",
      categories_tags: [],
      code: "",
      countries: "",
      image_url: "",
      ingredients_text: "",
      stores: "",
      _keywords: [],
  }])
  ;
  const fetchgetFoods = async () => {
    try {
      const data = { code: params.code };

      const infoFoods = await getFoodByCode(data);
      if (infoFoods.success === true) {
        // setFoods(infoFoods);
        setProducct(infoFoods);
        
        fetchgetSubstitut(infoFoods.product.compared_to_category)
      } else {
        // console.log("non");
      }
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchgetSubstitut = async (category: string) => {
    try {
      const data = { category: category };
      const infoFoods = await getFoods(data);
      if (infoFoods.success === true) {
        // setFoods(infoFoods);
        console.log(infoFoods);
      }else {
        const product: any[] = [];
        for (let index = 0; index < infoFoods.length; index++) {
          for (let i = 0; i < infoFoods[index].length; i++) {
            if (
              infoFoods[index][i].brands !== undefined &&
              infoFoods[index][i].code !== undefined
            ) {
              product.push(infoFoods[index][i]);
            }
          }
        }

        setSubstitution(product);
      }
    } catch (err) {
      // console.log(err);
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
            <SelectSubstitue Substitution={Substitution} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubstitutionPage;
