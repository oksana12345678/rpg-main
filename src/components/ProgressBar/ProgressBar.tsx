const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="relative h-[2px] w-full rounded-full bg-button_two">
    <div
      className="absolute left-0 top-0 h-full rounded-full bg-ux_ui_design"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

export default ProgressBar;
