import { Grid, Stack, Typography } from "@mui/material";
import SectionHeading from "@/components/SectionHeading";

const paragraphs = [
  "Sou Patrícia Cardeira, psicóloga. A minha prática centra-se no acompanhamento psicológico de adultos e adolescentes, com consultas presenciais no Seixal e consultas online.",
  "Em consulta, procuro compreender as dificuldades de cada pessoa no contexto da sua história e das suas relações. A ansiedade, a tristeza, a baixa autoestima, o luto e as mudanças do dia a dia são alguns dos temas que podemos trabalhar em conjunto.",
  "O meu trabalho inclui psicoterapia individual, aconselhamento psicológico e terapia de casal. O acompanhamento começa por perceber o que a leva a procurar apoio e definir consigo os objetivos das sessões, com respeito pela sua privacidade e pelo seu ritmo.",
];

export default function Resume() {
  return (
    <section
      className="content-section"
      id="resume"
      aria-labelledby="resume-title"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="section-inner">
        <Grid container spacing={{ xs: 3, md: 8 }}>
          <Grid item xs={12} md={4}>
            <SectionHeading id="resume-title">Sobre mim</SectionHeading>
            {/* <Typography sx={{ maxWidth: 300, color: "primary.dark", fontSize: 18, fontWeight: 600, lineHeight: 1.5 }}>
              Patrícia Cardeira. Consultas de psicologia no Seixal e online.
            </Typography> */}
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack spacing={2} sx={{ maxWidth: 760 }}>
              {paragraphs.map((paragraph) => (
                <Typography key={paragraph} component="p" sx={{ m: 0, color: "text.secondary", fontSize: 16, lineHeight: 1.8 }}>
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
