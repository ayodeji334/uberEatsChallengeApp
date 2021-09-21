import { ADD_TO_CART, SELECTED_RESTAUTRANT } from "../actionsType";

  const defaultState = {
    selectedItems: { items: [], restaurantName: "" },
    selectedRestaurant: {}
  };
  
  const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_TO_CART: {
        let newState = { ...state };
  
        if (action.payload.checkboxValue) {
          console.log("ADD TO CART");
  
          newState.selectedItems = {
            items: [...newState.selectedItems.items, action.payload],
            restaurantName: action.payload.restaurantName,
          };
        } else {
          console.log("REMOVE FROM CART");
          newState.selectedItems = {
            items: [
              ...newState.selectedItems.items.filter(
                (item) => item.title !== action.payload.title
              ),
            ],
            restaurantName: action.payload.restaurantName,
          };
        }
        console.log(newState, "👉");
        return newState;
      }

      case SELECTED_RESTAUTRANT: 
        return {
          ...state,
          selectedRestaurant: action.payload
        }
  
      default:
        return state;
    }
  };
  
  export default cartReducer;