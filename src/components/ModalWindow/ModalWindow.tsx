import { useEffect, useRef } from 'react';
import CustomButton from 'components/Buttons/CustomButton';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ModalWindowProps {
  title: string;
  subtitle?: string;
  submitButtonText?: string;
  closeButtonContent?: React.ReactNode;
  onSubmit: () => void;
  onClose: () => void;
  backDropStyle?: string;
  classNames?: string;
  isOpenModal: boolean;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  title,
  subtitle,
  submitButtonText,
  closeButtonContent,
  backDropStyle,
  classNames,
  onClose,
  onSubmit,
  isOpenModal,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const updateModalState = (isOpenModal: boolean, modalElement: HTMLDialogElement | null) => {
    if (isOpenModal && modalElement && !modalElement.open) {
      modalElement.showModal();
    } else if (!isOpenModal && modalElement && modalElement.open) {
      modalElement.close();
    }
  };

  useEffect(() => {
    const modalElement = modalRef.current;
    updateModalState(isOpenModal, modalElement);
  }, [isOpenModal]);

  return (
    <>
      <div
        className={twMerge(
          clsx(
            'fixed inset-0 left-1/2 top-0 z-50 w-full translate-x-[-50%] rounded-xl backdrop-blur-lg transition-opacity duration-300',
            {
              'opacity-100': isOpenModal,
              'pointer-events-none opacity-0': !isOpenModal,
            },
          ),
          backDropStyle,
        )}
      ></div>
      <dialog
        ref={modalRef}
        id="my_modal_1"
        className={twMerge(
          clsx(
            'modal flex w-60 flex-col items-end justify-end rounded-xl px-6 pb-6 pt-9 transition-opacity',
            {
              'opacity-100': isOpenModal,
              'pointer-events-none opacity-0': !isOpenModal,
            },
          ),
          classNames,
        )}
      >
        <form method="dialog" onClick={onClose}>
          <button className="btn absolute right-3 top-2 rounded-full p-2 text-black outline-none transition-all delay-150 duration-150 ease-in hover:text-white">
            {closeButtonContent}
          </button>
        </form>
        <div className="modal-box flex flex-col">
          <p className="flex flex-col gap-6 pb-7 text-center text-black">
            <span className="default-title-class">{title}</span> {/* Default styling for title */}
            <span>{subtitle}</span>
          </p>
          <CustomButton
            onClick={onSubmit}
            className="border-none bg-button_accent px-8 py-4 outline-transparent transition-all delay-300 duration-300 ease-linear hover:bg-gradient-to-r hover:from-button_hover_l hover:to-button_hover_r hover:delay-300"
          >
            {submitButtonText}
          </CustomButton>
          <div className="modal-action"></div>
        </div>
      </dialog>
    </>
  );
};

export default ModalWindow;
