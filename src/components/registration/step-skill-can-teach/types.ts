import type { SkillCanTeach } from "../../../types/types";

export type StepSkillCanTeachData = {
  skillCanTeach: SkillCanTeach;
  images: string[];
};

export type StepSkillCanTeachProps = {
  data: StepSkillCanTeachData;
  onChange: (data: StepSkillCanTeachData) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
};
