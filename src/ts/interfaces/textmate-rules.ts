export interface TextMateRule {
  scope: string;
  settings: {
    foreground?: string;
    fontStyle?: string;
  };
}
