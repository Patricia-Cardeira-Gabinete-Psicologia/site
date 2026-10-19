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
  serviceId: "service_257kkgg",
  templateId: "template_yls49op",
  publicKey: "GEooVe-H1luqn8SEe",
};

export const websiteUrl = 'https://localhost:3000'
//----------------------------------------------------
//Data
export const menuOptions = [
  { label: "Início", routePath: "home" },
  {
    label: "Sobre mim",
    routePath: "resume",
  },
  {
    label: "Serviços",
    routePath: "services",
  },
  {
    label: "Consultório",
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
  title: "Patrícia Cardeira | Psicóloga no Seixal e online",
  description: "Consultas de psicologia com Patrícia Cardeira, no Seixal e online. Acompanhamento de adultos e adolescentes, aconselhamento psicológico e terapia de casal.",
  keywords: "Patrícia Cardeira, psicóloga no Seixal, consultas de psicologia, acompanhamento psicológico, adultos e adolescentes, aconselhamento psicológico, psicoterapia, terapia de casal, consultas online"
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
      "Nas sessões individuais, trabalhamos para compreender o que está a causar sofrimento, reconhecer padrões de pensamento e comportamento e encontrar formas de lidar com as dificuldades. O acompanhamento de adultos e adolescentes pode abordar:",
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
      "Um espaço para falar sobre uma dificuldade concreta, ponderar decisões e encontrar formas de enfrentar mudanças pessoais, familiares ou profissionais. O aconselhamento pode ajudar em situações como:",
    bullets: [
      "Luto e perdas",
      "Mudanças e desafios do dia a dia",
      "Dificuldades nas relações",
      "Dificuldades de comunicação",
      "Desafios da parentalidade",
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
      "Nas consultas de casal, há espaço para ouvir os dois pontos de vista, compreender os conflitos e trabalhar a comunicação. O objetivo é ajudar o casal a clarificar o que precisa e a tomar decisões sobre a relação.",
  },
  {
    icon: (
      <LanguageIcon
        sx={{ color: colorPalette.main, width: "32px", height: "32px" }}
      />
    ),
    title: "Consultas de psicologia online",
    mainContent:
      "O acompanhamento à distância permite realizar as sessões sem se deslocar ao consultório no Seixal. Para saber se esta modalidade se adequa ao que procura e esclarecer como funcionam as consultas, entre em contacto comigo.",
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
        Praceta Quinta das Parreiras 16, 2840-416, Seixal, Portugal
      </Typography>
    ),
  },
  // {
  //   icon: (
  //     <AccessTimeFilledIcon
  //       style={{
  //         color: "white",
  //         borderRadius: "4px",
  //         height: "100%",
  //         width: "100%",
  //         background:
  //           "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
  //       }}
  //     />
  //   ),
  //   title: "Horário de funcionamento",
  //   value: (
  //     <Stack>
  //       <Typography
  //         component="div"
  //         variant="body2"
  //         sx={{ opacity: 0.5, fontSize: "14px" }}
  //       >
  //         Segunda a sexta-feira: 10h00–21h00
  //       </Typography>
  //       <Typography
  //         component="div"
  //         variant="body2"
  //         sx={{ opacity: 0.5, fontSize: "14px" }}
  //       >
  //         Sábado: 10h00–18h00
  //       </Typography>
  //     </Stack>
  //   ),
  // },
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
    title: "Email",
    value: (
      <Typography
        component="div"
        variant="body2"
        sx={{ opacity: 0.5, fontSize: "14px" }}
      >
        psicologa.patriciacardeira@gmail.com
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
    title: "Telemóvel",
    value: (
      <Typography
        component="div"
        variant="body2"
        sx={{ opacity: 0.5, fontSize: "14px" }}
      >
        +351 933707597
      </Typography>
    ),
  },
];
