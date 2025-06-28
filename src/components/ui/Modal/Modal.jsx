import { useEffect, useRef } from "react";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  customStyles = {},
  closeOnEsc = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
  darkMode = false,
}) => {
  const modalRef = useRef(null);

  const baseStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: darkMode ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: "1rem",
    },
    modal: {
      backgroundColor: darkMode ? "#3f3f46" : "white",
      borderRadius: "0.5rem",
      maxWidth: "500px",
      width: "100%",
      maxHeight: "90vh",
      overflow: "auto",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 12px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      borderBottom: darkMode ? "1px solid #71717b" : "1px solid #eee",
    },
    title: {
      fontSize: "1.25rem",
    },
    closeButton: {
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer",
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
    },
    body: {
      padding: "1rem",
    },
  };

  const styles = {
    overlay: { ...baseStyles.overlay, ...customStyles.overlay },
    modal: { ...baseStyles.modal, ...customStyles.modal },
    header: { ...baseStyles.header, ...customStyles.header },
    title: { ...baseStyles.title, ...customStyles.title },
    closeButton: { ...baseStyles.closeButton, ...customStyles.closeButton },
    body: { ...baseStyles.body, ...customStyles.body },
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (closeOnEsc && e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, closeOnEsc]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={handleOverlayClick}>
      <div
        ref={modalRef}
        style={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        tabIndex={-1}
      >
        {(title || showCloseButton) && (
          <div style={styles.header}>
            {title && (
              <h2 id="modal-title" style={styles.title}>
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                style={styles.closeButton}
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}
        <div style={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
