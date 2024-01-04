import styled from 'styled-components'

const Button = ({ children, ...rest }) => {
  return <StyleButton {...rest}>{children}</StyleButton>
}

export default Button

const StyleButton = styled.button`
  width: 10rem;
  height: 3rem;

  background-color: #262626;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  border-radius: 3rem;
`
