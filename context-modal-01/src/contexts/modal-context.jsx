import { createContext, useState } from 'react'
import Modal from '../components/modal'

export const ModalContext = createContext({
  onOpenModal: () => {},
})

const initialValue = {
  isOpen: false,
  text: '',
}

export const ModalProvider = ({ children }) => {
  const [modalProps, setModalProps] = useState(initialValue)

  const onOpenModal = () => {
    setModalProps((prev) => {
      return { ...prev, isOpen: true }
    })
  }
  const closeModal = () => {
    setModalProps((prev) => {
      return { ...prev, isOpen: false }
    })
  }
  return (
    <ModalContext.Provider value={{ onOpenModal }}>
      {children}
      <Modal {...{ modalProps }} onClose={closeModal} />
    </ModalContext.Provider>
  )
}
