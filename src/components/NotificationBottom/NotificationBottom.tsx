import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';

interface ModalMessageProps {
  title?: string;
  subtitle?: React.ReactNode;
  submitButtonText?: string;
  closeButtonContent?: React.ReactNode;
  onSubmit?: () => void;
  onClose: () => void;
  backDropStyle?: string;
  className?: string;
  isOpenModal: boolean;
  subtitleStyle?: string;
  titleStyle?: string;
  desc?: React.ReactNode;
  descStyle?: string;
}

const NotificationBottom: React.FC<ModalMessageProps> = ({
  title,
  subtitle,
  closeButtonContent,
  className,
  onClose,
  isOpenModal,
  subtitleStyle,
  backDropStyle,
  titleStyle,
  desc,
  descStyle,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpenModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenModal, onClose]);

  return (
    <>
      {isOpenModal && (
        <div
          className={clsx(
            'fixed inset-0 z-40 h-full bg-opacity-50 transition-opacity duration-300',
            { 'opacity-100': isOpenModal, 'opacity-0': !isOpenModal },
            backDropStyle,
          )}
          onClick={onClose}
        />
      )}
      <div
        className={clsx(
          'fixed bottom-[-20px] left-1/2 -translate-x-1/2 transform items-center justify-start rounded-xl transition-all duration-500',
          {
            'z-50 translate-y-0 opacity-100': isOpenModal,
            'z-[-1] translate-y-20 opacity-0': !isOpenModal,
          },
          className,
        )}
      >
        <div ref={modalRef} className="modal-box flex w-full flex-col items-end">
          {closeButtonContent && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="rounded-full bg-transparent px-6 py-2 text-white"
            >
              {closeButtonContent}
            </button>
          )}
        </div>
        <h1 className={clsx('font-semibold', titleStyle)}>{title}</h1>
        <p className={clsx(' ', subtitleStyle)}>{subtitle}</p>
        <p className={clsx('', descStyle)}>{desc}</p>
      </div>
    </>
  );
};

export default NotificationBottom;
