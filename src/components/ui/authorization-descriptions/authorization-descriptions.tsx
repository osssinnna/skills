import s from "./authorization-descriptions.module.css";
import light from "../../../assets/images/light-bulb.png";
import user from "../../../assets/images/user-info.png";
import board from "../../../assets/images/school-board.png";

type Props = {
  currentStep: number | string;
};

export const AuthorizationDescriptions: React.FC<Props> = ({ currentStep }) => {
  const descriptions = [
    {
      step: "1",
      image: light,
      title: "Добро пожаловать в SkillSwap!",
      text: "Присоединяйтесь к SkillSwap и обменивайтесь знаниями и навыками с другими людьми",
    },
    {
      step: "2",
      image: user,
      title: "Расскажите немного о себе",
      text: "Это поможет другим людям лучше вас узнать, чтобы выбрать для обмена",
    },
    {
      step: "3",
      image: board,
      title: "Укажите, чем вы готовы поделиться",
      text: "Так другие люди смогут увидеть ваши предложения и предложить вам обмен!",
    },
    {
      step: "login",
      image: light,
      title: "С возвращением в SkillSwap!",
      text: "Обменивайтесь знаниями и навыками с другими людьми",
    },
  ];

  const currentDescription = descriptions.find((d) => d.step === String(currentStep));

  if (!currentDescription) return null;

  return (
    <div className={s.authorizationDescription}>
      <img
        src={currentDescription.image}
        className={s.images}
        alt={currentDescription.title}
      />
      <div className={s.containerDescription}>
        <h3 className={s.titleDescription}>{currentDescription.title}</h3>
        <p className={s.textDescription}>{currentDescription.text}</p>
      </div>
    </div>
  );
};
