# Forja de Treino

App de treino de academia que roda no navegador do celular e do computador, e pode ser instalado na tela de início como um aplicativo.

- **140 exercícios com fotos reais de execução** (posição inicial e final), músculos trabalhados, passo a passo, dicas e erros comuns
- **Treinos totalmente editáveis**: planos divididos em dias, séries individuais (aquecimento, normal, drop, falha) com repetições, carga e descanso próprios, técnica, cadência, RIR, bi-set e observações
- **Personal IA** (Gemini ou Claude) especialista em hipertrofia, emagrecimento e mobilidade:
  - **Avaliação por fotos** → análise de proporções e postura → treino montado → começar na hora
  - **Revisão do treino** cruzando a frequência real, a evolução das cargas e fotos novas → plano novo com a lista do que mudou
  - Conversa livre com o personal
  - Funciona com chave de API ou no modo copiar e colar (sem chave, sem custo)
- **Modo treino**: registro de séries e cargas, cronômetro de descanso com ±15 s, tela sempre ligada, cargas levadas de volta ao plano
- **Progresso**: raio-x da frequência, evolução de carga por exercício, volume semanal, medidas corporais e fotos antes/depois
- **Funciona offline** depois da primeira visita · dados guardados só no seu aparelho · backup em arquivo

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (por exemplo `forja-de-treino`), público.
2. Envie **todo o conteúdo desta pasta** para a raiz do repositório (no site do GitHub: *Add file → Upload files* e arraste os arquivos e a pasta `icons`). O `index.html` precisa ficar na raiz, não dentro de outra pasta.
3. No repositório, vá em **Settings → Pages**, em *Source* escolha **Deploy from a branch**, branch **main**, pasta **/ (root)** e salve.
4. Em 1 ou 2 minutos o app estará em `https://SEU-USUARIO.github.io/forja-de-treino/`.

## Instalar no celular

- **iPhone**: abra o endereço no Safari → botão Compartilhar → **Adicionar à Tela de Início**.
- **Android**: abra no Chrome → menu ⋮ → **Instalar app**.

## Personal IA

Em *Personal → Conectar*, cole uma chave de API:

- Gemini: crie grátis em [aistudio.google.com](https://aistudio.google.com) → *Get API key*
- Claude: [console.anthropic.com](https://console.anthropic.com) → *API Keys*

A chave fica salva apenas no navegador do aparelho. O botão **Buscar atuais** lista os modelos que a sua chave enxerga hoje. Sem chave, o app gera o pedido completo para você colar no Gemini ou no Claude e lê a resposta de volta.

> Não coloque sua chave de API em nenhum arquivo do repositório.

## Estrutura

```
index.html              o app inteiro (estilos, código e fotos embutidos)
manifest.webmanifest    instalação na tela de início
sw.js                   cache para funcionar offline
icons/                  ícones do app
```

## Créditos

Fotos de execução: [Free Exercise DB](https://github.com/yuhonas/free-exercise-db), em domínio público (Unlicense).
Este app não substitui acompanhamento de profissional de educação física ou médico.
