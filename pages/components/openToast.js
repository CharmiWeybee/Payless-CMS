import { toast, Slide } from 'react-toastify';

export const openToast = (message, type) => {
  toast(message, {
    icon: true,
    type: type,
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    transition: Slide,
    draggable: true,
    closeButton: (
      <div className="align-items-center d-flex">
        <i className="fa fa-times"></i>
      </div>
    ),
    style: {
      zIndex: '99999999'
    }
  });
};