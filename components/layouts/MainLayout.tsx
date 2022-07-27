import { FC } from "react";
import { Navbar } from "../ui";
import { Grid } from "@nextui-org/react";
import { ChracterSearch } from "../character";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Navbar />
      <Grid.Container>
        <Grid xs={2}>{<ChracterSearch />}</Grid>
        <Grid xs={10}>
          <main style={{ padding: "0px 20px" }}>{children}</main>
        </Grid>
      </Grid.Container>
    </>
  );
};
