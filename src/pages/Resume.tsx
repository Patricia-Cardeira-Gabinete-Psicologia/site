import { Grid, Stack, Typography } from "@mui/material";
import SectionHeading from "@/components/SectionHeading";

const paragraphs = [
  "Sou a Patrícia Cardeira, psicóloga clínica, formada pelo ISPA e membro efetivo da Ordem dos Psicólogos Portugueses. O meu percurso, em contextos hospitalares, clínicos e comunitários, tem sido especialmente próximo das crianças, dos adolescentes e das suas famílias.",
  "Gosto de pensar a consulta como um encontro onde há lugar para o que se diz, para o que ainda não encontra palavras e para o que, por vezes, se revela a brincar.",
  "A minha prática, de orientação psicanalítica, parte dessa escuta para compreender as emoções, a história e as relações de cada pessoa. Acompanho também adultos, apoio pais nos desafios da parentalidade e desenvolvo processos de orientação vocacional.",
  "Em cada acompanhamento, procuro construir uma relação de confiança, onde seja possível olhar para o que se sente com mais compreensão e descobrir, ao seu próprio ritmo, novas formas de estar consigo e com os outros."
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
