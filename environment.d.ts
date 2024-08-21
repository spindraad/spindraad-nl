declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    SENDGRID_API_KEY: string;
    FONT_AWESOME_API_KEY: string;
    SESSION_SECRET: string;
  }
}
