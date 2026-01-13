import { ProgressBar } from ".";
import { StepBasicInfo } from "../../registration/step-basic-info";
import { StepCredentials } from "../../registration/step-credentials";
import { StepSkillCanTeach } from "../../registration/step-skill-can-teach";
import type { Props } from "./type";
import s from "./register.module.css";
import { AuthorizationDescriptions } from "../authorization-descriptions";
import { AuthorizationWrapper } from "../authorization-wrapper";

export const RegisterUI = ({
  currentStep,
  formData,
  updateData,
  goToStep,
  handleSubmit,
  isSubmitting,
}: Props) => {
  return (
    <AuthorizationWrapper>
      <ProgressBar currentStep={currentStep} />

      <div className={s.content}>
        <div className={s.stepRegister}>
          {currentStep === 1 && (
            <StepCredentials
              onNext={() => goToStep(2)}
              onChange={(data) => updateData("stepCredentials", data)}
              currentStep={currentStep}
            />
          )}

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

        <AuthorizationDescriptions currentStep={currentStep} />
      </div>
    </AuthorizationWrapper>
  );
};
