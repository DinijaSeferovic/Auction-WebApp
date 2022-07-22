import { useEffect } from "react";
import actionTypes from "../utils/actionTypes";

// make API calls and pass the returned data via dispatch
export const useFetch = (data, apiCall, dispatch) => {
	useEffect(() => {
		dispatch({ type: actionTypes.FETCHING_PRODUCTS, fetching: true });
		fetch(apiCall)
			.then((data) => data.json())
			.then((products) => {
				dispatch({ type: actionTypes.STACK_PRODUCTS, products });
				dispatch({
					type: actionTypes.FETCHING_PRODUCTS,
					fetching: false,
				});
			})
			.catch((e) => {
				dispatch({
					type: actionTypes.FETCHING_PRODUCTS,
					fetching: false,
				});
				return e;
			});
	}, [dispatch, apiCall, data.page]);
};
