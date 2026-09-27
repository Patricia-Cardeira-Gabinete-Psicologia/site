import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useMemo } from "react";

export default function Resume() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const backgroundImg = "/static/me.jpg";

  const titleEl = useMemo(() => {
    return (
      <Stack justifyContent="center" alignItems="center" mb="32px">
        <Typography
          sx={{
            width: "100%",
            textAlign: "center",
            fontWeight: 300,
            fontSize: isMobile ? "32px" : "36px",
          }}
          id="resume-title"
          role="heading"
        >
          Biografia
        </Typography>
        <div
          style={{
            marginTop: "16px",
            height: "4px",
            width: "212px",
            background:
              "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
          }}
        ></div>
      </Stack>
    );
  }, [isMobile]);

  return (
    <section
      className="section grid place-content-center min-h-screen bg-gray-100"
      id="resume"
      style={{
        height: "fit-content",
        width: "100%",
        padding: "64px 0",
      }}
      aria-labelledby="resume-title"
    >
      {titleEl}
      <Grid
        container
        spacing={2}
        sx={{ height: "calc(100% - 124px)", width: "75%", margin: "auto" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Stack>
            <Stack className="top-left-corner">
              <div
                style={{
                  height: "4px",
                  width: "24px",
                  background:
                    "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
                }}
              ></div>
              <div
                style={{
                  height: "24px",
                  width: "4px",
                  background:
                    "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
                }}
              ></div>
            </Stack>

            <Image
              src={backgroundImg}
              width={isMobile ? 300 : 500}
              height={isMobile ? 300 : 500}
              style={{
                objectFit: "contain",
                borderRadius: "4px",
                width: "unset",
              }}
              alt="Fotografia da psicóloga"
            />

            <Stack className="bottom-right-corner" alignItems="flex-end">
              <div
                style={{
                  height: "24px",
                  width: "4px",
                  background:
                    "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
                }}
              ></div>
              <div
                style={{
                  height: "4px",
                  width: "24px",
                  background:
                    "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
                }}
              ></div>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Typography
            component="p"
            variant="body2"
            sx={{
              mb: "16px",
              fontWeight: 300,
              fontSize: isMobile ? "15px" : "18px",
              letterSpacing: '0.039em'
            }}
          >
            Sou psicóloga certificada e psicoterapeuta cognitivo-comportamental,
            com formação profissional especializada na aplicação clínica da
            Terapia Cognitivo-Comportamental (TCC). O meu percurso académico
            começou com a conclusão da licenciatura no Departamento de Psicologia
            da Universidade Panteion.
          </Typography>
          <Typography
            component="p"
            variant="body2"
            sx={{
              mb: "16px",
              fontWeight: 300,
              fontSize: isMobile ? "15px" : "19px",
              letterSpacing: '0.039em'
            }}
          >
            A procura de especialização levou-me a frequentar o programa anual
            de Psicologia Escolar na Universidade do Egeu. Participei também
            ativamente no seminário de Psicologia do Aconselhamento do Instituto
            de Desenvolvimento do Emprego. Para aprofundar a minha especialização,
            concluí uma formação de dois anos em Psicoterapia Cognitiva e
            Comportamental no Centro de Psicoterapia Aplicada e Aconselhamento
            (KE.PSY.SY).
          </Typography>
          <Typography
            component="p"
            variant="body2"
            sx={{
              mb: "16px",
              fontWeight: 300,
              fontSize: isMobile ? "15px" : "19px",
              letterSpacing: '0.039em'
            }}
          >
            Desenvolvo o meu trabalho terapêutico no meu consultório privado,
            onde realizo consultas individuais com adultos e adolescentes, e em
            colaboração com instituições privadas de saúde mental. Com dedicação
            e profissionalismo, ofereço apoio e orientação ao longo de todo o
            percurso de acompanhamento psicológico, garantindo o máximo respeito
            e confidencialidade.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
