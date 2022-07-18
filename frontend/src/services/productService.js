import api from "../utils/api";

const getProductHighlight = () => {
	return api.httpGet("/api/products/highlight");
};

export default { getProductHighlight };
