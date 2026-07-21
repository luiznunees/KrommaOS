---
name: regras
description: >
  Gerencia as regras de negócio do KrommaOS (CLAs — Conversation Logic Agents).
  Lista, adiciona, edita e remove regras em _regras/. As regras são lidas antes de cada
  resposta para garantir decisões consistentes. Use quando o usuário disser "regras",
  "adicionar regra", "regra de negócio", "/regras".
---

# /regras — CLAs (Conversation Logic Agents)

Regras de negócio que o agente segue rigidamente. Diferente de preferências (tom de voz),
regras são **inderrogáveis** — o agente não pode ignorar ou contornar.

---

## Onde ficam

Arquivos `.yaml` ou `.yml` em `_regras/`.

---

## Formato

```yaml
# _regras/orcamento.yaml
regras:
  - escopo: "propostas e orçamentos"
    regra: "Nunca sugerir valor abaixo de R$ 2.000"
    severidade: "obrigatória"

  - escopo: "propostas e orçamentos"
    regra: "Sempre incluir 3 opções: básica, profissional, premium"
    severidade: "obrigatória"

  - escopo: "propostas e orçamentos"
    regra: "Justificar cada opção com o que o cliente ganha"
    severidade: "recomendada"
```

```yaml
# _regras/comunicacao.yaml
regras:
  - escopo: "emails para cliente"
    regra: "Nunca enviar email sem antes mostrar pro usuário"
    severidade: "obrigatória"

  - escopo: "respostas de avaliação"
    regra: "Avaliações de 3 estrelas ou menos: não responder sem aprovação do usuário"
    severidade: "obrigatória"

  - escopo: "conteúdo público"
    regra: "Nunca mencionar valores ou preços em posts de Instagram"
    severidade: "obrigatória"
```

```yaml
# _regras/operacao.yaml
regras:
  - escopo: "commits"
    regra: "Mensagem de commit sempre em português, no imperativo"
    severidade: "obrigatória"

  - escopo: "commits"
    regra: "Nunca dar git push sem antes mostrar o diff"
    severidade: "obrigatória"

  - escopo: "identidade visual"
    regra: "Nunca usar a cor prohibida definida em identidade/design-guide.md"
    severidade: "obrigatória"
```

---

## Workflow

### Listar regras

Ler todos os arquivos em `_regras/` e mostrar um resumo agrupado por escopo.

### Adicionar regra

Perguntar:
1. "Qual a regra? (descreve em linguagem natural)"
2. "Em qual escopo ela se aplica? (ex: propostas, email, conteúdo, SEO, operação)"
3. "Qual a severidade? (obrigatória / recomendada)"

Salvar no arquivo correspondente em `_regras/`.

### Editar regra

Listar as regras, perguntar qual editar, mostrar o conteúdo atual, aplicar a mudança.

### Remover regra

Listar as regras, perguntar qual remover, confirmar, deletar.

---

## Carregamento automático

No início de cada sessão (via AGENTS.md ou CLAUDE.md), o agente:

1. Lista arquivos em `_regras/*.yaml`
2. Lê o conteúdo de cada um
3. Usa como referência para todas as decisões

Isso garante que regras de negócio sejam aplicadas consistentemente
independente da skill ou do contexto.

---

## Regras

- Regras com severidade "obrigatória" não podem ser ignoradas
- Regras com severidade "recomendada" podem ser discutidas
- Se uma regra conflitar com um pedido do usuário, avisar antes de seguir
- O `/regras` é o único caminho pra alterar regras — editar manualmente também funciona, mas o agente só atualiza via `/regras` a menos que o usuário peça explicitamente
