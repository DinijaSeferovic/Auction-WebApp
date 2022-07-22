import api from "../utils/api";

const getMainCategories = () => {
	return api.httpGet("/api/categories/main");
};

export default { getMainCategories };
