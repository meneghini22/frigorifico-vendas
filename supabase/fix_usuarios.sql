-- =============================================================
-- CORRECAO: login retornando 500 "Database error querying schema".
-- Causa: usuarios criados via SQL ficaram com campos de token = NULL, e o
-- Supabase Auth (GoTrue) exige string vazia (''). Este UPDATE conserta as
-- contas ja existentes (nao precisa recriar). Rode uma vez no SQL Editor.
-- =============================================================
update auth.users set
  confirmation_token         = coalesce(confirmation_token, ''),
  recovery_token             = coalesce(recovery_token, ''),
  email_change               = coalesce(email_change, ''),
  email_change_token_new     = coalesce(email_change_token_new, ''),
  email_change_token_current = coalesce(email_change_token_current, ''),
  phone_change               = coalesce(phone_change, ''),
  phone_change_token         = coalesce(phone_change_token, ''),
  reauthentication_token     = coalesce(reauthentication_token, '')
where email like '%@zaleski.com';

-- Conferir os usuarios:
-- select p.nome, p.role, p.vendedor_slug, u.email
-- from public.profiles p join auth.users u on u.id = p.id order by p.role, p.nome;
