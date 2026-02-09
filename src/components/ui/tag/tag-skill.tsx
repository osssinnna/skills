import type { FC, ReactNode } from 'react';
import styles from './tag-skill.module.css';


type TagSkillUIProps = {
  color:string;
  children: ReactNode
}

export const TagSkillUI: FC<TagSkillUIProps> = ({color = '', children}) => {
  return (
        <div style= {{backgroundColor: color}} className={styles.tagSkill}>
              {children}
        </div>
  );
};