import { Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import GroupIcon from "@mui/icons-material/Group";
import LanguageIcon from "@mui/icons-material/Language";
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ExtensionIcon from '@mui/icons-material/Extension';
import SchoolIcon from '@mui/icons-material/School';

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
  description: "Psicologia para crianças, adolescentes e adultos, aconselhamento parental e orientação vocacional. Consultas presenciais no Seixal e online.",
  keywords: "Patrícia Cardeira, psicóloga no Seixal, psicologia para crianças, psicologia para adolescentes, psicologia para adultos, aconselhamento parental, orientação vocacional, consultas presenciais, consultas online, acompanhamento psicológico"
};


export const services = [
  {
    icon: (
      <ExtensionIcon
        sx={{ color: colorPalette.main, width: "32px", height: "32px" }}
      />
    ),
    title: "Psicologia para Crianças e Adolescentes",
    mainContent:
      "Acompanhamento de crianças e adolescentes nas suas dificuldades emocionais, comportamentais e relacionais. Num espaço adaptado à idade e às necessidades de cada um, a conversa e o brincar ajudam a dar sentido ao que sentem, a expressar emoções e a desenvolver recursos para enfrentar os desafios do crescimento.",
    // bullets: [
    //   "Depressão",
    //   "Ansiedade generalizada",
    //   "Ataques de pânico",
    //   "Fobia social",
    //   "Agorafobia",
    //   "Perturbações alimentares",
    //   "Trauma",
    //   "Baixa autoestima",
    // ],
  },
  {
    icon: (
      <PsychologyIcon
        sx={{ color: colorPalette.main, width: "32px", height: "32px" }}
      />
    ),
    title: "Psicologia para Adultos",
    mainContent:
      "Um espaço de escuta e reflexão para compreender o que sente e trabalhar dificuldades que afetam o seu bem-estar, como ansiedade, tristeza, dificuldades nas relações ou momentos de mudança. O acompanhamento procura promover um maior conhecimento de si e construir novas formas de lidar com os desafios da vida.",
    // bullets: [
    //   "Luto e perdas",
    //   "Mudanças e desafios do dia a dia",
    //   "Dificuldades nas relações",
    //   "Dificuldades de comunicação",
    //   "Desafios da parentalidade",
    // ],
  },
  {
    icon: (
      <FamilyRestroomIcon
        sx={{ color: colorPalette.main, width: "32px", height: "32px" }}
      />
    ),
    title: "Aconselhamento Parental",
    mainContent:
      "Apoio a pais e cuidadores nas dúvidas e nos desafios de educar e acompanhar o crescimento dos filhos. Um espaço para compreender as necessidades emocionais das crianças e adolescentes, refletir sobre as dinâmicas familiares e encontrar estratégias ajustadas a cada família, fortalecendo a relação entre pais e filhos.",
  },
  {
    icon: (
      <SchoolIcon
        sx={{ color: colorPalette.main, width: "32px", height: "32px" }}
      />
    ),
    title: "Orientação Vocacional",
    mainContent:
      "Apoio na exploração de interesses, capacidades e valores pessoais, para facilitar escolhas escolares, académicas e profissionais. Através de um processo de autoconhecimento e de reflexão sobre os percursos possíveis, procura-se ajudar cada pessoa a tomar decisões mais conscientes e alinhadas com aquilo que faz sentido para si.",
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
