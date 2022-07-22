const headers = { "content-type": "application/json" };

const httpGet = (endpoint) => {
	return fetch(endpoint, headers)
		.then((response) => handleResponse(response))
		.then((response) => response)
		.catch((error) => {
			console.error(error);
		});
};

const httpPost = (endpoint, data) => {
	return fetch(endpoint, {
		method: "post",
		body: data ? JSON.stringify(data) : null,
		headers,
	})
		.then((response) => handleResponse(response))
		.then((response) => response)
		.catch((error) => {
			console.error(error);
		});
};

const httpPut = (endpoint, data) => {
	return fetch(endpoint, {
		method: "put",
		body: data ? JSON.stringify(data) : null,
		headers,
	})
		.then((response) => handleResponse(response))
		.then((response) => response)
		.catch((error) => {
			console.error(error);
		});
};

const httpDelete = (endpoint, data) => {
	return fetch(endpoint, {
		method: "delete",
		headers,
	})
		.then((response) => handleResponse(response))
		.then((response) => response)
		.catch((error) => {
			console.error(error);
		});
};

const handleResponse = (response) => {
	if (!response.ok) {
		throw new Error(
			`This is an HTTP error: The status is ${response.status}`
		);
	}
	return response.json();
};

export default { httpGet, httpPost, httpPut, httpDelete };
