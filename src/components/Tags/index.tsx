import { TagContainer } from "./styles"

export type Props = {
  children: string
  fontSize: string
  position?: 'top' | 'bottom'
}

export const Tag = ({ children, fontSize, position = 'top' }: Props) => {
  return <TagContainer fontSize={fontSize} position={position}>{children}</TagContainer>
}

export default Tag
