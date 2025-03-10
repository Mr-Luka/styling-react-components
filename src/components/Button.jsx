import {styled} from 'styled-components'

const ButtonStyle = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #deb40b;
  border-radius: 6px;
  border: none;

  &:hover {
  background-color: #f0920e;
}
`

export default function Button ({children, ...props}){
    return (
        <ButtonStyle {...props}>{children}</ButtonStyle>
    )
}