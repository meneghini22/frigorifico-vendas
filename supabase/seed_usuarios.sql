-- =============================================================
-- Cria TODOS os usuarios de uma vez (login real via Supabase Auth).
-- Rode DEPOIS do schema.sql, no SQL Editor. Seguro para reexecutar.
--
-- Emails/senhas padrao (troque a senha do admin depois!):
--   admin@zaleski.com / admin1        (dono)
--   gestor@zaleski.com / gestor1      (gestores)
--   <nome>@zaleski.com / <nome>1      (ex.: maykel@zaleski.com / maykel1)
--
-- Observacao: cria contas diretamente no schema de auth do Supabase.
-- Se der erro de coluna (versoes muito diferentes do Supabase), use o metodo
-- do painel (Authentication > Users) — mas na maioria dos projetos isto funciona.
-- =============================================================

do $$
declare
  r record;
  uid uuid;
begin
  for r in
    select * from (values
      ('admin@zaleski.com','admin1','Administrador','admin',null),
      ('gestor@zaleski.com','gestor1','Gestor','gestor',null),
      ('adriano@zaleski.com','adriano1','Adriano','vendedor','adriano'),
      ('everaldo@zaleski.com','everaldo1','Everaldo','vendedor','everaldo'),
      ('heitor@zaleski.com','heitor1','Heitor','vendedor','heitor'),
      ('lissandro@zaleski.com','lissandro1','Lissandro','vendedor','lissandro'),
      ('maykel@zaleski.com','maykel1','Maykel','vendedor','maykel'),
      ('olavo@zaleski.com','olavo1','Olavo','vendedor','olavo'),
      ('vandal@zaleski.com','vandal1','Vandal','vendedor','vandal')
    ) as t(email, senha, nome, role, slug)
  loop
    select id into uid from auth.users where email = r.email;
    if uid is null then
      uid := gen_random_uuid();
      insert into auth.users
        (instance_id, id, aud, role, email, encrypted_password,
         email_confirmed_at, created_at, updated_at,
         raw_app_meta_data, raw_user_meta_data,
         confirmation_token, recovery_token, email_change,
         email_change_token_new, email_change_token_current,
         phone_change, phone_change_token, reauthentication_token)
      values
        ('00000000-0000-0000-0000-000000000000', uid, 'authenticated', 'authenticated',
         r.email, crypt(r.senha, gen_salt('bf')),
         now(), now(), now(),
         '{"provider":"email","providers":["email"]}'::jsonb, '{}'::jsonb,
         '', '', '', '', '', '', '', '');

      insert into auth.identities
        (id, user_id, provider_id, identity_data, provider, created_at, updated_at, last_sign_in_at)
      values
        (gen_random_uuid(), uid, uid::text,
         jsonb_build_object('sub', uid::text, 'email', r.email), 'email',
         now(), now(), now());
    end if;

    insert into public.profiles (id, nome, role, vendedor_slug)
    values (uid, r.nome, r.role, r.slug)
    on conflict (id) do update
      set nome = excluded.nome, role = excluded.role, vendedor_slug = excluded.vendedor_slug;
  end loop;
end $$;

-- Conferir:
-- select p.nome, p.role, p.vendedor_slug, u.email
-- from public.profiles p join auth.users u on u.id = p.id order by p.role, p.nome;
