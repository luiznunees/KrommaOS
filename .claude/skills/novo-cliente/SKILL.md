---
name: novo-cliente
description: >
  Onboarding completo de um novo cliente do Método Kromma. Faz pesquisa enxuta
  automática sobre a empresa, gera diagnóstico de gaps, prepara o briefing da
  reunião de descoberta, extrai as dores da transcrição e monta o contexto do
  cliente em clientes/<nome>/. Use quando o usuário disser "novo cliente",
  "onboarding", "começar cliente novo", "/novo-cliente", ou mencionar que
  conseguiu um lead novo.
---

# /novo-cliente — Onboarding completo de cliente

## Dependências

- `_contexto/oferta.md` — método, valores, pacotes
- `_memoria/empresa.md` — seu posicionamento e identidade
- `_memoria/preferencias.md` — tom de voz
- Acesso à web (pesquisa automatizada)

---

## Workflow geral

São 4 fases. O usuário participa ativamente em 3 momentos: dar o nome da empresa, confirmar o diagnóstico e colar a transcrição da reunião. O resto o sistema faz.

```
Fase 1 — Cadastro + Pesquisa
Fase 2 — Diagnóstico de gaps
Fase 3 — Briefing da reunião de descoberta
Fase 4 — Pós-reunião: extração de dores + definição de escopo
```

---

## Fase 1 — Cadastro e pesquisa enxuta

### Perguntar (uma de cada vez)

1. "Qual o nome da empresa?"
2. "Qual o segmento? (ex: imobiliária, clínica, academia, loja física...)"
3. "Tem site? Manda o link se tiver."
4. "Tem Instagram ou Facebook ativo? Manda os links."
5. "Sabe se eles têm Google Meu Negócio? (se não souber, a gente descobre)"

### Pesquisa automática

Com o nome + segmento, fazer as buscas abaixo. Se o usuário forneceu links, usá-los. Se não, pesquisar.

**O que pesquisar (usar websearch ou webfetch):**

1. **Google Meu Negócio** — pesquisar `"[nome da empresa]"` no Google e verificar se aparece o painel do GMB com avaliações, fotos, horários
2. **Site** — se não tem link, pesquisar `"[nome da empresa] site"` e verificar se existe. Se existe, acessar e anotar: parece profissional? atualizado? tem blog? carrega rápido?
3. **Redes sociais** — pesquisar `"[nome da empresa] Instagram"` e `"[nome da empresa] Facebook"`. Se existir, anotar: quantos seguidores? última postagem? frequência? engajamento?
4. **Avaliações** — se tem GMB, abrir e ver: nota, número de reviews, se o dono responde, tom das avaliacoes negativas
5. **Concorrência** — pesquisar `"[segmento] [cidade/região]"` e ver quem aparece primeiro. Anotar 2-3 concorrentes diretos e o que eles têm de presença digital

### Consolidar resultado da pesquisa

Apresentar num resumo curto:

```
## Pesquisa — [Nome da Empresa]

Site: [existe / não existe / existe mas desatualizado]
GMB: [existe com N avaliações e nota X / não existe]
Instagram: [existe, última postagem em DATA / não existe]
Facebook: [idem]
Reviews: [dono responde / não responde / não tem]

Concorrência direta:
- [Concorrente 1]: [o que tem de presença]
- [Concorrente 2]: [o que tem de presença]
```

---

## Fase 2 — Diagnóstico de gaps

Com base na pesquisa, listar gaps em categorias. Usar o `_contexto/oferta.md` como referência do que o Método Kromma resolve.

Listar só o que for detectado. Não inventar gap que não existe.

### Categorias de gap

| Gap | O que indica |
|-----|-------------|
| **GMB inexistente ou incompleto** | Não tem GMB, ou tem mas sem fotos, sem categoria, sem posts |
| **Zero reviews ou sem resposta** | Tem GMB mas avaliações antigas e/ou dono não responde |
| **Site inexistente ou capenga** | Não tem site, ou site claramente parado (desatualizado, não responsivo) |
| **Redes abandonadas** | Instagram/Facebook com última postagem há meses |
| **Zero anúncio pago** | Não aparece em pesquisa paga (Google Ads) — inferir pela ausência de anúncio nas buscas |
| **Concorrência mais forte** | Concorrentes diretos têm presença digital claramente superior |
| **Sem conteúdo recorrente** | Último post ou artigo tem mais de 30 dias |

### Apresentar ao usuário

```
## Diagnóstico — [Empresa]

? [Gap 1]
? [Gap 2]
? [Gap 3]

Isso é o que a gente conseguiu identificar só com pesquisa pública.
Na reunião com o cliente a gente valida e descobre o que mais tem por trás.
```

Perguntar: "Confirma esse diagnóstico? Pode ajustar ou adicionar algo que você sabe do cliente."

---

## Fase 3 — Briefing da reunião de descoberta

Gerar um roteiro de perguntas pra reunião presencial com o cliente, baseado nos gaps encontrados. O objetivo é descobrir a dor real e o que "tirar das costas" dele.

### Estrutura do roteiro

**Abertura:**
- "O que te motivou a buscar ajuda agora? Teve algo específico que aconteceu?"
- "O que você espera que mude nos próximos 3 meses com presença digital?"

**Diagnóstico validado (baseado nos gaps):**
- Pergunta específica pra cada gap encontrado
- Ex: se GMB não existe → "Você já teve Google Meu Negócio? Sabia o que ele faz?"
- Ex: se site desatualizado → "O site atual te traz cliente? Ou você sente que ele não ajuda?"

**Descoberta de dores (o que tirar das costas):**
- "O que você mais odeia fazer na parte de marketing hoje?"
- "O que toma mais tempo do seu dia que você gostaria que alguém fizesse?"
- "Se você pudesse terceirizar uma coisa agora, qual seria?"

**Processo atual e orçamento:**
- "O que você já tentou fazer antes? (contratou alguém? tentou fazer sozinho?)"
- "Quanto você gasta por mês hoje com divulgação? (anúncio, designer, tudo)"
- "Quanto tempo por semana você dedica a marketing?"

**Fechamento:**
- "O que seria o resultado ideal pra você? Em números ou em sensação."
- "Fora isso, tem mais alguma coisa que você acha que a gente deveria saber?"

### Salvar roteiro

Salvar em `briefings/<cliente>-<data>-roteiro.md`:

```markdown
# Roteiro de descoberta — [Cliente]
*Gerado em [data]*

## Gaps a validar
- [gap 1]
- [gap 2]

## Perguntas
[lista acima, personalizada]

## Anotações pós-reunião
*— preencher depois da reunião —*
```

Instruir o usuário: "Leva esse roteiro na reunião. Pode imprimir ou ler do celular. Depois da reunião, cola aqui a transcrição (ou o resumo do que foi falado) que eu extraio as dores e fecho o escopo."

---

## Fase 4 — Pós-reunião: extração e definição de escopo

### Se o usuário colar transcrição

Extrair da transcrição:

1. **Dores explícitas** — o que o cliente disse textualmente que incomoda
2. **Dores implícitas** — o que dá pra inferir pelo tom ou histórico
3. **O que tirar das costas dele** — tarefas específicas que ele quer delegar
4. **Orçamento e disposição** — o que ele disse ou deixou transparecer sobre quanto pode investir
5. **Urgência** — quer pra ontem ou pode esperar?

### Montar o resumo pós-reunião

```
## Pós-reunião — [Cliente]

### Dores
1. [dor explícita]
2. [dor implícita]
3. [dor explícita]

### O que delegar
- [tarefa 1]
- [tarefa 2]

### Disposição financeira
- Mencionou orçamento de R$ X / mês
- Parece disposto a investir [sim / talvez / não muito]

### Urgência
[urgente / médio prazo / sem pressa]
```

### Se o usuário colar resumo próprio (não transcrição)

Perguntar:
1. "Quais as principais dores que ele mencionou?"
2. "O que ele quer que a gente tire das costas dele?"
3. "Ele já falou de orçamento? Quanto?"
4. "Qual o prazo ideal?"

### Definir escopo e montar contexto do cliente

Com base nas dores + gaps + oferta.md, definir:

- **Escopo do Método Kromma pra esse cliente:**
  - Setup incluso: [itens]
  - Mensalidade incluso: [itens]
  - Upsell futuro: [itens se aplicável]
- **Formato comercial:**
  - Setup: R$ [valor na faixa da oferta]
  - Mensalidade: R$ [valor na faixa da oferta]
  - Justificativa: [ex: "cliente porte médio, site capenga, sem GMB — topo da faixa"]

### Salvar pasta do cliente

Criar `clientes/<slug-do-nome>/` com:

1. **`contexto.md`** — visão completa do cliente:
   ```markdown
   # [Nome da Empresa]
   
   ## Identificação
   - Segmento: [segmento]
   - Contato: [o que o usuário souber]
   - Site: [link]
   - Redes: [links]
   
   ## Diagnóstico inicial
   [gaps encontrados]
   
   ## Dores (pós-reunião)
   [dores extraídas]
   
   ## Escopo contratado
   - Setup: R$ X
   - Mensalidade: R$ Y
   - Incluso: [lista]
   
   ## Observações
   [qualquer nota importante]
   ```
   
2. **`diagnostico.md`** — pesquisa + gaps
3. **`briefing-roteiro.md`** — se foi salvo na fase 3

### Finalizar

Mostrar pro usuário:

```
? Cliente cadastrado em clientes/<slug>/
? Diagnóstico salvo
? Escopo definido

Setup: R$ X
Mensalidade: R$ Y

Próximo passo sugerido:
- Quer que eu já gere uma proposta comercial com `/proposta`?
- Ou quer começar a execução direto? (ex: criar GMB, primeiro carrossel...)
```

---

## Regras

- O diagnóstico é baseado em pesquisa pública — nunca inventar dado. Se não encontrar, falar "não encontrado"
- Não pular perguntas ou fases. Cada fase depende da anterior
- Se o cliente já existir em `clientes/`, avisar e perguntar se quer atualizar ou criar novo
- Manter tom consultivo: você é especialista, não burocrata
- Salvar tudo antes de encerrar — nada pode ficar só na conversa
- Após finalizar, perguntar: "Isso mudou teu contexto de negócio? Quer que eu atualize a memória?"
