import { ALPHACONSTANTS } from "../constants";

let bucket_list_ID = 2;
let cardID = 4;

const initialState = [
  {
    title: "example list",
    id: `list-${0}`,
    cards: [
      {
        id: `cards-${0}`,
        title: "my first card",
        video_url: "http://www.youtube.com/embed/M3fbyWaxiFw",
      },
      {
        id: `cards-${1}`,
        title: "my second card",
        video_url: "http://www.youtube.com/embed/TJ2X4dFhAC0?enablejsapi",
      },
    ],
  },
  {
    title: "example list 2",
    id: `list-${1}`,
    cards: [
      {
        id: `list-${3}`,
        title: "my third card",
        video_url: "http://www.youtube.com/embed/RStpHLOa7Yk?enablejsapi",
      },
    ],
  },
];

const bucketListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALPHACONSTANTS.ADD_LISTS:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${bucket_list_ID}`,
      };
      bucket_list_ID += 1;

      return [...state, newList];

    case ALPHACONSTANTS.ADD_CARD: {
      const newCard = {
        id: `list-${cardID}`,
        title: action.payload.title,
        video_url: action.payload.video_url,
      };

      cardID += 1;

      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;
    }
    case ALPHACONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIdIndexStart,
        droppableIdIndexEnd,
        draggableId,
        type,
      } = action.payload;

      const newState = [...state];

      // drag list
      if (type === "list") {
        const list = newState.splice(droppableIdIndexStart, 1);
        newState.splice(droppableIdIndexEnd, 0, ...list);

        return newState;
      }

      // same bucket list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIdIndexStart, 1);
        list.cards.splice(droppableIdIndexEnd, 0, ...card);
      }

      // another list
      if (droppableIdStart !== droppableIdEnd) {
        // finding list
        const listStart = state.find((list) => droppableIdStart === list.id);

        // getting card
        const card = listStart.cards.splice(droppableIdIndexStart, 1);

        // final list
        const listEnd = state.find((list) => droppableIdEnd === list.id);

        listEnd.cards.splice(droppableIdIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default bucketListReducer;
