import { Dispatch, SetStateAction, createContext, useState } from "react";

type SidebarProviderProps = { children: React.ReactNode };
interface SidebarContextInterface {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const SidebarContext = createContext<SidebarContextInterface>({
  open: false,
  setOpen: () => {},
});

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
