import { ALPHACONSTANTS } from "../constants";

export const addcard = (listID, title, video_url) => {
  return {
    type: ALPHACONSTANTS.ADD_CARD,
    payload: { title, video_url, listID },
  };
};
