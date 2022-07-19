import React, { useReducer, useRef } from "react";
import {
	useFetch,
	useInfiniteScroll,
	useLazyLoading,
} from "../../../hooks/customHooks";
import Product from "../Product/Product";
import "./ProductsTab.scss";

const ProductsTab = ({ apiProducts }) => {
	const productReducer = (state, action) => {
		switch (action.type) {
			case "STACK_PRODUCTS":
				return {
					...state,
					products: state.products.concat(action.products),
				};
			case "FETCHING_PRODUCTS":
				return { ...state, fetching: action.fetching };
			default:
				return state;
		}
	};

	const pageReducer = (state, action) => {
		switch (action.type) {
			case "ADVANCE_PAGE":
				return { ...state, page: state.page + 1 };
			default:
				return state;
		}
	};

	const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 });
	const [productData, productDispatch] = useReducer(productReducer, {
		products: [],
		fetching: true,
	});

	let bottomBoundaryRef = useRef(null);
	let apiCall = `${apiProducts}?page=${pager.page}&limit=8`;
	useFetch(pager, apiCall, productDispatch);
	useLazyLoading("product_container_item", productData.products);
	useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

	return (
		<div>
			<div className={"product_container"}>
				{productData.products.map((product) => (
					<li key={product.id}>
						<div className={"product_container_item"}>
							<Product product={product} imgSize="small" />
						</div>
					</li>
				))}
			</div>

			<div id="page-bottom-boundary" ref={bottomBoundaryRef}></div>
		</div>
	);
};

export default ProductsTab;
