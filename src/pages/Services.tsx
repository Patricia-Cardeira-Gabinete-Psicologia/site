import { Box, Grid, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { colorPalette, services } from "@/constants";
import SectionHeading from "@/components/SectionHeading";

export default function Services() {
  return (
    <section className="content-section" id="services" aria-labelledby="services-title">
      <div className="section-inner">
        <SectionHeading id="services-title">Serviços</SectionHeading>
        <Grid container columnSpacing={{ xs: 0, md: 6 }} rowSpacing={{ xs: 4, md: 5 }}>
          {services.map((serviceItem, index) => (
            <Grid item xs={12} md={6} key={serviceItem.title}>
              <Box
                component="article"
                aria-labelledby={`service-title-${index}`}
                sx={{ height: "100%", borderTop: "1px solid var(--line)", pt: 2.5 }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                  <Box aria-hidden="true" sx={{ display: "flex", color: colorPalette.main }}>
                    {serviceItem.icon}
                  </Box>
                  <Typography
                    component="h3"
                    id={`service-title-${index}`}
                    sx={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 23, lineHeight: 1.25, color: "text.primary" }}
                  >
                    {serviceItem.title}
                  </Typography>
                </Stack>

                <Typography component="p" sx={{ m: 0, color: "text.secondary", fontSize: 16, lineHeight: 1.75 }}>
                  {serviceItem.mainContent}
                </Typography>

                {serviceItem.bullets && (
                  <Box
                    component="ul"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                      gap: "10px 20px",
                      listStyle: "none",
                      m: 0,
                      mt: 2.5,
                      p: 0,
                    }}
                  >
                    {serviceItem.bullets.map((bullet) => (
                      <Box component="li" key={bullet} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                        <CheckIcon aria-hidden="true" sx={{ color: colorPalette.main, fontSize: 18, mt: "3px", flexShrink: 0 }} />
                        <Typography component="span" sx={{ color: "text.primary", fontSize: 14, lineHeight: 1.5 }}>
                          {bullet}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}
