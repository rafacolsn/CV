import axios from "axios";

const auth =
  "https://api.badgr.io/o/token?username=raphcolson@gmail.com&password=GVQ10opà3a";

const authentification = async () => {
  const resp = await axios.post(auth);
  return resp.data;
};

const api = "https://api.badgr.io/v2/backpack/assertions";

const connexion = async () => {
  const res = await authentification();
  const response = await axios.get(api, {
    headers: { Authorization: `Bearer ${res.access_token}` }
  });
  console.log(response.data.result[0]);
  return response.data;
};

const badgeName = async () => {
  const resp = await connexion();
}

export { badgeName, connexion };
