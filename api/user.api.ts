import axios from "axios";

const api_url = process.env.API_URL;

export const getProfile = async () => {
  const storage_name = process.env.STORAGE;
  if (storage_name) {
    const storage_token = localStorage.getItem(storage_name);

    const res = await axios.get(api_url + "/user/get-profile", {
      headers: {
        Authorization: storage_token,
      },
    });

    return res.data;
  }

  return false;
};
