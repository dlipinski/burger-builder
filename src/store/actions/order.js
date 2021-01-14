import order from '../../components/Order/Order';
import * as actionsTypes from './actionsTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
	return {
		type: actionsTypes.PURCHASE_BURGER_SUCCESS,
		orderId: id,
		orderData: orderData,
	};
};

export const purchaseBurgerFail = (error) => {
	return {
		type: actionsTypes.PURCHASE_BURGER_FAIL,
		error: error,
	};
};

export const purchaseBurgerStart = (orderData) => {
	return (dispatch) => {
		axios
			.post('/orders.json', orderData)
			.then((response) => {
				dispatch(purchaseBurgerSuccess(respons.data, orderData));
			})
			.catch((error) => {
				dispatch(purchaseBurgerFail(error));
			})
			.finally(() => this.setState({ loading: false }));
	};
};
