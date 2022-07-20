import api from "../utils/api";

const getProductHighlight = () => {
	return api.httpGet("/api/products/highlight");
};

const getProduct = (id) => {
	return api.httpGet(`/api/products/${id}`);
};

export default { getProductHighlight, getProduct };
