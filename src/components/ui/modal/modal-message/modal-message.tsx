import { type FC } from "react";
import styles from './modal-message.module.css';
import { ButtonUI } from "../../button";


type TBtnProps = {
  textBtn: string, 
  statusBtn: 'primary' | 'secondary', 
  onClick?:()=>void
}

type ModalMessageProps = {
  image: string, // уведомления два - выбираем нужную картинку в зав от ситуац
  title: string,
  text: string,
  buttonsProps: TBtnProps[]
}

export const ModalMessageUI: FC<ModalMessageProps> =({
  image,
  title,
  text,
  buttonsProps = [{textBtn:'Готово', statusBtn: 'primary'}]
}) => {

       
        const imageSrc = image;
  return (
          <div className={styles.messageContainer}>
            <img className={styles.messageImage} src={imageSrc} alt={title} />
            <div className={styles.messageMain}>
               <h2 className={styles.messageTitle}>{title}</h2>
                <p className={styles.messageText}>{text}</p>
                <div className={styles.messageButtons}>
                    {
                      buttonsProps.map((btnData) => {
                        return <ButtonUI fulsSize={true} onClick={btnData?.onClick} color={btnData.statusBtn}>{btnData.textBtn}</ButtonUI>
                      })
                    }
                </div>
                
            </div>
           
          </div>
          )
}
