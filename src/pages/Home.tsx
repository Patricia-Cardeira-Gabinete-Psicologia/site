import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="home"
      aria-labelledby="home-title"
      sx={{
        minHeight: { xs: "auto", md: "calc(100vh - 64px)" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, sm: 4, md: 6 },
        pt: { xs: "104px", md: "96px" },
        pb: { xs: 8, md: 8 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 5, md: 8 }}
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%", maxWidth: "1200px", mx: "auto" }}
      >
        <Stack
          spacing={2.5}
          alignItems={{ xs: "center", md: "flex-start" }}
          textAlign={{ xs: "center", md: "left" }}
          sx={{ flex: 1, maxWidth: "580px" }}
        >
          <Typography
            component="p"
            sx={{
              color: theme.palette.primary.main,
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Psicologia clínica
          </Typography>

          <Typography
            id="home-title"
            component="h1"
            sx={{
              color: "text.primary",
              fontSize: { xs: "42px", sm: "52px", md: "60px" },
              fontWeight: 300,
              lineHeight: 1.12,
            }}
          >
            Patrícia Cardeira
          </Typography>

          <Typography
            component="p"
            sx={{
              color: theme.palette.primary.main,
              fontSize: { xs: "18px", md: "21px" },
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            Psicóloga clínica e psicoterapeuta cognitivo-comportamental
          </Typography>

          <Typography
            component="p"
            sx={{
              maxWidth: "520px",
              color: "text.secondary",
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Acompanhamento psicológico para adultos e adolescentes, num espaço
            de confiança, respeito e confidencialidade.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              component="a"
              href="#services"
              variant="contained"
              sx={{
                borderRadius: "999px",
                px: 3,
                py: 1.25,
                backgroundColor: theme.palette.primary.main,
                textTransform: "none",
                "&:hover": { backgroundColor: theme.palette.primary.dark },
              }}
            >
              Conheça os serviços
            </Button>
            <Button
              component="a"
              href="#contact"
              variant="outlined"
              sx={{
                borderRadius: "999px",
                px: 3,
                py: 1.25,
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                textTransform: "none",
                "&:hover": {
                  borderColor: theme.palette.primary.dark,
                  backgroundColor: "rgba(23, 136, 141, 0.06)",
                },
              }}
            >
              Entre em contacto
            </Button>
          </Stack>

          <Typography
            component="p"
            variant="body2"
            sx={{ pt: 1, color: "text.secondary", fontSize: "14px" }}
          >
            Consultas no Seixal e à distância
          </Typography>
        </Stack>

        <Box
          sx={{
            position: "relative",
            width: { xs: "min(100%, 360px)", md: "min(38vw, 440px)" },
            maxWidth: "440px",
            aspectRatio: "4 / 5",
            flexShrink: 0,
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              inset: "8% -4% -4% 8%",
              borderRadius: "48% 48% 16px 16px",
              backgroundColor: "rgba(23, 136, 141, 0.12)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              border: "6px solid #fff",
              borderRadius: "48% 48% 16px 16px",
              boxShadow: "0 18px 48px rgba(36, 67, 70, 0.16)",
            }}
          >
            <Image
              src="/static/me.jpg"
              alt="Patrícia Cardeira, psicóloga clínica"
              fill
              priority
              sizes="(max-width: 900px) 80vw, 440px"
              style={{ objectFit: "cover", objectPosition: "center 32%" }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
