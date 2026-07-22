# KrommaOS — Sistema operacional do negócio

⚠️ REGRA CRÍTICA: Sempre responda. Nunca fique em silêncio. Se pensar, escreva. Se não souber, pergunte. Pensamento sem resposta não ajuda ninguém.

Sua empresa roda em cima desse arquivo. Skills estão em `.claude/skills/` e comandos em `.opencode/commands/` (Ctrl+K).

---

## Setup inicial

Se for o primeiro uso, execute o comando `instalar` (Ctrl+K) ou peça: "Roda o /instalar". O sistema vai te entrevistar e configurar automaticamente:

1. Perfil do negócio (solopreneur, freelancer, agência ou empresa)
2. Contexto da empresa em `_memoria/empresa.md`
3. Tom de voz em `_memoria/preferencias.md`
4. Foco atual em `_memoria/estrategia.md`
5. Identidade visual em `identidade/design-guide.md`
6. Template de `CLAUDE.md` conforme o perfil

O `/instalar` roda uma vez só. Depois disso, é só usar.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos
4. `_contexto/oferta.md` — modelo de negócio, formato comercial, ICP, upsell/downsell

Usar essas informações como base pra qualquer resposta ou decisão. Para qualquer tarefa visual (carrossel, post, landing page), consultar `identidade/design-guide.md` como referência de estilo. Não é necessário listar o que foi lido nem confirmar a leitura.

---

## CLAs — Regras de negócio

Antes de responder qualquer pergunta, ler os arquivos em `_regras/*.yaml`. As regras com severidade "obrigatória" devem ser seguidas rigorosamente. Conflitos entre regras e pedidos do usuário devem ser alertados antes de prosseguir.

---

## Skills

Antes de executar qualquer tarefa, verificar se existe skill relevante em `.claude/skills/` usando a ferramenta `skill`. Skills disponíveis (25 no total):

### Núcleo
- `instalar` — Instalação inicial do KrommaOS
- `abrir` — Abertura de sessão (carrega contexto)
- `atualizar` — Varredura e atualização de contexto
- `salvar` — Salvar no GitHub
- `novo-projeto` — Pasta de projeto novo com contexto dedicado
- `novo-cliente` — Onboarding completo de cliente (pesquisa, diagnóstico, reunião, escopo)
- `mapear-rotinas` — Mapeamento de tarefas repetitivas em skills
- `go` — Executa múltiplas tarefas em sequência ou paralelo
- `regras` — Gerencia regras de negócio (CLAs)

### Agência / Serviço para clientes
- `briefing` — Captura briefing de cliente (entrevista estruturada)
- `proposta` — Gera proposta comercial com 3 opções de investimento
- `criar-site` — Cria e publica site completo para cliente
- `cliente-status` — Painel de todos os clientes ativos
- `prospeccao` — Prepara mensagens de prospecção personalizadas

### Conteúdo e Marketing
- `carrossel` — Carrosséis e posts visuais
- `publicar-tema` — Pipeline de conteúdo SEO + redes sociais
- `aprovar-post` — Pipeline de aprovação e publicação
- `responder-avaliacoes` — Respostas para avaliações do Google
- `criar-marca` — Cria identidade visual (cores, fontes, logo)

### SEO e Anúncios
- `seo` — SEO completo + GEO + Google Ads
- `anuncio-google` — Estrutura de campanha Google Ads
- `relatorio-ads` — Relatório semanal de Google Ads + Meta Ads

### Produção e Análise
- `analisar-dados` — Análise de arquivos CSV/Excel/PDF
- `email-profissional` — Rascunho de email
- `dashboard` — Relatório semanal do que foi produzido

Ao concluir uma tarefa que não tinha skill mas parece repetível, perguntar: "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

---

## Agentes especialistas (@mention)

Use `@analista`, `@redator`, `@seo-especialista` ou `@designer` para invocar agentes especialistas. Eles têm permissões e modelos específicos para cada função.

---

## Comandos

Quando o usuário disser "/instalar", "/abrir", "/carrossel" ou qualquer "/comando", carregue a skill correspondente em `.claude/skills/` usando a ferramenta `skill` e execute o workflow descrito nela. Comandos também estão disponíveis via Ctrl+K.

---

## Aprender com correções

Quando o usuário corrigir algo ou der uma instrução permanente (ex: "na verdade é assim", "prefiro assim", "evita..."), perguntar: "Quer que eu salve isso pra não precisar repetir?"

- Sobre o negócio → `_memoria/empresa.md`
- Sobre o modelo de venda e oferta → `_contexto/oferta.md`
- Sobre preferências → `_memoria/preferencias.md`
- Sobre prioridades → `_memoria/estrategia.md`
- Regras de comportamento → `AGENTS.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro. Confirmar mostrando a linha adicionada. Não perguntar se a correção for óbvia de contexto imediato.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill nova, mudança de foco, processo novo, estrutura alterada), perguntar: "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo inteiro. Não perguntar para tarefas pontuais sem impacto no contexto.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/` ou `templates/skills/catalogo.md`
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.config/opencode/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` para calibrar a skill
4. Frontmatter obrigatório: `name`, `description`. Opcional: `license`, `compatibility`, `metadata`

---

## Estrutura de pastas

```
KrommaOS/
  .claude/skills/        Skills (25 skills)
  .opencode/commands/    Comandos customizados (Ctrl+K)
  .opencode/agents/      Agentes especialistas (@analista, @redator, etc)
  _memoria/              Cérebro do negócio
  _contexto/             Oferta, ICP, posicionamento comercial
  _regras/               CLAs — regras de negócio (YAML)
  identidade/            Identidade visual
  clientes/              Contexto de cada cliente (isolado)
  propostas/             Propostas comerciais
  briefings/             Briefings e roteiros de reunião
  marketing/             Saídas de marketing
  scripts/               Scripts utilitários
  templates/             Templates e catálogos
  dados/                 Drop zone para arquivos
    saidas/              Outputs gerais
```

---

> Contexto do perfil de agência em `CLAUDE.md` — ler como referência adicional.
```
