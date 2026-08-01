# Supabase — passo a passo

Objetivo: **login de verdade** (cada vendedor/gestor/admin com conta protegida) e
**dados no banco** (vendas e mercado atualizáveis sem novo deploy).

> Nunca coloque a senha da conta nem a senha do banco no código ou no chat.
> O frontend usa apenas o **Project URL** e a **anon public key**.

## 1. Criar as tabelas e carregar os dados
1. No Supabase, abra **SQL Editor → New query**.
2. Cole todo o conteúdo de [`schema.sql`](./schema.sql) e clique em **Run**.
   - Cria as tabelas (`profiles`, `vendedores`, `periodos`, `vendas_*`, `mercado`),
     as políticas de acesso (RLS) e já insere maio/junho/julho + mercado.

## 2. Criar os usuários (login real)
Em **Authentication → Users → Add user**, crie um usuário (e-mail + senha) para
cada pessoa. Sugestão de e-mails: `admin@zaleski.com`, `gestor@zaleski.com`,
`maykel@zaleski.com`, `heitor@zaleski.com`, etc.

Depois, no **SQL Editor**, rode os `insert into public.profiles ...` que estão
**comentados no final do `schema.sql`** (tire o `--` e ajuste os e-mails). Isso
define o papel (admin/gestor/vendedor) e liga cada vendedor ao seu `slug`.

## 3. Pegar as chaves do frontend
Em **Settings → API**, copie:
- **Project URL** → `VITE_SUPABASE_URL`
- **anon public** key → `VITE_SUPABASE_ANON_KEY`

## 4. Configurar as variáveis
- **Local:** copie `.env.example` para `.env` e preencha os dois valores.
- **Vercel:** Project → **Settings → Environment Variables** → adicione
  `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` (Production + Preview) e faça um
  **Redeploy**.

## 5. Ligar o app ao banco
Depois que o banco estiver criado e as chaves configuradas, eu troco o login e as
telas para lerem do Supabase (com fallback para os dados locais enquanto as
variáveis não existirem). É a etapa que faço em seguida.
