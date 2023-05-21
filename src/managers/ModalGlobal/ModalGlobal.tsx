import React, { useImperativeHandle, useState } from 'react'
import Modal from 'react-native-modal'

import { ModalProps } from './type'
import { modalRef } from './ModalManager'

const ModalGlobal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalProps, setModalProps] = useState<ModalProps>()

  const showModal = (modalContent: ModalProps) => {
    setModalProps(modalContent)
    setIsOpen(true)
  }

  const hideModal = () => {
    setModalProps(undefined)
    setIsOpen(false)
  }

  const handleCancel = () => {
    if (modalProps?.onCancel) {
      modalProps?.onCancel()
    } else {
      hideModal()
    }
  }

  useImperativeHandle(modalRef, () => ({
    showModal,
    hideModal,
  }))

  return (
    <Modal isVisible={isOpen} onBackdropPress={handleCancel}>
      {modalProps?.content}
    </Modal>
  )
}

export default ModalGlobal
