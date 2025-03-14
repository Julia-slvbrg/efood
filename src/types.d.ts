declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      id: number
      foto: string
      preco: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

declare type DishProps = {
  restaurantId: number
  dish: {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }
}
