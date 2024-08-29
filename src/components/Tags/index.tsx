import { TagContainer } from './styles'

export type Props = {
  children: string
  position?: 'top' | 'bottom'
}

export const Tag = ({ children, position = 'top' }: Props) => {
  return <TagContainer position={position}>{children}</TagContainer>
}

export default Tag
