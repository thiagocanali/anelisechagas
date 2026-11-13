# Auditoria de dependências — 13/11/2026

O job `Production dependency audit` executa `npm audit --omit=dev --audit-level=high` após `npm ci`. A auditoria da PR #17 (run 43448510898) encontrou **5 vulnerabilidades de severidade alta** no conjunto instalado, conforme relatório do npm:

- `vue` / `@vue/server-renderer`: [GHSA-g2v6-rqmx-r4w6](https://github.com/advisories/GHSA-g2v6-rqmx-r4w6)
- `nanoid`: [GHSA-28wg-ghj8-5hjv](https://github.com/advisories/GHSA-28wg-ghj8-5hjv), [GHSA-2v37-7h3g-55p8](https://github.com/advisories/GHSA-2v37-7h3g-55p8), [GHSA-xwg4-73v4-xw9w](https://github.com/advisories/GHSA-xwg4-73v4-xw9w)
- `postcss`: [GHSA-qx2v-qp2m-jg93](https://github.com/advisories/GHSA-qx2v-qp2m-jg93), [GHSA-6g55-p6wh-862q](https://github.com/advisories/GHSA-6g55-p6wh-862q), [GHSA-fxqj-rqcc-2cmp](https://github.com/advisories/GHSA-fxqj-rqcc-2cmp), [GHSA-r28c-9q8g-f849](https://github.com/advisories/GHSA-r28c-9q8g-f849)
- `source-map-js`: [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q)

## Remediação

1. Em um ambiente com acesso ao registro npm, executar `npm ci`, `npm audit --omit=dev` e `npm audit fix` **sem** `--force`.
2. Revisar o diff de `package.json` e `package-lock.json`, garantir versões compatíveis e executar `npm ci`, `npm run lint`, `npm test`, `npm run build` e `npm audit --omit=dev --audit-level=high`.
3. Fazer commit dos arquivos de dependência **juntos**, abrir PR e exigir ambos os jobs verdes antes do merge.
4. Auditar separadamente as dependências de desenvolvimento (`npm audit`) e planejar a substituição do Vue CLI por Vite para reduzir a árvore legada.

**Nota:** `--omit=dev` é um filtro do npm audit; não comprova que todos os pacotes listados são executados no navegador. Não afirmar que a aplicação é segura apenas por passar na auditoria. Não ignorar o job falho para integrar alterações de dependências.
