import Head from "next/head";
import Link from "next/link";
import { Stack, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      <Stack component="section" spacing={2} sx={{ padding: "120px 24px", textAlign: "center" }}>
        <Typography component="h1" variant="h4">
          404 — Página não encontrada
        </Typography>
        <Typography>A página que procura não existe ou foi movida.</Typography>
        <Link href="/">Voltar à página inicial</Link>
      </Stack>
    </>
  );
}
