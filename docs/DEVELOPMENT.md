# Guia de desenvolvimento

## Sobre o projeto

Site institucional de apresentação profissional da psicóloga Anelise Chagas. O projeto reúne informações sobre a atuação, a abordagem e os canais de contato.

Este repositório é público e não deve armazenar prontuários, anamneses, dados pessoais ou informações de saúde de pacientes.

## Tecnologias

- Vue 3
- Vue CLI 5
- JavaScript
- CSS
- ESLint

## Requisitos

- Node.js 20 (LTS recomendado)
- npm

## Instalação

```bash
npm ci
```

## Desenvolvimento local

```bash
npm run serve
```

O Vue CLI exibirá no terminal o endereço local para acessar a aplicação.

## Validação

Verifique os padrões de código:

```bash
npm run lint
```

Gere a versão de produção:

```bash
npm run build
```

Os arquivos compilados são gerados no diretório `dist/`.

## Estrutura principal

```text
public/
  index.html
  favicon.ico
src/
  components/
    AboutSection.vue
    ContactSection.vue
    HeaderSection.vue
    ServicesSection.vue
  App.vue
  main.js
  style.css
vue.config.js
babel.config.js
package.json
```

## Integração contínua

O workflow `.github/workflows/validate.yml` instala as dependências com `npm ci` e executa lint e build em pull requests e em pushes para a branch `main`.

## Publicação

A integração atual com Vercel gera previews para pull requests. O domínio e as regras de publicação em produção devem ser confirmados nas configurações do projeto Vercel.

## Privacidade e segurança

Este projeto é exclusivamente institucional. Não coloque aqui dados clínicos, documentos de pacientes, credenciais ou informações pessoais sensíveis.

Uma futura plataforma clínica deve ser separada do site público e projetada com autenticação, controle de acesso, armazenamento seguro, política de retenção e avaliação de conformidade com a LGPD e as normas profissionais aplicáveis.
