'use client'

import React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ModalProps {
  title : string
  discription : string
  isOpen : boolean
  onClose : () => void
  children? : React.ReactNode
}

const Modal : React.FC<ModalProps> = ({
  title,
  discription,
  isOpen,
  onClose,
  children
}) => {
  const onChange = (open : boolean) => {
    if(!open) {
      onClose()
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {discription}
          </DialogDescription>
        </DialogHeader>
        <div>
          {children}
        </div>
  </DialogContent>
    </Dialog>
  )
}

export default Modal