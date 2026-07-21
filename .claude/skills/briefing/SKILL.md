---
name: briefing
description: >
  Conduz uma entrevista de briefing com um cliente potencial ou novo. Captura dados da empresa,
  objetivos do projeto, referências visuais, concorrentes, prazos e orçamento. Gera um documento
  estruturado em briefings/ e sugere os próximos passos (proposta, novo-projeto).
  Use quando o usuário disser "briefing", "entrevistar cliente", "capturar briefing", "/briefing".
---

# /briefing — Captura de briefing de cliente

## Dependências

- `_memoria/empresa.md` — para saber sua própria identidade e posicionamento
- `_memoria/preferencias.md` — para calibrar tom da entrevista

---

## Workflow

### Passo 1 — Coletar dados do lead

Fazer as perguntas em ordem, uma de cada vez. Se a resposta vier completa, não repetir.

**Identificação:**
1. "Qual o nome da empresa/cliente?"
2. "Qual o ramo? O que eles fazem?"

**Projeto:**
3. "O que precisa ser feito? (site, identidade visual, conteúdo, SEO, anúncios, tudo?)"
4. "Já tem algo existente? (site atual, logo, redes sociais — manda os links)"
5. "Tem referências visuais de sites ou marcas que admira? (links ou prints)"

**Público e concorrência:**
6. "Quem é o cliente ideal deles? (descreve em 1-2 frases)"
7. "Quem são os principais concorrentes?"

**Prazo e orçamento:**
8. "Qual o prazo ideal e qual o prazo máximo?"
9. "Tem orçamento estimado ou precisa de proposta?"

---

### Passo 2 — Estruturar o briefing

Salvar em `briefings/<slug-do-cliente>-<YYYY-MM-DD>.md`:

```markdown
# Briefing — [Nome do Cliente]
*Capturado em [data]*

## Identificação
- **Empresa:** [nome]
- **Ramo:** [descrição]

## Escopo do projeto
[lista do que precisa ser feito]

## Situação atual
[site atual, logo, redes — links]

## Referências visuais
[links e descrições]

## Público-alvo
[descrição]

## Concorrentes
[lista]

## Prazos
- **Ideal:** [data]
- **Máximo:** [data]

## Orçamento
[estimativa ou "a definir"]

## Observações
[qualquer contexto extra]
```

---

### Passo 3 — Sugerir próximos passos

Baseado no escopo, sugerir:

- **Se precisa de site** → "Quer que eu já crie o projeto com `/novo-projeto` e depois faça o site com `/criar-site`?"
- **Se precisa de identidade visual** → "Depois do projeto criado, posso rodar `/criar-marca` pra definir a identidade."
- **Se precisa de proposta formal** → "Quer que eu gere uma proposta com `/proposta`?"
- **Se escopo pequeno** → "Posso já ir executando aqui mesmo sem criar pasta separada. Prefere assim?"

Perguntar também: "Esse briefing vai virar um cliente ativo? Se sim, já criamos a pasta em clientes/."

---

## Regras

- Não enfileirar perguntas — uma de cada vez, esperar a resposta
- Se o usuário não souber alguma resposta, registrar "a definir" e seguir
- Tom da entrevista: consultivo, não burocrático
- Se o briefing for muito grande, resumir os pontos principais pro usuário confirmar antes de salvar
