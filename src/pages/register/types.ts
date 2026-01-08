import type {
  StepBasicInfoData,
  StepCredentialsData,
  StepSkillCanTeachData,
} from "../../components/registration";

export type RegistrationFormData = {
  stepCredentials: StepCredentialsData;
  stepBasicInfo: StepBasicInfoData;
  stepSkillCanTeach: StepSkillCanTeachData;
};
