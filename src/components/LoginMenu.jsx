import { useState } from 'react';
import { Modal } from 'antd';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useModal } from '../context/ModalContext';

export default function LoginMenu() {
    const { modalMode, setModalMode, closeModal, openModal } = useModal();

  return (
    <>
      <button onClick={openModal}>Login</button>

      <Modal
        open={modalMode === 'login' || modalMode === 'register'}
        onCancel={() => setModalMode('close')}
        footer={null}
        centered
        closable
        className="custom-login-modal"
        zIndex={100}
      >
        {modalMode === 'login' && (
          <LoginForm
            switchToRegister={() => setModalMode('register')}
            closeModal={() => setModalMode('close')}
          />
        )}
        {modalMode === 'register' && (
          <RegisterForm
            switchToLogin={() => setModalMode('login')}
            closeModal={() => setModalMode('close')}
          />
        )}
      </Modal>
    </>
  );
}
