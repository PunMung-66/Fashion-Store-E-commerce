import axios, { AxiosError } from "axios";

const baseUrl = "https://api.storefront.wdb.skooldio.dev";

export const getData = async (url, options = {}) => {
  try {
    const res = await axios.get(`${baseUrl}/${url}`, options);
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.log("axios error");
      throw err;
    }
    if (err instanceof Error) {
      console.log("client error");
      throw err;
    }
    console.log("unknown error");
    throw err;
  }
};

// in validate body return valid body or Error
// thus checking body before fire http req
export const postData = async (url, body, options = {}) => {
  if (body instanceof Error) {
    console.log("body validation error");
    console.error(body);
    return;
  }
  try {
    const res = await axios.post(`${baseUrl}/${url}`, body, options);
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.log("axios error");
      throw err;
    }
    if (err instanceof Error) {
      console.log("client error");
      throw err;
    }
    console.log("unknown error");
    throw err;
  }
};

export const deleteData = async (url, options = {}) => {
  if (body instanceof Error) {
    console.log("body validation error");
    console.error(body);
    return;
  }
  try {
    const res = await axios.delete(`${baseUrl}/${url}`, options);
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.log("axios error");
      throw err;
    }
    if (err instanceof Error) {
      console.log("client error");
      throw err;
    }
    console.log("unknown error");
    throw err;
  }
};

export const updateData = async (url, body, options = {}) => {
  if (body instanceof Error) {
    console.log("body validation error");
    console.error(body);
    return;
  }
  try {
    const res = await axios.patch(`${baseUrl}/${url}`, body, options);
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.log("axios error");
      throw err;
    }
    if (err instanceof Error) {
      console.log("client error");
      throw err;
    }
    console.log("unknown error");
    throw err;
  }
};
