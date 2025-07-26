export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

export interface ButtonProps {
  title: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'full';
}
