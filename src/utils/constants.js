export const APP_ID = process.env.REACT_APP_APP_ID;
export const APP_KEY = process.env.REACT_APP_APP_KEY
export const API_ROOT = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`;

export const API_URLS = {
  query: (mealName) => `${API_ROOT}&q=${mealName}`,
};
