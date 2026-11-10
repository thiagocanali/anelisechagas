# SEO e preparação para publicação

Este documento registra o que já existe e o que depende de informações ou acessos externos. Não substitui uma auditoria de indexação em produção.

## Implementado

- Documento HTML em português do Brasil (`lang="pt-BR"`).
- Título e descrição que identificam a profissional e o serviço sem prometer resultados.
- Metadados Open Graph e Twitter com título e descrição.
- `robots.txt` permitindo rastreamento público.
- Cores da interface do navegador declaradas para os temas claro e escuro.
- Conteúdo institucional com identificação profissional e CRP.

## Publicação atual

- Ambiente de produção da Vercel: https://anelisechagas.vercel.app/.
- Alias padrão confirmado no projeto Vercel; deployment atual vinculado ao branch `main` e ao commit `0a83431d13f7bda81e298a07ede054fd86346f15`.
- A existência desse alias não confirma que ele seja o domínio institucional definitivo. Validar essa decisão com a responsável antes de configurar canonical, sitemap ou ferramentas de indexação.
- A publicação em produção foi confirmada pela Vercel; a inspeção visual e os testes em navegadores/dispositivos reais ainda precisam ser executados.

## Pendente antes de configurar indexação definitiva

1. Confirmar o domínio oficial e a URL pública canônica.
2. Configurar `rel="canonical"` somente depois de confirmar a URL final e a estratégia de domínio (com ou sem www).
3. Gerar `sitemap.xml` com URLs reais e canônicas; não publicar sitemap com domínio provisório.
4. Adicionar imagem Open Graph/Twitter própria, com autorização de uso e dimensões adequadas. Não usar foto de paciente ou imagem sem licença.
5. Verificar domínio e propriedade no Google Search Console e Bing Webmaster Tools.
6. Conferir redirecionamento HTTPS, domínio preferencial e respostas HTTP da hospedagem.

## Revisões de qualidade antes do lançamento

- Executar Lighthouse em produção para desempenho, acessibilidade, boas práticas e SEO.
- Testar teclado, foco visível, zoom de 200%, leitores de tela e preferência por movimento reduzido.
- Conferir contraste nos temas claro e escuro e em larguras móveis.
- Validar os metadados de compartilhamento em ferramentas de prévia após a publicação.
- Confirmar com Anelise os dados profissionais, formação, abordagem, público e modalidades exibidos no site.

## Cuidados

- Não inserir endereço, especialização, títulos, convênios, horários ou modalidades sem confirmação da profissional.
- Não incluir depoimentos, imagens, histórias ou dados de pacientes.
- Não adicionar promessas de resultados, linguagem sensacionalista ou ofertas promocionais.
- Não publicar dados clínicos ou informações de pacientes neste repositório.
- SEO técnico não garante posicionamento, indexação ou captação de pacientes.
