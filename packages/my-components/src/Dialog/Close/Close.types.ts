export type DialogCloseType = Pick<
  React.HTMLProps<HTMLDivElement>,
  'className' | 'style'
> & {
  children: string;
};
