import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Props as DishProps } from '../../components/MenuCard'

type CartState = {
  items: DishProps[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
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
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
