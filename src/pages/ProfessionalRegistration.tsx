import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export default function ProfessionalRegistration() {
  return (
    <section
      className="content-section"
      id="professional-registration"
      aria-labelledby="professional-registration-title"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="section-inner">
        <SectionHeading id="professional-registration-title">Registo profissional</SectionHeading>
        <Typography component="p" sx={{ mb: 4, maxWidth: 760, color: "text.secondary", fontSize: 16, lineHeight: 1.75 }}>
          Nesta secção pode consultar a minha identificação profissional junto da
          Ordem dos Psicólogos Portugueses e o número de registo do consultório na
          Entidade Reguladora da Saúde.
        </Typography>
        <Grid container spacing={{ xs: 4, md: 7 }}>
          <Grid item xs={12} md={6}>
            <Box component="article" sx={{ borderTop: "1px solid var(--line)", pt: 3 }}>
              <Image
                src="/static/opp_cedula_cut.png"
                width={2048}
                height={819}
                alt="Cédula profissional da Ordem dos Psicólogos Portugueses"
                style={{ display: "block", width: "50%", maxWidth: 270, height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="article" sx={{ borderTop: "1px solid var(--line)", pt: 3 }}>
              <Image
                src="/static/ers.png"
                width={537}
                height={282}
                alt="Entidade Reguladora da Saúde"
                style={{ display: "block", width: "50%", maxWidth: 210, height: "auto" }}
              />
              <Typography sx={{ mt: 2, color: "text.secondary", fontSize: 15 }}>
                Número de registo ERS: <strong style={{ color: "#203b38" }}>E184367</strong>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
