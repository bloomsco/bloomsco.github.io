import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import youFormFunc from "./youform.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    youFormFunc();
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Stack
          direction="column"
          spacing={5}
          mt={10}
          alignItems="left"
          justifyContent="left"
        >
          <Typography
            variant="h1"
            fontFamily={"Lora, serif"}
            fontWeight={700}
            fontSize={"4rem"}
          >
            Bloomsco
          </Typography>

          <Stack direction="column" spacing={3}>
            <Typography
              variant="h2"
              fontFamily={"Raleway, sans-serif"}
              fontWeight={600}
              fontSize={"2rem"}
            >
              <Link
                color="inherit"
                underline="hover"
                sx={{ "&:hover": { cursor: "pointer" } }}
                data-youform-open="dfnd9glo"
                data-youform-position="center"
              >
                Launching in October 2025
              </Link>
            </Typography>
            <Stack direction="column" spacing={1}>
              <LinkedInLink href="https://www.linkedin.com/in/hughmcguire/">
                Hugh McGuire
              </LinkedInLink>
              <LinkedInLink href="https://www.linkedin.com/in/hadriendavid/">
                Hadrien David
              </LinkedInLink>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default App;

const LinkedInLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Typography
      variant="h2"
      fontFamily={"Raleway, sans-serif"}
      fontWeight={400}
      fontSize={"16px"}
    >
      <Link
        href={href}
        target="_blank"
        color="inherit"
        underline="hover"
        sx={{ "&:hover": { cursor: "pointer" } }}
      >
        {children}
      </Link>
    </Typography>
  );
};
