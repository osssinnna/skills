import clsx from "clsx";
import s from "./progress-bar.module.css";

type Props = {
  currentStep: number;
};

export const ProgressBar = ({ currentStep }: Props) => {
  const steps: number[] = [1, 2, 3];

  return (
    <div className={s.progressBar}>
      <h2 className={s.stepTitle}>Шаг {currentStep} из 3</h2>

      {steps.map((step) => {
        return (
          <div
            key={step}
            className={clsx(
              s.step,
              currentStep >= step && s.active,
              currentStep === step && s.current
            )}
          >
            <div className={s.stepNumber}></div>
          </div>
        );
      })}
    </div>
  );
};
