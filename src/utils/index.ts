export const getTotalPrice = (items: DishProps[]) => {
  return items.reduce((accum, current) => {
    return (accum += current.dish.preco)
  }, 0)
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
