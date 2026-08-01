# Supabase — passo a passo (rápido)

Objetivo: **login de verdade** (cada vendedor/gestor/admin com conta protegida) e
**dados no banco**.

> Nunca coloque a senha da conta nem a senha do banco no código ou no chat.
> O frontend usa apenas o **Project URL** e a **anon public key**.

## 1. Criar tabelas + carregar dados
No Supabase → **SQL Editor → New query** → cole todo o [`schema.sql`](./schema.sql) → **Run**.
Cria as tabelas, as regras de acesso (RLS) e já insere maio/junho/julho + mercado.

## 2. Criar TODOS os usuários de uma vez
No **SQL Editor**, cole todo o [`seed_usuarios.sql`](./seed_usuarios.sql) → **Run**.
Cria as 9 contas já com papel definido (troque a senha do admin depois):

| Acesso | E-mail | Senha | Papel |
|---|---|---|---|
| Você | admin@zaleski.com | `admin1` | admin |
| Gestores | gestor@zaleski.com | `gestor1` | gestor |
| Maykel | maykel@zaleski.com | `maykel1` | vendedor |
| Heitor | heitor@zaleski.com | `heitor1` | vendedor |
| Lissandro | lissandro@zaleski.com | `lissandro1` | vendedor |
| Olavo | olavo@zaleski.com | `olavo1` | vendedor |
| Adriano | adriano@zaleski.com | `adriano1` | vendedor |
| Everaldo | everaldo@zaleski.com | `everaldo1` | vendedor |
| Vandal | vandal@zaleski.com | `vandal1` | vendedor |

## 3. Ligar o site ao Supabase (variáveis no Vercel)
No Vercel → projeto → **Settings → Environment Variables** → adicione (Production + Preview):
- `VITE_SUPABASE_URL` = `https://nsgiwzsutgkmiwggjsdu.supabase.co`
- `VITE_SUPABASE_ANON_KEY` = a chave anon public
Depois faça **Redeploy**.

Assim que essas variáveis existirem, o site passa a exigir **e-mail + senha** (login
real). Sem elas, continua no login simples atual — nada quebra.

## Trocar senha depois
No painel: **Authentication → Users** → usuário → **Reset password** (ou o próprio
usuário troca). Recomendado trocar ao menos a senha do **admin**.
