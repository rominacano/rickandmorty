import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const InternalLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
