import { useCallback, useEffect, useRef } from "react";

// make API calls and pass the returned data via dispatch
export const useFetch = (data, apiCall, dispatch) => {
	useEffect(() => {
		dispatch({ type: "FETCHING_PRODUCTS", fetching: true });
		fetch(apiCall)
			.then((data) => data.json())
			.then((products) => {
				dispatch({ type: "STACK_PRODUCTS", products });
				dispatch({ type: "FETCHING_PRODUCTS", fetching: false });
			})
			.catch((e) => {
				// handle error
				dispatch({ type: "FETCHING_PRODUCTS", fetching: false });
				return e;
			});
	}, [dispatch, apiCall, data.page]);
};

// infinite scrolling with intersection observer
export const useInfiniteScroll = (scrollRef, dispatch) => {
	const scrollObserver = useCallback(
		(node) => {
			new IntersectionObserver((entries) => {
				entries.forEach((en) => {
					if (en.intersectionRatio > 0) {
						dispatch({ type: "ADVANCE_PAGE" });
					}
				});
			}).observe(node);
		},
		[dispatch]
	);

	useEffect(() => {
		if (scrollRef.current) {
			scrollObserver(scrollRef.current);
		}
	}, [scrollObserver, scrollRef]);
};

// lazy load with intersection observer
export const useLazyLoading = (productSelector, products) => {
	const productObserver = useCallback((node) => {
		const intObs = new IntersectionObserver((entries) => {
			entries.forEach((en) => {
				if (en.intersectionRatio > 0) {
					const currentProduct = en.target;
					const newProductSrc = currentProduct.dataset.src;

					// only swap out the source if the new url exists
					if (!newProductSrc) {
						console.error("Product source is invalid");
					} else {
						currentProduct.src = newProductSrc;
					}
					intObs.unobserve(node);
				}
			});
		});
		intObs.observe(node);
	}, []);

	const productRef = useRef(null);

	useEffect(() => {
		productRef.current = document.querySelectorAll(productSelector);

		if (productRef.current) {
			productRef.current.forEach((img) => productObserver(img));
		}
	}, [productObserver, productRef, productSelector, products]);
};
