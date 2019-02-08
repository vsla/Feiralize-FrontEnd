import _ from "lodash";
import data from '../assets/data/products.json'

export const contains = ({ title }, query) => {
  if (title.includes(query)) {
    return true;
  }

  return false;
};

export const getUsers = (limit = 20, query = "") => {
  return new Promise((resolve, reject) => {
    if (query.length === 0) {
      resolve(_.take(data, limit));
    } else {
      const formattedQuery = query.toLowerCase();
      const results = _.filter(data, user => {
        return contains(user, formattedQuery);
      });
      resolve(_.take(results, limit));
    }
  });
};

export default getUsers;