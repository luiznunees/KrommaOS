---
name: go
description: >
  Executa múltiplas tarefas em sequência ou paralelo. Aceita uma lista de skills ou comandos
  e as executa de forma orquestrada. Use quando o usuário dispor "/go", "roda isso tudo",
  "faz tudo", "quero executar várias tarefas", ou listar múltiplas ações num único pedido.
---

# /go — Execução batch

## Como funciona

O usuário descreve várias tarefas. O `/go` identifica quais skills atendem cada uma e executa na ordem correta, respeitando dependências entre elas.

---

## Workflow

### Passo 1 — Entender o escopo

Se o usuário já listou as tarefas, organizar. Se não, perguntar:

"O que você quer fazer? Pode listar tudo que precisa."

Exemplos de resposta do usuário:
- "Quero criar um post sobre SEO local e depois salvar no GitHub"
- "Preciso de um relatório de ads, uma análise de dados, e um email pro cliente X"
- "Faz o SEO completo, publica um tema e salva tudo"

---

### Passo 2 — Mapear skills

Mapear cada tarefa para a skill correspondente:

| Tarefa do usuário | Skill |
|-------------------|-------|
| "criar post/carrossel" | carrossel |
| "artigo de blog + post" | publicar-tema |
| "SEO completo" | seo |
| "campanha Google Ads" | anuncio-google |
| "relatório de ads" | relatorio-ads |
| "analisar dados/planilha" | analisar-dados |
| "email" | email-profissional |
| "avaliações do Google" | responder-avaliacoes |
| "publicar/postar" | aprovar-post |
| "dashboard/relatório semanal" | dashboard |
| "salvar/commit" | salvar |
| "abrir sessão" | abrir |
| "atualizar contexto" | atualizar |

---

### Passo 3 — Ordenar

Respeitar dependências:
1. `abrir` ou `atualizar` primeiro (contexto)
2. Tarefas de produção (`carrossel`, `seo`, `anuncio-google`, `analisar-dados`)
3. `publicar-tema` ou `aprovar-post` (depende de carrossel)
4. `relatorio-ads` (depende de dados de campanha)
5. `salvar` por último (versionar tudo)

Tarefas independentes podem rodar em paralelo usando o subagent `@general`.

---

### Passo 4 — Execução

Para cada tarefa:
1. Carregar a skill com `skill({ name: "..." })`
2. Seguir o workflow da skill
3. Só avançar quando a anterior terminar (ou for independente)
4. Se uma falhar, perguntar se continua com as restantes

---

### Passo 5 — Resumo final

```
? /go — Resumo da execução

[x] carrossel "SEO Local" — concluído
[x] email para cliente — concluído
[ ] salvar — pendente (usuário optou por não salvar ainda)

Tempo estimado: [N] minutos
```

---

## Paralelismo com @general

Para tarefas independentes (ex: criar carrossel + escrever email), usar:

"@general, use a skill carrossel para criar um post sobre [tema]"
"@general, use a skill email-profissional para rascunhar um email para [destinatário]"

Aguardar ambos terminarem antes de prosseguir.

---

## Regras

- Tarefas que dependem de contexto (`abrir`, `atualizar`) rodam primeiro sempre
- Nunca executar `salvar` sem confirmar com o usuário
- Se o usuário não especificou prioridade, usar a ordem que ele falou
- Reportar progresso a cada tarefa concluída
