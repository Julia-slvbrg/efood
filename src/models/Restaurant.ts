class Restaurant {
  placeName: string
  info: string[]
  image: string
  rate: string
  description: string
  id: number
  constructor(
    placeName: string,
    info: string[],
    image: string,
    rate: string,
    description: string,
    id: number
  ) {
    this.placeName = placeName
    this.info = info
    this.image = image
    this.rate = rate
    this.description = description
    this.id = id
  }
}

export default Restaurant
