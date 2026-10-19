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
