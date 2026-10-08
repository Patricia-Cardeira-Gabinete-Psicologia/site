import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { colorPalette } from "@/constants";

export default function ProfessionalRegistration() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section
      className="section flex flex-col items-center"
      id="professional-registration"
      style={{
        padding: "64px 24px",
        backgroundColor: theme.palette.background.default,
      }}
      aria-labelledby="professional-registration-title"
    >
      <Stack justifyContent="center" alignItems="center" mb="32px">
        <Typography
          id="professional-registration-title"
          component="h2"
          sx={{ textAlign: "center", fontWeight: 300, fontSize: { xs: "32px", sm: "36px" } }}
        >
          Registo profissional
        </Typography>
        <Box
          sx={{
            mt: "16px",
            height: "4px",
            width: "262px",
            background:
              "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
          }}
        />
      </Stack>

      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={3}
        alignItems="stretch"
        sx={{ width: "100%", maxWidth: "900px", mx: "auto" }}
      >
        <Box
          component="article"
          sx={{
            flex: 1,
            minWidth: 0,
            width: "100%",
            height: { xs: "300px", sm: "320px" },
            boxSizing: "border-box",
            p: 3,
            bgcolor: theme.palette.background.paper,
            border: "1px solid #efefef",
            borderRadius: "16px",
            boxShadow: "9px 14px 42px -4px rgba(0,0,0,0.10)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/static/opp_cedula_cut.png"
            width={2048}
            height={819}
            alt="Cédula profissional da Ordem dos Psicólogos Portugueses"
            style={{ width: "100%", maxWidth: "520px", height: "auto" }}
          />
        </Box>

        <Box
          component="article"
          sx={{
            flex: 1,
            minWidth: 0,
            width: "100%",
            height: { xs: "300px", sm: "320px" },
            boxSizing: "border-box",
            p: 3,
            bgcolor: theme.palette.background.paper,
            border: "1px solid #efefef",
            borderRadius: "16px",
            boxShadow: "9px 14px 42px -4px rgba(0,0,0,0.10)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Image
            src="/static/ers.png"
            width={537}
            height={282}
            alt="Entidade Reguladora da Saúde (ERS)"
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
          />
          <Typography sx={{ mt: 2, color: colorPalette.main }}>
            Número de registo ERS: <strong>E184367</strong>
          </Typography>
        </Box>
      </Stack>
    </section>
  );
}
