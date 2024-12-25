export const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-[0.8rem] font-medium text-destructive">{children}</div>
  );
};
