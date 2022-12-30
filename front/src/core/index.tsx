import jwt_decode from "jwt-decode";
const SERVER_URL = "http://127.0.0.1:8081/api";

const postData = async (url: any, data?: any, method?: any) => {
  const rep = await fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      "Content-Type": "application/json",
    },
  });
  const json = await rep.json();

  if (rep.status === 403) {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  } else {
    return json;
  }
};

const postDataNoToken = async (url: any, data?: any, method?: any) => {
  const rep = await fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await rep.json();
  return json;
};

const getData = async (url: any, method?: any) => {
  const rep = await fetch(url, {
    method: method,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  const json = await rep.json();

  if (rep.status === 403) {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  } else {
    return json;
  }
};

const register = async (data: any, redirection?: any) => {
  const LOGIN_ENDPOINT = `${SERVER_URL}/users`;
  try {
    const method = "POST";
    const data_JSON = await postDataNoToken(LOGIN_ENDPOINT, data, method);

    if (data_JSON.success === true) {
      localStorage.setItem("access_token", data_JSON.token);
      return { success: true, message: "utilisateur créé" };
    } else if (data_JSON.success === false) {

      return { success: false, message: "Un de vos champs n'est pas bon" };
    }
  } catch (e) {
    console.log(e);
    return { success: false, message: "probleme pour joindre l'api" };
  }
};

const login = async (data: any, redirection?: any) => {
  const LOGIN_ENDPOINT = `${SERVER_URL}/login`;
  try {
    const method = "POST";
    const data_JSON = await postDataNoToken(LOGIN_ENDPOINT, data, method);
    if (data_JSON.success === true) {
      localStorage.setItem("access_token", data_JSON.token);
      window.location.href = "/categorie";
      return { success: true, message: "utilisateur connecté" };
    } else if (data_JSON.success === false) {
      return { success: false, message: "Un de vos champs n'est pas bon" };
    }
  } catch (e) {
    console.log(e);
    return { success: false, message: "probleme pour joindre l'api" };
  }
};

const getCategory = async () => {
  const LOGIN_ENDPOINT = `${SERVER_URL}/categories`;
  try {
    const data_JSON = await getData(LOGIN_ENDPOINT);
    return data_JSON;
  } catch (e) {
    console.log(e);
    return { success: false, message: "probleme pour joindre l'api" };
  }
};

const getFoods = async (data: any) => {
  const LOGIN_ENDPOINT = `${SERVER_URL}/productByCatego/${data.category}`;
  try {
    const data_JSON = await getData(LOGIN_ENDPOINT);
    return data_JSON;
  } catch (e) {
    console.log(e);
    return { success: false, message: "probleme pour joindre l'api" };
  }
};

const getFoodByCode = async (data: any) => {
  const LOGIN_ENDPOINT = `${SERVER_URL}/productByCode/${data.code}`;
  try {
    const data_JSON = await getData(LOGIN_ENDPOINT);
    return data_JSON;
  } catch (e) {
    console.log(e);
    return { success: false, message: "probleme pour joindre l'api" };
  }
};

const PostSubstitu = async (data: any, redirection?: any) => {
  const LOGIN_ENDPOINT = `${SERVER_URL}/products`;
  try {
    const method = "POST";
    const data_JSON = await postData(LOGIN_ENDPOINT, data, method);
    if (data_JSON.success === true) {
      // localStorage.setItem("access_token", data_JSON.token);
      // window.location.href = "/home";
      // return data_JSON;
      return { success: true, message: "substitu créé" };
    } else {
      return { success: false, message: "Un de vos champs n'est pas bon" };
    }
  } catch (e) {
    console.log(e);
    return { success: false, message: "probleme pour joindre l'api" };
  }
};

const getUser = async () => {
  try {
    const token: any = localStorage.getItem("access_token");
    var decoded: any = jwt_decode(token);
    const LOGIN_ENDPOINT = `${SERVER_URL}/user/${decoded.id}`;
    const data_JSON = await getData(LOGIN_ENDPOINT);

    return data_JSON;
  } catch (e) {
    console.log(e);
    return { success: false, message: "probleme pour joindre l'api" };
  }
};


const getProduct = async () => {
  const LOGIN_ENDPOINT = `${SERVER_URL}/product`;
  try {
    const data_JSON = await getData(LOGIN_ENDPOINT);
    return data_JSON;
  } catch (e) {
    console.log(e);
    return { success: false, message: "probleme pour joindre l'api" };
  }
};


const DeleteProduct = async (data: any) => {
  const LOGIN_ENDPOINT = `${SERVER_URL}/deleteProduct/${data}`;
  try {
    const method = "DELETE";
    const data_JSON = await postData(LOGIN_ENDPOINT, data, method);
    if (data_JSON.success === true) {
      return { success: true, message: "delete" };
    } else {
      return { success: true, message: "delete" };
    }
  } catch (e) {
    console.log(e);
    return { success: false, message: "probleme pour joindre l'api" };
  }
};



export {
  DeleteProduct,
  register,
  login,
  getCategory,
  getFoods,
  getFoodByCode,
  PostSubstitu,
  getUser,
  getProduct
};
