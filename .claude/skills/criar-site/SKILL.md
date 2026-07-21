---
name: criar-site
description: >
  Cria um site completo para um cliente a partir do briefing. Gera estrutura de páginas,
  componentes, tema visual, deploy automático. Funciona dentro de clientes/<nome>/.
  Use quando o usuário disser "criar site", "fazer site", "desenvolver site", "/criar-site",
  ou depois de um briefing que mencionou site como entrega.
---

# /criar-site — Criação de site para cliente

## Dependências

- Briefing em `briefings/` OU resposta clara do usuário sobre o projeto
- Pasta do cliente em `clientes/<nome>/` (criada com `/novo-projeto` se não existir)

---

## Workflow

### Passo 1 — Escolher stack

Perguntar: "Qual tecnologia prefere pro site?"

Opções rápidas:
1. **HTML/CSS puro** — site estático simples, sem dependências
2. **Astro** — site moderno, rápido, blog-ready
3. **Next.js** — site com React, SEO avançado
4. **Landing page simples** — uma página, HTML puro com identidade

Se o usuário não souber, sugerir Astro ou HTML puro (mais simples de manter).

---

### Passo 2 — Estruturar o site

Baseado no briefing (ou no que o usuário descrever), definir:

**Páginas:**
- [ ] Home
- [ ] Sobre
- [ ] Serviços / Produtos
- [ ] Blog (se aplicável)
- [ ] Contato
- [ ] Portfolio / Cases (se agência)

**Seções da Home:**
- Hero (título + CTA)
- Diferenciais / Como funciona
- Serviços / Produtos
- Depoimentos (se houver)
- CTA final / Contato

**Tema visual:**
- Se `identidade/design-guide.md` do cliente estiver preenchido → usar cores/fontes de lá
- Se não → perguntar se quer rodar `/criar-marca` primeiro ou definir cores básicas agora

---

### Passo 3 — Criar arquivos

Criar dentro de `clientes/<nome>/site/`:

```
clientes/<nome>/
  site/
    index.html
    sobre.html
    servicos.html
    contato.html
    blog/
    css/
      style.css
    img/
    js/
      main.js
    .gitignore
```

Para sites em Astro/Next.js, usar o setup apropriado com `npm create`.

**Regras de qualidade:**
- Responsivo (mobile-first)
- Acessível (semântica HTML, alt text)
- Performance (imagens otimizadas, CSS inline crítico)
- Identidade visual do cliente aplicada consistentemente
- Meta tags OG para compartilhamento

---

### Passo 4 — Preview e ajustes

Perguntar: "Quer ver o site antes de publicar? Posso abrir um preview local ou subir em ambiente temporário."

Se tiver Cloudflare Pages, Netlify ou Vercel disponível:
- Subir como preview/staging
- Mostrar URL pro usuário aprovar

---

### Passo 5 — Deploy

Quando aprovado:

1. Perguntar domínio: "Vai usar domínio próprio ou subdomínio temporário?"
2. Configurar deploy:
   - **Opção A:** GitHub Pages — grátis, `gh-pages branch`
   - **Opção B:** Netlify/Vercel — conecta com o repo, deploy automático no push
   - **Opção C:** Cloudflare Pages — rápido, integração com Workers
3. Rodar `git init` + commit + push + configurar deploy
4. Mostrar URL final

---

### Passo 6 — Agendar próxima entrega

Perguntar: "O site está no ar. Quer marcar uma revisão em [N] dias pra ver se precisa de ajustes? Ou quer partir pra outra entrega do briefing?"

Salvar o resumo em `clientes/<nome>/entregas/YYYY-MM-DD-site.md`:

```markdown
# Entrega: Site
*[data]*

## Escopo
[páginas criadas, tecnologias usadas]

## URL
[link do site publicado]

## Próximos passos
[pendências ou melhorias futuras]
```

---

## Regras

- Nunca publicar sem aprovação do usuário (e idealmente do cliente final)
- Se o cliente final for ter acesso ao repositório, configurar permissões adequadas
- Sempre incluir página de contato com formulário (pode ser simples mailto)
- Sites devem funcionar sem JavaScript para navegação básica (progressive enhancement)
