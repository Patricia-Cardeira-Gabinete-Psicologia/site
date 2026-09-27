import { Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import GroupIcon from "@mui/icons-material/Group";
import LanguageIcon from "@mui/icons-material/Language";

export const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

export const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

export const colorPalette = {
  main: "#17888d",
  secondary1: "#59A9AA",
  secondary2: "#90BBBC",
  secondary3: "#E7DEE4",
};

export const emailJsConfig = {
  serviceId: "service_gcnejqm",
  templateId: "template_rq16gdl",
  publicKey: "ksn1gG7FEpNVxXH13",
};

export const websiteUrl = 'https://localhost:3000'
//----------------------------------------------------
//Data
export const menuOptions = [
  { label: "Início", routePath: "home" },
  {
    label: "Biografia",
    routePath: "resume",
  },
  {
    label: "Serviços",
    routePath: "services",
  },
  {
    label: "O nosso consultório",
    routePath: "office",
  },
  {
    label: "Contactos",
    routePath: "contact",
  },
];

export const metadata: {
  title: string;
  description: string;
  keywords: string;
} = {
  title: "Patrícia Cardeira - PSICÓLOGA",
  description: "Patrícia Cardeira - Psicóloga especializada. Oferece aconselhamento psicológico, psicoterapia, psicologia clínica e consultas de psicologia para promover o bem-estar mental. Especializada no tratamento da ansiedade e da depressão, presta ajuda e apoio psicológico.",
  keywords: "Patrícia Cardeira, Psicóloga, Aconselhamento psicológico, Psicoterapia, Psicologia clínica, Consultas de psicologia, Apoio emocional, Bem-estar mental, Psicologia infantil, Tratamento da ansiedade, Tratamento da depressão, Ajuda psicológica, Apoio psicológico, Serviços especializados de psicologia"
};


export const services = [
  {
    icon: (
      <PsychologyIcon
        sx={{ color: colorPalette.main, width: "32px", height: "32px" }}
      />
    ),
    title: "Psicoterapia",
    mainContent:
      "A psicoterapia individual assenta na construção de uma relação saudável de confiança e compreensão entre o terapeuta e a pessoa em acompanhamento. Através de uma comunicação sincera e da aceitação, a pessoa é encorajada a reconhecer e a gerir as suas dificuldades emocionais. É indicada nas seguintes situações:",
    bullets: [
      "Depressão",
      "Ansiedade generalizada",
      "Ataques de pânico",
      "Fobia social",
      "Agorafobia",
      "Perturbações alimentares",
      "Trauma",
      "Baixa autoestima",
    ],
  },
  {
    icon: (
      <ConnectWithoutContactIcon
        sx={{ color: colorPalette.main, width: "32px", height: "32px" }}
      />
    ),
    title: "Aconselhamento psicológico",
    mainContent:
      "O aconselhamento psicológico centra-se na melhoria do dia a dia e na procura de formas eficazes de lidar com os problemas. É indicado nas seguintes situações:",
    bullets: [
      "Luto",
      "Dificuldades do dia a dia",
      "Dificuldades nas relações interpessoais",
      "Dificuldades na comunicação interpessoal",
      "Dificuldades relacionadas com a parentalidade",
    ],
  },
  {
    icon: (
      <GroupIcon
        sx={{ color: colorPalette.main, width: "32px", height: "32px" }}
      />
    ),
    title: "Terapia de casal",
    mainContent:
      "O principal objetivo é proporcionar ao casal os recursos e as ferramentas adequados para melhorar a comunicação e encontrar soluções para eventuais dificuldades na relação.",
  },
  {
    icon: (
      <LanguageIcon
        sx={{ color: colorPalette.main, width: "32px", height: "32px" }}
      />
    ),
    title: "Consultas à distância",
    mainContent:
      "Todos os serviços acima estão também disponíveis à distância, através da Internet, quando a distância ou outras dificuldades impedem a deslocação ao consultório.",
  },
];
export const serviceInfoData = [
  {
    icon: (
      <PlaceIcon
        style={{
          color: "white",
          borderRadius: "4px",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
        }}
      />
    ),
    title: "Morada",
    value: (
      <Typography
        component="div"
        variant="body2"
        sx={{ opacity: 0.5, fontSize: "14px" }}
      >
        Rua Kymothois, 54, Dafni
      </Typography>
    ),
  },
  {
    icon: (
      <AccessTimeFilledIcon
        style={{
          color: "white",
          borderRadius: "4px",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
        }}
      />
    ),
    title: "Horário de funcionamento",
    value: (
      <Stack>
        <Typography
          component="div"
          variant="body2"
          sx={{ opacity: 0.5, fontSize: "14px" }}
        >
          Segunda a sexta-feira: 10h00–21h00
        </Typography>
        <Typography
          component="div"
          variant="body2"
          sx={{ opacity: 0.5, fontSize: "14px" }}
        >
          Sábado: 10h00–18h00
        </Typography>
      </Stack>
    ),
  },
  {
    icon: (
      <EmailIcon
        style={{
          color: "white",
          borderRadius: "4px",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
        }}
      />
    ),
    title: "Correio eletrónico",
    value: (
      <Typography
        component="div"
        variant="body2"
        sx={{ opacity: 0.5, fontSize: "14px" }}
      >
        tourlida.xrisoula@gmail.com
      </Typography>
    ),
  },
  {
    icon: (
      <PhoneIcon
        style={{
          color: "white",
          borderRadius: "4px",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
        }}
      />
    ),
    title: "Telefone",
    value: (
      <Typography
        component="div"
        variant="body2"
        sx={{ opacity: 0.5, fontSize: "14px" }}
      >
        +30 6987589167
      </Typography>
    ),
  },
];

