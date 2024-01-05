import styled from 'styled-components'
import Button from './components/button'
import { useOpenModal } from './hooks/use-open-modal'
const App = () => {
  const { onOpenModal } = useOpenModal()
  return (
    <RootWrapper>
      <Button
        onClick={() => {
          onOpenModal()
        }}
      >
        열려라!
      </Button>
    </RootWrapper>
  )
}
export default App

const RootWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`
