import { Provider } from "react-redux";
import { store } from "./store";

interface Props {
  children: React.ReactNode;
}

export function Pprovider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
