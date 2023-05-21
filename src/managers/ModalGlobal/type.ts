export interface ModalProps {
  content: React.ReactNode
  onCancel?: () => void
}

export interface ModalMethods {
  showModal: (props: ModalProps) => void
  hideModal: () => void
}
