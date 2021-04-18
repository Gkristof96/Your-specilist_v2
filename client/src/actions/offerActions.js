import {
  OFFER_CREATE_REQUEST,
  OFFER_CREATE_SUCCESS,
  OFFER_CREATE_FAIL,
} from "../constants/offerConstans";
import axios from "axios";

export const createOffer = (offer) => async (dispatch) => {
  try {
    dispatch({
      type: OFFER_CREATE_REQUEST,
    });

    await axios.post("/api/offer", offer);

    dispatch({
      type: OFFER_CREATE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: OFFER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
