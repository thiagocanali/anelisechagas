# Decisão de infraestrutura — site institucional

## Estado verificado em 15/11/2026

O repositório `thiagocanali/anelisechagas` é um site institucional estático Vue 3, compilado pelo Vue CLI. O `src/main.js` monta `App.vue`; as seções apresentam informações profissionais e links externos (WhatsApp, e-mail, Linktree e redes sociais).

Não há, na arquitetura inspecionada, API própria, persistência de dados, contas de usuários, sessões, migrations, Supabase Auth, Storage, Realtime ou Edge Functions. `package.json` não declara bibliotecas de banco de dados ou Supabase. Busca de código no GitHub por `supabase`, `createClient` e `DATABASE_URL` não retornou ocorrências.

**Decisão:** não provisionar PostgreSQL Neon para este site enquanto não houver requisito de persistência. Criar um banco vazio elevaria custo operacional e superfície de risco sem substituir nenhuma dependência real. O site já opera sem dependência de Supabase.

## Proteção contra regressões

`npm test` inclui `tests/infrastructure-independence.test.cjs`, que verifica o código do site e dependências declaradas contra introdução acidental de Supabase ou de clientes de banco. A regra é intencional para a arquitetura **atual**, não uma proibição definitiva de PostgreSQL.

## Quando houver necessidade de persistência

1. Definir a funcionalidade e os dados estritamente necessários; não coletar informações clínicas sensíveis sem projeto específico de privacidade e segurança.
2. Criar um projeto Neon **independente**, se não existir, com região adequada, SSL, migrations versionadas e limites de plano revisados.
3. Implementar API server-side; nunca enviar `DATABASE_URL` ao navegador.
4. Projetar autenticação e autorização somente se a funcionalidade exigir contas, com testes de isolamento.
5. Ajustar a regra de testes junto à implementação e validar CI antes de qualquer deploy de produção.

## Produção e rollback

Nenhuma variável de ambiente, configuração de produção, domínio, deployment ou serviço Supabase foi alterado nesta decisão. Reverter a proteção exige apenas remover ou ajustar o teste em uma PR revisada.
