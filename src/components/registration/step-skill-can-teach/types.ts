export type StepSkillCanTeachData = {
  skillCanTeach: {
    name: string;
    description: string;
    categoryId: number | null;
    subcategoryId: number | null;
  };
  images: string[];
};

export type StepSkillCanTeachProps = {
  data: StepSkillCanTeachData;
  onChange: (data: StepSkillCanTeachData) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
};
