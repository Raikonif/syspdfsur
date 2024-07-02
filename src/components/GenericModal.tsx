import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onClickConfirm: () => Promise<void>;
}

function GenericModal({ children, onClickConfirm, isOpen, onClose, title }: Props) {
  const handleAction = async () => {
    try {
      await onClickConfirm();
    } catch (error) {
      console.error("Error al ejecutar la acción:", error);
    } finally {
      onClose();
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} backdrop={"blur"}>
        <ModalContent>
          {(onCloseCase) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onCloseCase}>
                  Cerrar
                </Button>
                <Button color="secondary" onPress={handleAction}>
                  Confirmar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default GenericModal;
