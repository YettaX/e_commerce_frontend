import { createContext, useContext, useState } from "react";

const modalContext = createContext();

export function ModalProvider({ children }) {
  const [modalMode, setModalMode] = useState("close"); // close, login, register

  const openModal = () => setModalMode("login");
  const closeModal = () => setModalMode("close");

  return (
    <modalContext.Provider value={{ modalMode, setModalMode, openModal, closeModal }}>
      {children}
    </modalContext.Provider>
  );
}

export function useModal() {
  return useContext(modalContext);
}
