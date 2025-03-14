import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: DishProps[]
  isCartOpen: boolean
  isCheckout: boolean
}

const initialState: CartState = {
  items: [],
  isCartOpen: false,
  isCheckout: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{ dish: DishProps['dish']; restaurantId: number }>
    ) => {
      if (
        state.items.length > 0 &&
        state.items[0].restaurantId !== action.payload.restaurantId
      ) {
        state.items = []
      }

      const itemExistis = state.items.find(
        (item) => item.dish.id === action.payload.dish.id
      )

      if (!itemExistis) {
        state.items.push({
          dish: action.payload.dish,
          restaurantId: action.payload.restaurantId
        })
      } else {
        alert('O prato já foi adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.dish.nome !== action.payload
      )
    },
    clear: (state) => {
      state.items = []
    },
    openCart: (state) => {
      state.isCartOpen = true
    },
    close: (state) => {
      state.isCartOpen = false
    },
    checkout: (state) => {
      state.isCheckout = true
    },
    closeCheckout: (state) => {
      state.isCheckout = false
    }
  }
})

export const { add, remove, clear, openCart, close, checkout, closeCheckout } =
  cartSlice.actions
export default cartSlice.reducer
