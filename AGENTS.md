# KrommaOS — Sistema operacional do negócio

Sua empresa roda em cima desse arquivo. Aqui ficam as regras de operação do KrommaOS para OpenCode.

Skills estão em `.claude/skills/` e comandos customizados em `.opencode/commands/` (Ctrl+K).

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

Usar essas informações como base pra qualquer resposta ou decisão. Para qualquer tarefa visual (carrossel, post, landing page), consultar `identidade/design-guide.md` como referência de estilo. Não é necessário listar o que foi lido nem confirmar a leitura.

---

## Skills

Antes de executar qualquer tarefa, verificar se existe skill relevante em `.claude/skills/` usando a ferramenta `skill`. Skills disponíveis:

- `abrir` — Abertura de sessão
- `analisar-dados` — Análise de arquivos CSV/Excel/PDF
- `anuncio-google` — Estrutura de campanha Google Ads
- `aprovar-post` — Pipeline de aprovação e publicação
- `atualizar` — Varredura e atualização de contexto
- `carrossel` — Carrosséis e posts visuais
- `email-profissional` — Rascunho de email
- `instalar` — Instalação inicial do KrommaOS
- `mapear-rotinas` — Mapeamento de tarefas repetitivas em skills
- `novo-projeto` — Pasta de projeto novo com contexto dedicado
- `publicar-tema` — Pipeline de conteúdo SEO + redes sociais
- `relatorio-ads` — Relatório semanal de Google Ads + Meta Ads
- `responder-avaliacoes` — Respostas para avaliações do Google
- `salvar` — Salvar no GitHub
- `seo` — SEO completo + GEO + Google Ads

Ao concluir uma tarefa que não tinha skill mas parece repetível, perguntar: "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

---

## Comandos

Quando o usuário disser "/instalar", "/abrir", "/carrossel" ou qualquer "/comando", carregue a skill correspondente em `.claude/skills/` usando a ferramenta `skill` e execute o workflow descrito nela.

Comandos também estão disponíveis via Ctrl+K (atalho do OpenCode para comandos customizados em `.opencode/commands/`).

---

## Aprender com correções

Quando o usuário corrigir algo ou der uma instrução permanente, perguntar: "Quer que eu salve isso pra não precisar repetir?"

- Sobre o negócio → `_memoria/empresa.md`
- Sobre preferências → `_memoria/preferencias.md`
- Sobre prioridades → `_memoria/estrategia.md`
- Regras de comportamento → `AGENTS.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill nova, mudança de foco), perguntar: "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo inteiro.

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
  .claude/skills/        Skills do KrommaOS (lidas nativamente pelo OpenCode)
  .opencode/commands/    Comandos customizados (Ctrl+K)
  _memoria/              Cérebro do negócio
  identidade/            Identidade visual
  marketing/             Saídas de marketing
  scripts/               Scripts utilitários
  templates/             Templates e catálogos
  dados/                 Drop zone para arquivos
  saidas/                Outputs gerais
```
