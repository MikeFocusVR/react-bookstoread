import axios from "axios";

export const GetDefaultBooks = (user) => {
  return axios.get(
    "https://25xwqiuh6b.execute-api.eu-west-1.amazonaws.com/prod?user=" + user
  );
};

export const SaveData = (user, _books) => {
    console.log("Trying to save data");
    
    const books = JSON.stringify(_books);
    return axios.post(
      "https://25xwqiuh6b.execute-api.eu-west-1.amazonaws.com/prod",
      {
        user,
        books,
      }
    );
};

export const SaveData2 = async (user, _books) => {
  try {    
    const books = JSON.stringify(_books);
    const response = await axios.post(
      "https://25xwqiuh6b.execute-api.eu-west-1.amazonaws.com/prod",
      {
        user,
        books,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
