# Verificação de integridade do build

O workflow `Validate` executa `node scripts/check-build.cjs` **depois** de `npm run build`.

## Reproduzir

```sh
npm ci
npm run lint
npm test
npm run build
node scripts/check-build.cjs
```

O verificador exige `dist/index.html`, idioma pt-BR, título, descrição, viewport e metadados Open Graph; também confere o favicon, os bundles JavaScript e as folhas CSS referenciadas pelo HTML. Os assets precisam existir, ser não vazios e apontar para dentro de `dist/`.

## Diagnóstico de falhas

- **No production stylesheet referenced**: inspecione os elementos `<link rel="stylesheet">` no HTML gerado; a ordem de atributos não deve importar.
- **Missing referenced asset**: verifique o caminho de saída do bundler, `publicPath` e URLs com base absoluta.
- **Unresolved Vue CLI template variable**: revise o processamento do HTML na configuração do bundler.
- **Missing metadata**: preserve metadados ao alterar o arquivo HTML de entrada.

A checagem não substitui teste visual ou funcional no navegador. A migração Vue CLI → Vite deverá preservar esse contrato ou atualizar conscientemente as verificações, sem desativá-las para obter CI verde.

Nenhum deploy é necessário para executar essa validação.
