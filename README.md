# Forja de Treino

App de treino de academia que roda no navegador, no computador e no celular. Não tem servidor, cadastro nem anúncio: os dados ficam no seu aparelho.

## O que ele faz

- **A forja.** Sua constância vira temperatura. Cada treino aquece, cada dia parado esfria 10%. A faixa ideal fica entre 950 e 1250 °C, a mesma em que o aço é forjado.
- **140 exercícios com foto de execução**, mapa dos músculos trabalhados, passo a passo, dicas e erros comuns. Dá para criar os seus, com foto.
- **Planos do seu jeito.** Gere um plano pelo perfil em um toque, escolha um dos 10 programas prontos, peça ao coach ou monte do zero. Tudo é editável: séries, repetições, carga, descanso, cadência, técnica e bi-set.
- **Modo treino.** Um exercício em foco, sugestão da carga do dia, cronômetro de descanso, recordes detectados na hora e resumo com imagem para compartilhar.
- **Nível, 30 conquistas e um desafio novo por semana.**
- **Coach com IA.** Conversa com contexto do seu histórico, treino do dia sob medida, avaliação por fotos do corpo e revisão do plano pela sua frequência real.
- **Evolução.** Recordes e 1RM estimado por exercício, séries semanais por grupo muscular, calendário de treinos, medidas e fotos com antes e depois.
- **Ferramentas.** Treino expresso, cronômetro de intervalos, calculadora de anilhas e de 1RM.
- **Backup** em um arquivo, para levar os dados de um aparelho para outro.

## Publicar no GitHub Pages

1. Crie um repositório público (por exemplo, `forja-de-treino`).
2. Em **Add file → Upload files**, envie todo o conteúdo desta pasta: `index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, `README.md`, `LICENSE` e a pasta `icons`. O `index.html` precisa ficar na raiz do repositório.
3. Em **Settings → Pages**, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)** e salve.
4. Em um ou dois minutos o app abre em `https://SEU-USUARIO.github.io/forja-de-treino/`.

Para atualizar, envie o `index.html` e o `sw.js` novos por cima dos antigos. Seus dados não são afetados.

## Instalar no celular

- **iPhone:** abra o endereço no Safari, toque em Compartilhar e em **Adicionar à Tela de Início**.
- **Android:** abra no Chrome, menu ⋮ e **Instalar app**.

Depois da primeira abertura o app funciona sem internet. Só o coach com IA precisa de conexão.

## Coach com IA e a sua chave

O coach funciona de três formas:

1. **Dentro do Claude**, quando o app é aberto como página publicada lá: usa a sua conta, sem chave.
2. **Com chave de API** do Google Gemini ou da Anthropic, digitada em Coach → Opções. A chave fica guardada só no navegador do seu aparelho e não entra no backup.
3. **Copiando e colando**: o app monta o pedido, você cola em qualquer assistente e devolve a resposta.

**Nunca coloque sua chave de API em nenhum arquivo deste repositório.** Ele é público.

## Seus dados

Planos, histórico, medidas e conquistas ficam no armazenamento do navegador. As fotos do corpo ficam no IndexedDB do aparelho e só saem dele quando você pede uma avaliação ao coach. Use **Ajustes → Exportar backup** de vez em quando: limpar os dados do navegador apaga tudo.

## Estrutura

```
index.html              o app inteiro: estilos, código, fontes e fotos embutidos
manifest.webmanifest    instalação na tela de início
sw.js                   cache para funcionar sem internet
icons/                  ícones do app
```

## Créditos

Fotos de execução: [Free Exercise DB](https://github.com/yuhonas/free-exercise-db), em domínio público (Unlicense). Fontes: Big Shoulders e Figtree (SIL Open Font License).

Este app não substitui o acompanhamento de um profissional de educação física ou de um médico.
