import { Box } from "@chakra-ui/react";
import { Header } from "../components/header/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/footer";

export function MainLayout() {
  return (
    <Box>
      <Header />
      <Box
        marginTop={100}
        padding={10}
        display="grid"
        gap={5}
        marginBottom={100}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
