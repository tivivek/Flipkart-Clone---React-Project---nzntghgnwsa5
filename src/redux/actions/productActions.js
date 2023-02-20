import * as actionTypes from '../constants/productConstant';
import axios from "axios";

const URL = "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";

export const getProductDetails = (id) => async(dispatch)=>{
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`${URL}/${id}`);
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response})
    }
}