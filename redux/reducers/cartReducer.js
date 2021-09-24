import { ADD_TO_CART, REMOVE_FROM_CART, SELECTED_RESTAUTRANT, UPDATE_ITEM_IN_CART } from "../actionsType";

const initialState = {
  selectedItems: [],
  selectedRestaurant: {}
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:{
      if(action.payload.checkboxValue){
        return {
          ...state,
          selectedItems: [...state.selectedItems, action.payload]
        }
      }else {
        return state;
      }
    }
     

    case REMOVE_FROM_CART:
      return {
        ...state,
        selectedItems: [
          ...state.selectedItems.filter(
            (item) => item.id !== action.payload.id
          ),
        ]
      };

    case SELECTED_RESTAUTRANT:
      return {
        ...state,
        selectedRestaurant: action.payload
      }

    // case UPDATE_ITEM_IN_CART: {
    //   const restaurantSelectedItems = state.selectedItems.filter(item => item.restaurantName === action.payload.restaurantName);
    //   const itemsToUpdate = restaurantSelectedItems.filter(item => item.id === action.payload.id);
    //   const updatedItem = {
    //     ...itemsToUpdate[0],
    //     price: action.payload.price,
    //     quantity: action.payload.quantity
    //   };

    //   return {
    //     ...state,
    //     selectedItems: [...state.selectedItems, updatedItem]
    //   }
    // }
    
    default:
      return state;
  }
};

export default cartReducer;