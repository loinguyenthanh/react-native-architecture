import { createRef } from 'react'
import { ModalMethods, ModalProps } from './type'

export const modalRef = createRef<ModalMethods>()

export function showModal(modalContent: ModalProps) {
  modalRef.current?.showModal(modalContent)
}

export function hideModal() {
  modalRef.current?.hideModal()
}
