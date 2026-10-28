# Patrícia Cardeira — Psicóloga

Site de apresentação de Patrícia Cardeira, com informação sobre o acompanhamento
psicológico de adultos e adolescentes, os serviços e os contactos do consultório
no Seixal.

## Conteúdos

- Apresentação e secção «Sobre mim».
- Psicoterapia individual, aconselhamento psicológico, terapia de casal e consultas online.
- Consultório, contactos, formulário de pedido de contacto e registo profissional.

Os selos profissionais ocupam até metade da largura da respetiva coluna, com
limites de 270 px para a cédula da OPP e 210 px para o selo da ERS.

A navegação utiliza `public/static/logo-monogram.png`, um recorte transparente do
monograma PC do logótipo original (`logo.png`). O nome e a profissão mantêm-se como
texto legível ao lado do símbolo, sem comprimir a assinatura completa.

Os textos estão em português europeu. Os serviços e contactos seguem a informação
existente no projeto. Foram removidas as referências à formação na Grécia e à
especialização cognitivo-comportamental que não estavam confirmadas para Patrícia
Cardeira. Dados sobre formação, instituições e anos de experiência devem ser
confirmados com a própria antes de serem acrescentados.

## Desenvolvimento

Projeto em Next.js, React, TypeScript e Material UI.

```sh
npm install
npm run dev
```

## Verificação e publicação

```sh
npx tsc --noEmit --incremental false
npm run lint
npm run build
npm start
```

O comando de build gera o site estático em `out/`, de acordo com `next.config.js`.
O comando `start` serve essa pasta. Após alterar os textos, é necessário gerar
novamente o build para atualizar a versão estática.

### Formulário, Turnstile e email

O formulário é estático; a verificação e o envio do email são feitos pelo Worker
em `cloudflare/`. Crie uma chave de site Turnstile para `psicologapatriciacardeira.pt`
e configure a respetiva chave secreta e a chave da API Resend no Worker:

```sh
cd cloudflare
npx wrangler secret put TURNSTILE_SECRET_KEY
npx wrangler secret put RESEND_API_KEY
npx wrangler deploy
```

Verifique o domínio `psicologapatriciacardeira.pt` na Resend para autorizar o
remetente `no-reply@psicologapatriciacardeira.pt` (não precisa de uma caixa de
email). O destinatário está configurado em `wrangler.toml`. Para diagnosticar
falhas, execute `npx wrangler tail site-contact-form` e envie o formulário
novamente; os logs mostram o status e a resposta de erro da Resend.

Defina `NEXT_PUBLIC_TURNSTILE_SITE_KEY` com a chave pública e
`NEXT_PUBLIC_CONTACT_API_URL` com o URL publicado do Worker no ambiente de build
do site. Depois gere novamente o site estático. O Worker já restringe pedidos à
origem e ao hostname do domínio configurados em `wrangler.toml`; ajuste ambos se
o domínio de publicação mudar.
