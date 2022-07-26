import api from "../utils/api";

const getProductImage = (id) => {
	return api.httpGet(`/api/images/${id}`);
};

export default { getProductImage };
