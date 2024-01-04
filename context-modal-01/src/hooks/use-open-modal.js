import { useContext } from 'react'
import { ModalContext } from '../contexts/modal-context'

export const useOpenModal = () => {
  const { onOpenModal } = useContext(ModalContext)
  return { onOpenModal }
}
