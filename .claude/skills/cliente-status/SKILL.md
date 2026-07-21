---
name: cliente-status
description: >
  Mostra o status de todos os clientes ativos: escopo contratado, entregas realizadas,
  pendências, próximos passos. Varre a pasta clientes/ e compila um painel.
  Use quando o usuário disser "status dos clientes", "painel de clientes", "como estão os clientes",
  "visão geral", "/cliente-status".
---

# /cliente-status — Painel de clientes

## Workflow

### Passo 1 — Varredura

Listar todas as subpastas em `clientes/`. Para cada uma, verificar:

- `briefing.md` ou arquivo de briefing — existe? tem escopo definido?
- `site/` — existe? quantas páginas? tem index.html?
- `entregas/` — quantas entregas registradas?
- `identidade/design-guide.md` — preenchido ou vazio?
- `propostas/` — existe proposta? foi aprovada?

---

### Passo 2 — Montar painel

```markdown
# Painel de Clientes — [Data]

## Resumo
- **Clientes ativos:** [N]
- **Em prospecção:** [N]
- **Entregas no mês:** [N]

---

### [Cliente 1]
**Status:** ? Em andamento / ? Concluído / ? Prospecção
**Escopo:** [site, identidade visual, SEO...]
**Última entrega:** [data] — [o que foi]
**Próximo passo:** [pendência ou ação]
**Faturamento:** R$ [valor] (se registrado)

---

### [Cliente 2]
...
```

---

### Passo 3 — Alertas

Identificar automaticamente:
- Clientes sem entrega há mais de 30 dias
- Briefings sem proposta ainda
- Propostas enviadas há mais de 15 dias sem retorno
- Projetos com escopo grande sem plano de entregas

Mostrar alertas no início:
```
? Alertas:
  - [Cliente X] — última entrega há 45 dias
  - [Lead Y] — briefing capturado, proposta não enviada
```

---

### Passo 4 — Sugestões

Baseado no painel, sugerir:
- "Cliente X está parado. Quer que eu envie um email de follow-up?"
- "Lead Y já foi briefado. Quer gerar a proposta com `/proposta`?"
- "Cliente Z já entregou tudo. Quer preparar um relatório de resultados e sugerir renovação?"
