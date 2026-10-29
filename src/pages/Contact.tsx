import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SendIcon from "@mui/icons-material/Send";
import { GoogleMap } from "@/components/Map";
import SectionHeading from "@/components/SectionHeading";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          language: "en";
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const emptyForm: ContactFormData = { name: "", email: "", message: "" };
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const contactApiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [notification, setNotification] = useState<{ message: string; error: boolean } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);

  const renderTurnstile = useCallback(() => {
    if (!turnstileReady || !turnstileSiteKey || !widgetRef.current || !window.turnstile || widgetIdRef.current) return;

    widgetIdRef.current = window.turnstile.render(widgetRef.current, {
      sitekey: turnstileSiteKey,
      language: "en",
      callback: setTurnstileToken,
      "expired-callback": () => setTurnstileToken(""),
      "error-callback": () => setTurnstileToken(""),
    });
  }, [turnstileReady]);

  useEffect(() => {
    renderTurnstile();
  }, [renderTurnstile]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current || !turnstileToken || !contactApiUrl) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });
      if (!response.ok) throw new Error("Contact request failed");

      setNotification({ message: "A sua mensagem foi enviada com sucesso.", error: false });
      setFormData(emptyForm);
      formRef.current.reset();
      setTurnstileToken("");
      if (widgetIdRef.current) window.turnstile?.reset(widgetIdRef.current);
    } catch {
      setNotification({
        message: "Não foi possível enviar a mensagem. Tente novamente ou contacte-me por telefone ou email.",
        error: true,
      });
      setTurnstileToken("");
      if (widgetIdRef.current) window.turnstile?.reset(widgetIdRef.current);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setTurnstileReady(true)}
      />
      <section
      className="content-section"
      id="contact"
      aria-labelledby="contact-title"
      style={{ backgroundColor: "var(--page-bg)" }}
    >
      <div className="section-inner">
        <SectionHeading id="contact-title">Contactos</SectionHeading>
        <Typography component="p" sx={{ mb: 4, maxWidth: 760, color: "text.secondary", fontSize: 16, lineHeight: 1.75 }}>
          Se procura apoio psicológico para crianças, adolescentes ou adultos,
          aconselhamento parental ou orientação vocacional, entre em contacto comigo
          para esclarecer dúvidas ou agendar uma consulta presencial no Seixal ou online.
        </Typography>
        <Grid container spacing={{ xs: 5, lg: 8 }} alignItems="flex-start">
          <Grid item xs={12} lg={5} sx={{ order: { xs: 2, lg: 1 } }}>
            <Stack spacing={0}>
              <Box sx={{ display: "flex", gap: 2, py: 2, borderBottom: "1px solid #cbd9d3" }}>
                <PlaceOutlinedIcon aria-hidden="true" sx={{ mt: "2px", color: "primary.main" }} />
                <Box>
                  <Typography component="h3" sx={{ mb: 0.5, fontSize: 14, fontWeight: 700 }}>
                    Consultório
                  </Typography>
                  <Typography sx={{ color: "text.secondary", fontSize: 15, lineHeight: 1.6 }}>
                    Praceta Quinta das Parreiras 16, 2840-416, Seixal, Portugal
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2, py: 2, borderBottom: "1px solid #cbd9d3" }}>
                <EmailOutlinedIcon aria-hidden="true" sx={{ mt: "2px", color: "primary.main" }} />
                <Box>
                  <Typography component="h3" sx={{ mb: 0.5, fontSize: 14, fontWeight: 700 }}>
                    Email
                  </Typography>
                  <Typography component="a" href="mailto:psicologa.patriciacardeira@gmail.com" sx={{ color: "text.secondary", fontSize: 15, overflowWrap: "anywhere", "&:hover": { color: "primary.dark" } }}>
                    psicologa.patriciacardeira@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2, py: 2 }}>
                <PhoneOutlinedIcon aria-hidden="true" sx={{ mt: "2px", color: "primary.main" }} />
                <Box>
                  <Typography component="h3" sx={{ mb: 0.5, fontSize: 14, fontWeight: 700 }}>
                    Telefone
                  </Typography>
                  <Typography component="a" href="tel:+351933707597" sx={{ color: "text.secondary", fontSize: 15, "&:hover": { color: "primary.dark" } }}>
                    +351 933 707 597
                  </Typography>
                </Box>
              </Box>
            </Stack>

            <Box
              role="region"
              aria-label="Mapa da localização do consultório"
              sx={{ height: { xs: 260, md: 300 }, mt: 2, overflow: "hidden", bgcolor: "#d6e0dc" }}
            >
              <GoogleMap />
            </Box>
          </Grid>

          <Grid item xs={12} lg={7} sx={{ order: { xs: 1, lg: 2 } }}>
            <Box
              component="form"
              ref={formRef}
              autoComplete="on"
              onSubmit={handleSubmit}
              sx={{ bgcolor: "background.paper", borderLeft: { xs: "0", md: "4px solid #176b6e" }, p: { xs: 2.5, sm: 4, md: 5 } }}
            >
              <Typography component="h3" sx={{ mb: 1, fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 27 }}>
                Vamos falar?
              </Typography>
              <Typography id="form-description" sx={{ mb: 3, maxWidth: 470, color: "text.secondary", fontSize: 15 }}>
                Indique como posso ajudar e se prefere uma consulta presencial ou
                online. Não precisa de partilhar informação clínica detalhada neste
                primeiro contacto. O envio da mensagem é um pedido de contacto, não
                uma marcação confirmada.
              </Typography>

              <Stack spacing={2}>
                <TextField
                  label="Nome completo"
                  name="name"
                  autoComplete="name"
                  required
                  fullWidth
                  value={formData.name}
                  onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  fullWidth
                  value={formData.email}
                  onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                />
                <TextField
                  label="Mensagem"
                  name="message"
                  required
                  fullWidth
                  multiline
                  minRows={5}
                  value={formData.message}
                  onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                />
                <Box ref={widgetRef} sx={{ minHeight: 65 }} aria-label="Verificação de segurança" />
                {!turnstileSiteKey || !contactApiUrl ? (
                  <Typography role="alert" color="error" variant="body2">
                    O formulário está temporariamente indisponível.
                  </Typography>
                ) : null}
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting || !turnstileToken || !contactApiUrl}
                  endIcon={<SendIcon />}
                  sx={{ alignSelf: { xs: "stretch", sm: "flex-start" }, minHeight: 48, px: 3, borderRadius: "4px", boxShadow: "none" }}
                >
                  {isSubmitting ? "A enviar…" : "Enviar mensagem"}
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </div>

      <Snackbar
        open={notification !== null}
        autoHideDuration={5000}
        onClose={() => setNotification(null)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={notification?.error ? "error" : "success"} onClose={() => setNotification(null)}>
          {notification?.message}
        </Alert>
      </Snackbar>
      </section>
    </>
  );
}
