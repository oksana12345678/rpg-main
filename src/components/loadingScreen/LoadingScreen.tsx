import { Registration } from 'components/Images/Images';
import styles from './LoadingScreen.module.css';
import { clsx } from 'clsx';

const LoadingScreen = () => {
  return (
    <div className="bg-main_bg_color flex h-screen w-screen flex-col items-center justify-center gap-5">
      <span className={clsx('h-16 text-4xl font-bold tracking-wider', styles['animate-fade'])}>
        IT-Academy
      </span>

      <Registration className={clsx('h-[340px] w-[250px]', styles['animate-scale'])} />
    </div>
  );
};

export default LoadingScreen;
