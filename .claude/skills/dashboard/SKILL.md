---
name: dashboard
description: >
  Gera um relatório semanal do que foi produzido no KrommaOS: varre marketing/, saidas/, _memoria/,
  identifica entregas da semana, métricas de SEO/ads, tarefas pendentes, e sugere prioridades.
  Use quando o usuário disser "dashboard", "relatório semanal", "resumo da semana", "/dashboard".
---

# /dashboard — Relatório semanal

## Pré-requisitos

- `_memoria/empresa.md` e `_memoria/estrategia.md` preenchidos

---

## Workflow

### Passo 1 — Escopo temporal

Perguntar: "Quer o relatório dessa semana ou de um período específico?"

Se não especificar, considerar a semana corrente (segunda a domingo).

---

### Passo 2 — Varredura

Listar e analisar:

**marketing/**
- `conteudo/` — quantos carrosséis/posts foram criados no período
- `seo/` — arquivos de SEO existentes (01 a 08), quais passos foram feitos
- `campanhas/` — CSVs de Google Ads criados, relatórios existentes
- `avaliacoes-google/` — respostas registradas

**saidas/**
- `analises/` — resumos executivos gerados
- `dashboard/` — dashboards anteriores (para comparativo)
- `emails/` — rascunhos criados

**_memoria/**
- `estrategia.md` — o foco atual ainda faz sentido?
- `empresa.md` — tem cliente novo, ferramenta, mudança?

**identidade/**
- `design-guide.md` — preenchido ou ainda placeholder?

---

### Passo 3 — Montagem do relatório

Gerar markdown em `saidas/dashboard/<YYYY-MM-DD>-semanal.md`:

```markdown
# Dashboard Semanal — [Nome do Negócio]
*[data inicial] a [data final]*

## Resumo executivo
[2-3 linhas]

## O que foi produzido
| Área | Quantidade | Detalhes |
|------|-----------|----------|
| Conteúdo (carrosséis/posts) | N | [links/temas] |
| SEO | N passos | [quais] |
| Google Ads | N campanhas | [quais] |
| Avaliações respondidas | N | - |
| Análises de dados | N | [quais] |
| Emails | N | [para quem] |

## Comparativo com semana anterior
[se houver dashboard anterior, comparar]

## Pendências
- [ ] [pendência 1]
- [ ] [pendência 2]

## Sugestões para próxima semana
1. [baseado em _memoria/estrategia.md]
2. [baseado em tarefas incompletas]
3. [baseado em gargalo mencionado]

## Métricas (se disponível)
- [metrica relevante do negócio]
```

---

### Passo 4 — Pergunta final

"Quer que eu publique isso no GitHub com o /salvar, ou quer exportar em HTML?"
