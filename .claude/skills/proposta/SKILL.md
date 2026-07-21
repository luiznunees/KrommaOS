---
name: proposta
description: >
  Gera uma proposta comercial profissional para um cliente a partir do briefing. Inclui
  escopo, cronograma, investimento (3 opções), identidade visual na formatação.
  Salva em propostas/<cliente>-<data>.md e opcionalmente exporta em HTML.
  Use quando o usuário disser "proposta", "fazer proposta", "enviar orçamento", "/proposta".
---

# /proposta — Proposta comercial

## Dependências

- Briefing em `briefings/` OU respostas claras do usuário
- `_memoria/empresa.md` — para sua identidade e posicionamento
- `_regras/orcamento.yaml` — se existir, respeitar regras de precificação

---

## Workflow

### Passo 1 — Coletar o necessário

Se briefing em `briefings/` existir, ler automaticamente.

Se não existir, perguntar:
1. "Pra quem é a proposta? (cliente)"
2. "Qual o escopo? (site, identidade visual, SEO, conteúdo, anúncios, etc)"
3. "Tem prazo definido?"
4. "Já conversaram sobre valores ou quer que eu sugira?"

---

### Passo 2 — Estruturar a proposta

Ler `_regras/orcamento.yaml` (se existir) para respeitar regras de precificação.

Gerar em `propostas/<cliente>-<YYYY-MM-DD>.md`:

```markdown
# Proposta — [Nome do Cliente]

**Preparado por:** [seu nome / agência]
**Data:** [data]

---

## Resumo executivo
[2-3 linhas sobre o que está sendo proposto]

---

## Entendimento do desafio
[parágrafo mostrando que entendeu o cliente — baseado no briefing]

---

## Escopo do projeto

### Entregáveis
- [ ] [entregável 1 com descrição]
- [ ] [entregável 2 com descrição]
- [ ] [entregável 3 com descrição]

### Cronograma estimado
| Fase | Duração | Entregas |
|------|---------|----------|
| [Fase 1] | [N dias] | [entregas] |
| [Fase 2] | [N dias] | [entregas] |

---

## Investimento

### Opção 1 — [Nome opção] — R$ [valor]
[indicação de quem escolhe essa opção]
- [detalhe 1]
- [detalhe 2]

### Opção 2 — [Nome opção] — R$ [valor] (recomendado)
[indicação]
- [detalhe 1]
- [detalhe 2]

### Opção 3 — [Nome opção] — R$ [valor]
[indicação]
- [detalhe 1]
- [detalhe 2]

*Formas de pagamento: [à vista / parcelado / 50%+50%]*

---

## Próximos passos
1. [ação 1]
2. [ação 2]
3. [ação 3]
```

---

### Passo 3 — Revisão

Mostrar a proposta pro usuário e perguntar:
- "Quer ajustar valores, escopo ou alguma seção?"
- "Quer exportar como HTML pra enviar pro cliente?"

Se exportar HTML:
- Usar `identidade/design-guide.md` como tema visual (seu, não do cliente)
- Salvar em `propostas/<cliente>-<data>.html`

---

### Passo 4 — Ações pós-proposta

Sugerir:
"Quer que eu crie a pasta do cliente com `/novo-projeto` já preparando o terreno? Se ele aprovar, começamos na hora."

---

## Regras

- Respeitar `_regras/orcamento.yaml` rigorosamente
- Se não houver regra de precificação, perguntar faixa de valor antes de sugerir
- Opções de investimento devem ter diferença clara de escopo, não só de preço
- Nunca enviar proposta sem o usuário revisar e aprovar
