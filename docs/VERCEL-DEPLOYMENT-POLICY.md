# Política de deploys Vercel

## Objetivo

Evitar consumir a cota gratuita com previews gerados por alterações intermediárias. O GitHub Actions é a validação padrão de lint, testes e build.

## Configuração aplicada em 15/11/2026

Projeto Vercel: `anelisechagas`.

No projeto Vercel, **Settings → Build and Deployment → Ignored Build Step**, foi configurado:

```sh
if [ "$VERCEL_ENV" = "production" ]; then exit 1; fi; case "$VERCEL_GIT_COMMIT_REF" in preview/*) exit 1 ;; *) exit 0 ;; esac
```

Semântica da Vercel: **exit 0 = ignorar build**; **exit 1 = executar build**.

- Produção: não é ignorada pela regra.
- Branches normais (`fix/*`, `test/*`, `ci/*`, `docs/*`): build de preview ignorado.
- Branches `preview/*`: build de preview permitido sob demanda, sujeito à cota.
- A regra **não garante que uma tentativa ignorada não conte em todas as métricas de cota**; acompanhar uso no painel Vercel.
- A configuração não muda domínio, proteção SSO, variáveis de ambiente ou deployments já publicados.

## Processo de trabalho

1. Trabalhar em branch normal, com commits agrupados por mudança coerente.
2. Executar lint, testes, build e auditoria no GitHub Actions.
3. Para testar o ambiente hospedado, preparar branch `preview/<assunto>` a partir do commit validado. Evitar pushes intermediários nessa branch.
4. Confirmar no painel Vercel que existe cota antes de solicitar um preview. Não repetir tentativas quando a cota estiver esgotada.
5. Para produção, manter revisão e autorização explícita de merge/deploy, seguidas de smoke tests e verificação das integrações. `READY` sozinho não comprova funcionamento.

## Reversão

Remover o comando em **Settings → Build and Deployment → Ignored Build Step** para voltar ao comportamento padrão, após avaliar o orçamento de deploys. Não remover proteções de deployment.
