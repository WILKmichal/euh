import React, { useState } from "react";
import { Col, Container, Row, Toast, ToastContainer } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SelectFood from "../../components/SelectFood";
import SelectSubstitue from "../../components/SelectSubstitue";
import { getFoods, getFoodByCode, PostSubstitu } from "../../core";
import "./index.css";

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

  const [Substitution, setSubstitution] = useState<any>([
    {
      brands: "",
      categories_tags: [],
      code: "",
      countries: "",
      image_url: "",
      ingredients_text: "",
      stores: "",
      _keywords: [],
    },
  ]);

  const [showNotif, setshowNotif] = useState(false);
  const [messagePost, setmessagePost] = useState({
    success: false,
    message: "",
  });

  const NewPoduct = async (substitution: string, producsubstitution: any) => {
    const datas = {
      sub_code: Product.code,
      code: substitution,
      brands: producsubstitution.brands,
      keywords: producsubstitution._keywords.toString(),
      categories_tags: producsubstitution.categories_tags.toString(),
      countries: producsubstitution.countries,
      image_url: producsubstitution.image_url,
      ingredients_text: producsubstitution.ingredients_text,
      user_id: 0,
    };

    try {
      const infoPost = await PostSubstitu(datas);
      if (infoPost.success === true) {
        setmessagePost({
          success: infoPost.success,
          message: infoPost.message,
        });
        setshowNotif(true);
      } else {
        setmessagePost({
          success: infoPost.success,
          message: infoPost.message,
        });
        setshowNotif(true);
      }
    } catch (err) {
      console.log(err);
    }

    console.log(datas);
  };

  const fetchgetFoods = async () => {
    try {
      const data = { code: params.code };

      const infoFoods = await getFoodByCode(data);
      if (infoFoods.success === true) {
        // setFoods(infoFoods);
        setProducct(infoFoods);

        fetchgetSubstitut(infoFoods.product.compared_to_category);
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
      } else {
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
      <ToastContainer className="notif">
        <Toast
          show={showNotif}
          onClose={() => setshowNotif(false)}
          bg={messagePost.success ? "success" : "danger"}
        >
          <Toast.Header>
            <strong className="me-auto">substitution du produit {Product.product.brands}</strong>
          </Toast.Header>
          <Toast.Body>{messagePost.message}</Toast.Body>
        </Toast>
      </ToastContainer>
      <Container style={{ marginTop: "5%" }}>
        <Row>
          <Col>
            <SelectFood Product={Product} fetchgetFoods={fetchgetFoods} />
          </Col>
          <Col>
            <SelectSubstitue
              NewPoduct={NewPoduct}
              Substitution={Substitution}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubstitutionPage;
