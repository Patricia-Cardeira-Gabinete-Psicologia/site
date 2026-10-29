import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box
      component="section"
      id="home"
      aria-labelledby="home-title"
      sx={{
        minHeight: { xs: "auto", md: "min(780px, 100vh)" },
        display: "flex",
        alignItems: "center",
        px: { xs: 2.5, md: 4 },
        pt: { xs: "104px", md: "116px" },
        pb: { xs: 7, md: 10 },
        bgcolor: "background.default",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 5, md: 9 }}
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%", maxWidth: 1160, mx: "auto" }}
      >
        <Stack
          spacing={{ xs: 2, md: 2.5 }}
          alignItems="flex-start"
          textAlign="left"
          sx={{ flex: 1, maxWidth: 590, width: "100%" }}
        >
          <Typography
            component="p"
            sx={{ color: "primary.main", fontSize: 14, fontWeight: 600, mb: 0.5 }}
          >
            Consultas de psicologia
          </Typography>

          <Typography
            id="home-title"
            component="h1"
            sx={{
              color: "text.primary",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: { xs: "clamp(2.55rem, 11.5vw, 3.4rem)", md: "4.5rem" },
              fontWeight: 400,
              letterSpacing: "-0.045em",
              lineHeight: 1.02,
              maxWidth: "100%",
            }}
          >
            Patrícia Cardeira
          </Typography>


          <Typography
            component="p"
            sx={{ maxWidth: 500, color: "text.secondary", fontSize: { xs: 16, md: 17 }, lineHeight: 1.75 }}
          >
            Sou a Patrícia Cardeira, psicóloga clínica, e acredito que compreender começa por escutar. Na conversa, no silêncio e no brincar, procuro conhecer a história de quem chega até mim. Convido-o a conhecer um pouco da minha história e da forma como trabalho.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              component="a"
              href="#services"
              variant="contained"
              sx={{ minHeight: 48, px: 3, borderRadius: "4px", boxShadow: "none" }}
            >
              Conheça os serviços
            </Button>
            <Button
              component="a"
              href="#contact"
              variant="outlined"
              sx={{ minHeight: 48, px: 3, borderRadius: "4px", borderWidth: "1.5px" }}
            >
              Pedir uma consulta
            </Button>
          </Stack>

          <Typography component="p" sx={{ pt: 0.5, color: "text.secondary", fontSize: 14 }}>
            Consultas presenciais no Seixal e online
          </Typography>
        </Stack>

        <Box
          sx={{
            position: "relative",
            width: { xs: "min(100%, 390px)", md: "min(40vw, 470px)" },
            maxWidth: 470,
            aspectRatio: "4 / 5",
            flexShrink: 0,
            isolation: "isolate",
            "&::before": {
              content: '""',
              position: "absolute",
              zIndex: -1,
              inset: { xs: "12% -12px -12px 12%", md: "12% -22px -22px 12%" },
              bgcolor: "#dce8e3",
              borderTopRightRadius: "88px",
            },
          }}
        >
          <Box sx={{ position: "absolute", inset: 0, overflow: "hidden", borderTopRightRadius: "88px" }}>
            <Image
              src="/static/me.jpg"
              alt="Patrícia Cardeira, psicóloga"
              fill
              priority
              sizes="(max-width: 900px) 88vw, 470px"
              style={{ objectFit: "cover", objectPosition: "center 32%" }}
            />
          </Box>
          <Box
            aria-hidden="true"
            sx={{ position: "absolute", right: 0, bottom: 0, width: "8px", height: "34%", bgcolor: "primary.main" }}
          />
        </Box>
      </Stack>
    </Box>
  );
}
