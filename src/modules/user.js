import axios from "axios";

const fetchUserData = async () => {
  let userData = await axios.request('GET /users');
  return userData.data.users;
};

export { fetchProductData };
