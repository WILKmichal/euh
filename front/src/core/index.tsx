const SERVER_URL = "http://localhost:8080";

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

  return json;
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
  return json;
};

const register = async (data: any, redirection?: any) => {
  const LOGIN_ENDPOINT = `${SERVER_URL}/auth/register`;
  try {
    const method = "POST";
    const data_JSON = await postDataNoToken(LOGIN_ENDPOINT, data, method);
    if (data_JSON.success === true) {
      localStorage.setItem("access_token", data_JSON.token);
      window.location.href = "/home";
      return data_JSON;
    } else if (data_JSON.success === "false") {
      return data_JSON;
    }
  } catch (e) {
    console.log(e);
    return { success: false, message: "probleme pour joindre l'api" };
  }
};

const login = async (data: any, redirection?: any) => {
  const LOGIN_ENDPOINT = `${SERVER_URL}/auth/login`;
  try {
    const method = "POST";
    const data_JSON = await postDataNoToken(LOGIN_ENDPOINT, data, method);
    if (data_JSON.success === true) {
      localStorage.setItem("access_token", data_JSON.token);
      window.location.href = "/home";
      return data_JSON;
    } else if (data_JSON.success === "false") {
      return data_JSON;
    }
  } catch (e) {
    console.log(e);
    return { success: false, message: "probleme pour joindre l'api" };
  }
};

export { register, login };
