export type TFooterLink = {
  label: string;
  href: string;
};

export type TFooterUIProps = {
  links: TFooterLink[][];
  onAllSkillsClick?: () => void;
};

