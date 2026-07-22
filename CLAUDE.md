# KrommaIA — KrommaOS

> Molde do CLAUDE.md aplicado a **agência** — equipe pequena entregando
> pra múltiplos clientes ao mesmo tempo. O sistema gira em torno de
> proposta, atendimento e produção em paralelo.

## O que é esse workspace

Operação da agência KrommaIA. Aqui ficam todos os clientes, propostas, conteúdo e entregas.

**Estrutura de pastas:**
- `_memoria/` — quem é a agência, como falamos, foco atual
- `_contexto/` — oferta, ICP, posicionamento comercial
- `_regras/` — regras de negócio (CLAs)
- `identidade/` — marca da agência (aplicada nas peças internas)
- `clientes/` — uma subpasta por cliente, autossuficiente, com contexto isolado
- `briefings/` — briefings e roteiros de reunião antes de virar cliente
- `propostas/` — propostas em andamento
- `marketing/` — conteúdo institucional da agência
- `saidas/` — documentos pontuais, análises
- `dados/` — arquivos a analisar (relatórios de cliente, exports)

## Sobre a agência

**Método Kromma** — metodologia de diagnóstico e implementação de presença digital para empresas locais.
Atendemos empresas locais de porte médio: clínicas, imobiliárias, concessionárias, academias, escritórios de advocacia/contabilidade, lojas físicas. Nossos serviços principais:

- Diagnóstico de presença digital (GMB, site, reviews, redes, concorrência)
- Implantação/otimização de Google Meu Negócio
- Conteúdo recorrente (carrossel + blog + legendas amarradas)
- Gestão de anúncios (Google/Meta — upsell)
- Criação de sites

**Formato:** Setup (R$ 3k–6k) + Mensalidade (R$ 500–1k)
**Diferencial:** Visita presencial + diagnóstico real + motor interno de IA que acelera a entrega

Time: Founder solo (Luis Nunes).

## Clientes ativos

- **Amo a Praia Moveis** — imobiliária em Xangri-La/RS. Site em desenvolvimento, próximo da publicação.

## O que mais produzimos aqui

- Propostas comerciais pra novos clientes
- Sites e sistemas
- Fluxos de prospecção e vendas

## Tom de voz

*Pendente — aguardando exemplo de escrita do founder.*

Evitar: listas com traços no estilo ChatGPT genérico.

## Regras do sistema

- Cliente novo → rodar `/novo-cliente` (skill de onboarding: pesquisa → diagnóstico → briefing de reunião → extração de dores → escopo)
- Se o cliente já foi onboarding, a pasta `clientes/<Nome>/` tem `contexto.md` com todo o histórico
- Proposta nova → `propostas/<cliente>-<data>.md` (ou .html) antes de fechar
- Casos de sucesso ficam em `clientes/<Nome>/caso.md` (reuso em pitches)
- Sempre consultar `_contexto/oferta.md` para decisões comerciais (preços, upsell, downsell)

## Ferramentas conectadas

- [ ] Notion
- [ ] Gmail
- [ ] Google Calendar
- [ ] Canva
- [ ] Meta Ads
- [ ] Google Ads

*(Marcar conforme for instalando os MCPs)*
