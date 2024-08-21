declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wa-button': {
        size?: 'small' | 'medium' | 'large';
        onClick?: () => void;
      };
    }
  }
}
