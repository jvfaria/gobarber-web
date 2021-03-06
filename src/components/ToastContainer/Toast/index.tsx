import React, { useEffect } from 'react';
import {
  FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle,
} from 'react-icons/fi';
import { ToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';

interface ToastProps {
  toast: ToastMessage;
  style: object;
}
const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};
const Toast: React.FC<ToastProps> = ({ toast, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, toast.id]);

  return (
    <Container
      key={toast.id}
      hasdescription={!!toast.description}
      type={toast.type}
      style={style}
    >
      {icons[toast.type || 'info']}

      <div>
        <strong>{toast.title}</strong>
        {toast.description
          && <p>{toast.description}</p>}
        <button onClick={() => removeToast(toast.id)} type="button">

          <FiXCircle size={18} />
        </button>
      </div>

    </Container>
  );
};

export default Toast;
