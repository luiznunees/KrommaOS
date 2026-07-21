---
name: prospeccao
description: >
  Ajuda a enviar mensagens de prospecção para leads sem medo. A partir de uma lista de contatos
  (CSV, texto, planilha), prepara mensagens personalizadas em lote, respeitando tom de voz,
  e sugere a melhor ordem de envio. Use quando o usuário disser "prospecção", "enviar mensagens",
  "cold outreach", "abordar clientes", "tenho medo de enviar mensagem", "/prospeccao".
---

# /prospeccao — Prospecção sem medo

## O que resolve

O usuário tem uma lista de contatos mas trava na hora de enviar a primeira mensagem.
Essa skill elimina o atrito: prepara mensagens personalizadas, valida o tom, e deixa o usuário
só apertar "enviar".

---

## Dependências

- `_memoria/empresa.md` — para saber o que o usuário oferece
- `_memoria/preferencias.md` — para calibrar tom
- Lista de contatos (qualquer formato: CSV, texto colado, lista no chat)

---

## Workflow

### Passo 1 — Receber a lista

Perguntar: "Manda a lista de contatos — pode colar aqui, mandar um CSV, ou falar o caminho do arquivo."

Formatos aceitos:
- Texto colado no chat (nomes + empresas)
- CSV/planilha em `dados/`
- Lista de nomes soltos

Se a lista for grande (>20 contatos), sugerir segmentar: "São 50 contatos. Quer enviar pra todos ou prefere segmentar por tipo? (ex: só os que já tiveram contato, só de um setor, etc)"

---

### Passo 2 — Escolher o canal

Perguntar: "Qual canal você quer usar pra abordar?"

1. **WhatsApp** — mais pessoal, maior taxa de abertura
2. **Email** — mais profissional, melhor pra acompanhamento
3. **LinkedIn** — rede profissional, mensagem direta
4. **SMS** — taxa de abertura alta, mas mais invasivo

---

### Passo 3 — Definir a abordagem

"Qual o objetivo da primeira mensagem?"

1. **Apresentação** — "quem sou, o que faço, bora conversar"
2. **Oferta direta** — "tenho uma proposta, te interessa?"
3. **Valor primeiro** — "preparei um conteúdo gratuito pra você" (menos invasivo)
4. **Reativação** — "já tivemos contato antes, bora retomar"

Para primeiro contato, sugerir opção 3 (valor primeiro) — menor resistência, maior taxa de resposta.

Se o usuário disser "tenho medo de enviar" ou similar:
> "Normal. A primeira mensagem é a mais difícil. Por isso a gente prepara tudo aqui juntos: eu rascunho, você revisa, e quando estiver confortável, envia. Quer tentar com 3 contatos piloto primeiro pra ganhar confiança?"

---

### Passo 4 — Personalizar as mensagens

Para cada contato, gerar:

```
## [Nome do Contato] — [Empresa]

**Mensagem:**

Olá [Nome],

[parágrafo personalizado — mencionar algo específico da pessoa/empresa se souber]

[oferta de valor — conteúdo gratuito, diagnóstico, proposta]

[CTA leve — "topa um café de 15 min?", "posso mandar mais detalhes?"]

Assim, [seu nome]
```

**Regras de personalização:**
- Nunca usar "[Nome]" como placeholder — já deixar preenchido
- Se tiver informação do contato (cargo, empresa, setor), usar na abertura
- Se não tiver informação, mensagem genérica + personalização manual depois
- Máximo de 4 linhas pra WhatsApp, 6 pra email

---

### Passo 5 — Revisão do tom

Mostrar a primeira mensagem pro usuário e perguntar:
- "O tom tá adequado? Quer mais formal, mais casual, mais direto?"
- "Tem algo que não pode faltar ou que não pode ter?"

Ajustar conforme feedback. Depois da aprovação, gerar as demais.

---

### Passo 6 — Preparar lote

Organizar as mensagens em ordem de envio:

```
## Lote 1 — Piloto (3 contatos)

1. [Nome 1] — ok pra enviar?
2. [Nome 2]
3. [Nome 3]

Depois desses, avaliamos juntos e liberamos o restante.
```

---

### Passo 7 — Acompanhamento

Sugerir: "Quer que eu crie uma planilha de acompanhamento em `marketing/prospeccao/<data>/` pra registrar quem respondeu, quem não respondeu, e quem precisa de follow-up?"

Estrutura:
```
marketing/prospeccao/
  <YYYY-MM-DD>-lote-1/
    contatos.csv         (com coluna: status, data_envio, resposta, followup)
    mensagens.md         (todas as mensagens geradas)
```

---

## Regras

- **Nunca** insistir se o usuário disser "depois eu envio" — respeitar o tempo dele
- Se o usuário mostrar medo, oferecer lote piloto de 3 contatos primeiro
- Mensagens devem soar humanas, não de robô de marketing
- Tom sempre conforme `_memoria/preferencias.md`
- Se a lista tiver mais de 100 contatos, sugerir ferramenta de disparo (Mailchimp, RD Station) em vez de manual
