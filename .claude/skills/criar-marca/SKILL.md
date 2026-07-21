---
name: criar-marca
description: >
  Cria uma identidade visual completa para o negócio: gera paleta de cores, tipografia,
  logo conceitual (via IA de imagem), e preenche identidade/design-guide.md automaticamente.
  Use quando o usuário disser "criar marca", "criar identidade visual", "/criar-marca",
  ou quando identidade/design-guide.md estiver vazio depois do /instalar.
---

# /criar-marca — Onboarding visual

## Dependências

- `_memoria/empresa.md` — para entender o negócio e o tom
- `_memoria/preferencias.md` — para calibrar o estilo visual ao tom de voz

---

## Workflow

### Passo 1 — Entender o negócio

Ler `_memoria/empresa.md` e `_memoria/preferencias.md`. Se algo estiver vago, perguntar:

1. "Qual a vibe da marca? (ex: sóbria e profissional / criativa e colorida / minimalista / luxo / divertida)"
2. "Tem alguma cor que representa o negócio? (pode ser uma cor que já usa, uma que gosta, ou 'nenhuma, quero sugestão')"
3. "Tem algum concorrente ou referência visual que admira? (manda link ou nome)"
4. "Onde essa identidade vai aparecer? (Instagram, site, propostas, tudo?)"

Se o usuário já tem logo ou cores definidas, pular para o Passo 4 (preencher direto).

---

### Passo 2 — Gerar paleta de cores

Com base nas respostas, definir 4 cores:

| Função | Descrição |
|--------|-----------|
| **Fundo principal** | Cor base, neutra |
| **Destaque / CTA** | Cor de ação, contrastante |
| **Texto principal** | Legível sobre o fundo |
| **Fundo alternativo** | Para cards, seções secundárias |

Sugerir 2 opções de paleta e deixar o usuário escolher.

---

### Passo 3 — Gerar logo (opcional)

Se o usuário quiser logo e não tiver:

1. Perguntar o tipo: "Logotipo (só texto), símbolo (ícone + texto), ou ambos?"
2. Usar o tema do negócio pra descrever um prompt de imagem IA
3. Perguntar: "Quer que eu gere com IA? Preciso de acesso a DALL-E (OpenAI) ou Gemini (Google). Se tiver, confirmo e gero. Se não, descrevo o conceito pra você mandar criar depois."

Se tiver API configurada:
- Prompt exemplo: `"Professional logo for [negócio], [estilo], [cores], clean vector style, transparent background"`
- Salvar em `identidade/logo.png` e `identidade/logo-branco.png`

---

### Passo 4 — Preencher `identidade/design-guide.md`

Escrever o arquivo completo com:

```markdown
# Identidade visual

> Gerado pelo /criar-marca em [data]

---

## Cores

- **Fundo principal:** #[cor]
- **Cor de destaque / CTA:** #[cor]
- **Texto principal:** #[cor]
- **Fundo alternativo / cards:** #[cor]
- **Cor proibida:** [se houver]

---

## Tipografia

- **Títulos e destaques:** [fonte] ([peso])
- **Corpo, subtítulos e botões:** [fonte] ([peso])
- **Peso do título:** [peso]

---

## Estilo geral

[2-3 frases descritivas]

---

## Elementos-chave

- Bordas: [estilo]
- Border-radius dos cards: [Npx]
- Botões: [estilo]
- Sombras: [sim/não + descrição]

---

## O que NUNCA fazer

- [regra 1]
- [regra 2]

---

## Logo

- **Arquivo:** identidade/logo.png
- **Versão pra fundo escuro:** identidade/logo-branco.png (se gerado)
- **Onde usar:** slide final do carrossel (CTA), header de propostas
- **Tamanho sugerido:** largura 120-200px nos HTMLs
```

---

### Passo 5 — Resumo

Mostrar:
```
? Identidade visual configurada!

Paleta: [cor1] [cor2] [cor3] [cor4]
Tipografia: [fonte]
Logo: [gerado | pendente | já existia]

Todas as skills de conteúdo (carrossel, post, proposta) vão usar essa identidade automaticamente.
```

---

## Regras

- Cores devem ter contraste suficiente (texto sobre fundo)
- Evitar paletas que imitam concorrentes diretos
- Se o usuário não souber o que quer, propor 2 estilos contrastantes e deixar escolher
- Fontes sugeridas: Inter, DM Sans, Syne, Instrument Serif, Bricolage Grotesque, Space Grotesk (Google Fonts — sem licença extra)
- Não insistir se o usuário disser "depois eu defino" — deixar placeholders e avisar que editar depois é rápido
