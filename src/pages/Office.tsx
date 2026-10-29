import { Box, Typography } from "@mui/material";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const officeImages = [
  "/static/office_2.jpg",
  "/static/office_1.jpg",
  "/static/office_4.jpg",
];

export default function Office() {
  return (
    <section
      className="content-section"
      id="office"
      aria-labelledby="office-title"
      style={{ backgroundColor: "#e6eeea" }}
    >
      <div className="section-inner">
        <SectionHeading id="office-title">Consultório</SectionHeading>
        <Typography component="p" sx={{ mb: 4, maxWidth: 760, color: "text.secondary", fontSize: 16, lineHeight: 1.75 }}>
          As consultas presenciais decorrem no meu consultório no Seixal, na Praceta
          Quinta das Parreiras. Para agendar uma consulta ou esclarecer como chegar,
          pode contactar-me por telefone, email ou através do formulário abaixo.
        </Typography>
        <Box
          role="group"
          aria-label="Fotografias do consultório"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gridTemplateRows: { xs: "auto", md: "repeat(2, 240px)" },
            gap: { xs: 2, md: 2.5 },
            "& > div:first-of-type": { gridRow: { xs: "auto", md: "span 2" } },
          }}
        >
          {officeImages.map((src, index) => (
            <Box
              key={src}
              sx={{
                position: "relative",
                minHeight: { xs: 240, sm: 220, md: 0 },
                aspectRatio: { xs: "4 / 3", md: "auto" },
                overflow: "hidden",
                bgcolor: "#d6e0dc",
              }}
            >
              <Image
                src={src}
                alt={`Espaço do consultório, fotografia ${index + 1}`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 700px"
                style={{ objectFit: "cover" }}
              />
            </Box>
          ))}
        </Box>
      </div>
    </section>
  );
}
