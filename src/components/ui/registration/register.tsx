import { ProgressBar } from ".";
import { StepBasicInfo } from "../../registration/step-basic-info";
import { StepCredentials } from "../../registration/step-credentials";
import { StepSkillCanTeach } from "../../registration/step-skill-can-teach";
import type { Props } from "./type";
import s from "./register.module.css";
import light from "../../../assets/images/light-bulb.png";
import user from "../../../assets/images/user-info.png";
import board from "../../../assets/images/school-board.png";

export const RegisterUI = ({
  currentStep,
  formData,
  updateData,
  goToStep,
  handleSubmit,
  isSubmitting,
}: Props) => {
  return (
    <div className={s.multiStepRegister}>
      <div className={s.container}>
        <div className={s.progressBar}>
          <ProgressBar currentStep={currentStep} />
        </div>
        <div className={s.content}>
          <div className={s.stepRegister}>
            {currentStep === 1 && <StepCredentials onNext={() => goToStep(2)} />}

            {currentStep === 2 && (
              <StepBasicInfo
                data={formData.stepBasicInfo}
                onChange={(data) => updateData("stepBasicInfo", data)}
                onNext={() => goToStep(3)}
                onBack={() => goToStep(1)}
              />
            )}

            {currentStep === 3 && (
              <StepSkillCanTeach
                data={formData.stepSkillCanTeach}
                onChange={(data) => updateData("stepSkillCanTeach", data)}
                onSubmit={handleSubmit}
                onBack={() => goToStep(2)}
                isSubmitting={isSubmitting}
              />
            )}
          </div>
          <div className={s.registerDescription}>
            {currentStep === 1 && (
              <>
                <img src={light} className={s.images}></img>
                <div className={s.containerDescription}>
                  <h3 className={s.titleDescription}>Добро пожаловать в SkillSwap!</h3>
                  <p className={s.textDescription}>
                    Присоединяйтесь к SkillSwap и обменивайтесь знаниями и навыками с
                    другими людьми
                  </p>
                </div>
              </>
            )}
            {currentStep === 2 && (
              <>
                <img src={user} className={s.images}></img>
                <div className={s.containerDescription}>
                  <h3 className={s.titleDescription}>Расскажите немного о себе</h3>
                  <p className={s.textDescription}>
                    Это поможет другим людям лучше вас узнать, чтобы выбрать для обмена
                  </p>
                </div>
              </>
            )}
            {currentStep === 3 && (
              <>
                <img src={board} className={s.images}></img>
                <div className={s.containerDescription}>
                  <h3 className={s.titleDescription}>
                    Укажите, чем вы готовы поделиться
                  </h3>
                  <p className={s.textDescription}>
                    Так другие люди смогут увидеть ваши предложения и предложить вам
                    обмен!
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
