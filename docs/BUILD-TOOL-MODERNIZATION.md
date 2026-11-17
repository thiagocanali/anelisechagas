# Modernização do build: Vue CLI 5 → Vite

## Estado auditado (15/11/2026)

- Aplicação estática Vue 3, sem API, banco ou autenticação.
- `package.json`: Vue CLI 5, plugins Babel e ESLint da Vue CLI, ESLint 7, `core-js`, `gh-pages`; comandos `serve`, `build`, `lint`, `test`, `deploy`.
- `babel.config.js` usa preset do Vue CLI; `vue.config.js` define `transpileDependencies`.
- `public/index.html` usa `<%= BASE_URL %>` e injeção de scripts do Vue CLI. Não copiar o arquivo diretamente para a raiz sem adaptar esses elementos.
- `jsconfig.json` usa alias `@/*` e alvo ES5. O comportamento do alias e compatibilidade de navegadores devem ser revistos na migração.
- GitHub Actions executa `npm ci`, `npm run lint`, `npm test` e `npm run build` com Node 20.
- PRs de testes e acessibilidade ainda abertas: **não substituir o build no mesmo lote** dessas mudanças.

## Estratégia e critérios de aceite

1. Abrir branch dedicada a partir da `main` atualizada, após avaliar PRs pendentes.
2. Trocar `@vue/cli-service` e plugins CLI por `vite` e `@vitejs/plugin-vue`; manter Vue 3 e contratos de comportamento.
3. Criar `index.html` raiz com metadados preservados, `/favicon.ico` e script de entrada `/src/main.js`. Manter assets públicos em `public/`.
4. Definir alias `@` e configuração de build no Vite. Ajustar `jsconfig.json` e configuração do lint sem relaxar regras.
5. Atualizar `package-lock.json` via `npm install` real; não editar lockfile manualmente.
6. Validar `npm ci`, lint, testes, build e inspeção dos assets gerados em GitHub Actions; testar links internos, modo escuro, viewport móvel e metadados.
7. Executar `npm audit --omit=dev --audit-level=high` e auditar dependências de desenvolvimento; documentar riscos remanescentes.
8. Validar o ambiente Vercel apenas com preview deliberado, dentro da cota; conferir framework preset e build/output directory antes de qualquer merge. `READY` não substitui smoke tests.
9. Não fazer merge nem deploy de produção sem autorização explícita. Manter a branch anterior como caminho de rollback.

## Riscos

- Vue CLI injeta assets de forma diferente do Vite; HTML e favicon precisam ser adaptados.
- Vite pode elevar a versão mínima de Node; verificar compatibilidade com CI e Vercel antes de atualizar.
- A configuração atual do projeto Vercel indica framework `vue`; não alterar preset de produção nesta etapa.
- Alterar `gh-pages` ou scripts de publicação sem verificar uso pode quebrar um fluxo secundário.

## Próxima ação executável

Implementar a migração numa PR isolada com lockfile regenerado e CI verde. Não criar preview automaticamente; usar a política de deploys sob demanda.
