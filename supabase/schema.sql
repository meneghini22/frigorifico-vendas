-- =============================================================
-- Relatorios Zaleski — schema + carga inicial (Supabase / Postgres)
-- Rode este arquivo inteiro no SQL Editor do Supabase (uma vez).
-- Seguro para reexecutar: usa drop/create e upserts.
-- =============================================================

-- ---------- PERFIS (papeis ligados ao Supabase Auth) ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nome text,
  role text not null check (role in ('admin','gestor','vendedor')),
  vendedor_slug text,
  created_at timestamptz default now()
);
alter table public.profiles enable row level security;
drop policy if exists "perfil proprio" on public.profiles;
create policy "perfil proprio" on public.profiles for select using (auth.uid() = id);

create or replace function public.meu_papel() returns text
  language sql stable security definer set search_path = public as $$
  select role from public.profiles where id = auth.uid();
$$;
create or replace function public.meu_vendedor() returns text
  language sql stable security definer set search_path = public as $$
  select vendedor_slug from public.profiles where id = auth.uid();
$$;

-- ---------- DADOS DE VENDA ----------
create table if not exists public.vendedores (
  slug text primary key,
  nome text not null
);
create table if not exists public.periodos (
  mes text primary key,
  nome text not null,
  periodo text,
  obs text,
  ordem int
);
create table if not exists public.vendas_vendedor (
  mes text references public.periodos(mes),
  vendedor_slug text references public.vendedores(slug),
  faturamento numeric not null default 0,
  clientes int not null default 0,
  ticket numeric not null default 0,
  parcial text,
  clientes_label text,
  primary key (mes, vendedor_slug)
);
create table if not exists public.vendas_clientes (
  id bigint generated always as identity primary key,
  mes text, vendedor_slug text,
  cliente text not null, valor numeric not null, aprox boolean default false
);
create table if not exists public.vendas_semanas (
  id bigint generated always as identity primary key,
  mes text, vendedor_slug text,
  semana text not null, clientes int, faturamento numeric
);
create table if not exists public.mercado (
  id int primary key default 1,
  dados jsonb not null,
  atualizado_em timestamptz default now(),
  constraint mercado_single check (id = 1)
);

-- ---------- RLS (quem le o que) ----------
alter table public.vendedores enable row level security;
alter table public.periodos enable row level security;
alter table public.vendas_vendedor enable row level security;
alter table public.vendas_clientes enable row level security;
alter table public.vendas_semanas enable row level security;
alter table public.mercado enable row level security;

-- catalogos + totais: todo usuario logado le (necessario p/ ranking e metas)
drop policy if exists r on public.vendedores; create policy r on public.vendedores for select using (auth.uid() is not null);
drop policy if exists r on public.periodos; create policy r on public.periodos for select using (auth.uid() is not null);
drop policy if exists r on public.mercado; create policy r on public.mercado for select using (auth.uid() is not null);
drop policy if exists r on public.vendas_vendedor; create policy r on public.vendas_vendedor for select using (auth.uid() is not null);

-- detalhe por cliente/semana: admin e gestor veem tudo; vendedor so o proprio
drop policy if exists r on public.vendas_clientes;
create policy r on public.vendas_clientes for select using (
  public.meu_papel() in ('admin','gestor') or vendedor_slug = public.meu_vendedor()
);
drop policy if exists r on public.vendas_semanas;
create policy r on public.vendas_semanas for select using (
  public.meu_papel() in ('admin','gestor') or vendedor_slug = public.meu_vendedor()
);

-- ---------- CARGA INICIAL ----------
insert into public.periodos (mes,nome,periodo,obs,ordem) values
  ('maio','Maio','01/05/2026 a 31/05/2026','Alguns vendedores com período parcial. Inclui abertura semanal.',1),
  ('junho','Junho','01/06/2026 a 30/06/2026','Sem abertura semanal (relatório-fonte sem data por transação).',2),
  ('julho','Julho','01/07/2026 a 31/07/2026','Sem abertura semanal (relatório-fonte sem data por transação).',3)
on conflict (mes) do update set nome=excluded.nome, periodo=excluded.periodo, obs=excluded.obs, ordem=excluded.ordem;

insert into public.vendedores (slug,nome) values
  ('adriano','Adriano'),
  ('everaldo','Everaldo'),
  ('heitor','Heitor'),
  ('lissandro','Lissandro'),
  ('maykel','Maykel'),
  ('olavo','Olavo'),
  ('vandal','Vandal')
on conflict (slug) do update set nome=excluded.nome;

delete from public.vendas_vendedor;
insert into public.vendas_vendedor (mes,vendedor_slug,faturamento,clientes,ticket,parcial,clientes_label) values
  ('maio','everaldo',8111.52,16,506.97,null,null),
  ('maio','maykel',651176.93,45,14470.6,null,null),
  ('maio','vandal',18961.91,3,6320.64,'25–31/05 (parcial)',null),
  ('maio','lissandro',152256.77,15,10150.45,null,null),
  ('maio','olavo',351098.03,14,25078.43,'11–31/05 (parcial)',null),
  ('maio','adriano',11296.45,2,5648.23,'18–24/05 (parcial)',null),
  ('maio','heitor',387105.76,166,2331.96,null,'atendimentos'),
  ('junho','everaldo',4328.05,11,393.46,null,null),
  ('junho','lissandro',122582.69,20,6129.13,null,null),
  ('junho','adriano',36331.31,3,12110.44,null,null),
  ('junho','maykel',830683.39,64,12979.43,null,null),
  ('junho','heitor',311029.27,51,6098.61,null,null),
  ('junho','olavo',329180.15,9,36575.57,null,null),
  ('junho','vandal',26422.0,4,6605.5,null,null),
  ('julho','everaldo',20158.36,19,1060.97,null,null),
  ('julho','lissandro',168418.24,20,8420.91,null,null),
  ('julho','adriano',29425.79,2,14712.9,null,null),
  ('julho','maykel',655992.73,58,11310.22,null,null),
  ('julho','heitor',540830.08,68,7953.38,null,null),
  ('julho','vandal',29687.37,10,2968.74,null,null);

delete from public.vendas_clientes;
insert into public.vendas_clientes (mes,vendedor_slug,cliente,valor,aprox) values
  ('maio','everaldo','Bernardo Baseggio Sisto',2372.71,false),
  ('maio','everaldo','Faros Indústria de Farinha de Ossos LTDA',1447.68,false),
  ('maio','everaldo','Luciano Bertolazi Gauer',1440.29,false),
  ('maio','everaldo','L.L Martiny LTDA',882.8,false),
  ('maio','maykel','Iris Durcks Matana',162668.82,false),
  ('maio','maykel','Cooperativa Mista São Luiz LTDA',56000,true),
  ('maio','maykel','Robison Andres Eventos',54395.4,false),
  ('maio','maykel','Cooperativa Tritícola Santa Rosa LTDA',37000,true),
  ('maio','maykel','Rodrigo Luiz Donadel LTDA',23264.32,false),
  ('maio','maykel','Cerealista Giruá LTDA',18572.38,false),
  ('maio','vandal','Cristo Rei Alimentos LTDA',13111.59,false),
  ('maio','vandal','Galpão Grill Restaurante LTDA',2954.52,false),
  ('maio','vandal','Comércio de Alimentos Ansolin LTDA',2895.8,false),
  ('maio','olavo','Ruben Boff Damian & CIA LTDA',91146.2,false),
  ('maio','olavo','Viezzer Central de Compras e Distribuição',88291.83,false),
  ('maio','olavo','Viezzer Loja 02',21326.24,false),
  ('maio','olavo','Viezzer Loja 06',18489.88,false),
  ('maio','olavo','Deitos & Deitos LTDA',18358.55,false),
  ('maio','adriano','Cotripal Agropecuária Cooperativa Ijuí',6636.53,false),
  ('maio','adriano','Cotripal Agropecuária Cooperativa Panambi',4659.92,false),
  ('junho','everaldo','Bernardo Baseggio Sisto',1210.84,false),
  ('junho','everaldo','Faros Indústria de Farinha de Ossos LTDA',1178.96,false),
  ('junho','everaldo','Sidnei da Rosa Machado',416.73,false),
  ('junho','everaldo','Franciele Seifert Schoninger do Nascimento',392.79,false),
  ('junho','everaldo','Douglas Rafael Chaves do Santos',340.62,false),
  ('junho','everaldo','Marlene Scherer Schwingel',207.29,false),
  ('junho','everaldo','Leandro Bottega Reibrich',200.38,false),
  ('junho','everaldo','Anderson da Silva Borges',189.27,false),
  ('junho','lissandro','Cooperativa Mista Yucuma Cooperyucuma -filial',26990.72,false),
  ('junho','lissandro','Milton Bruno Bohnert LTDA',20972.88,false),
  ('junho','lissandro','Ari José Neuberger',15112.35,false),
  ('junho','lissandro','Silvestre Vogt',9829.51,false),
  ('junho','lissandro','Comercial Bertei EIRELI',7670.86,false),
  ('junho','lissandro','Júlio César Rossoni',7193.72,false),
  ('junho','lissandro','Sebastiao Avani Missio',6718.4,false),
  ('junho','lissandro','Mercado Rempel LTDA',6175.36,false),
  ('junho','adriano','Cotripal Agropecuaria Cooperativa Ijuí',20112.06,false),
  ('junho','adriano','Cotripal Agropecuaria Cooperativa Panambi',12950.3,false),
  ('junho','adriano','Cotripal Agropecuaria Cooperativa',3268.95,false),
  ('junho','maykel','Iris Durcks Matana',264052.31,false),
  ('junho','maykel','Cooperativa Mista São Luiz LTDA',245627.28,false),
  ('junho','maykel','Cerealista Giruá LTDA - FL02',38481.96,false),
  ('junho','maykel','Cooperativa Tritícola Santa Rosa LTDA Av Rio Grande',35911.86,false),
  ('junho','maykel','Rodrigo Luiz Donadel LTDA',26514.98,false),
  ('junho','maykel','Boles Restaurante LTDA',26385.16,false),
  ('junho','maykel','Cooperativa Mista São Luiz',21679.87,false),
  ('junho','maykel','Mercado Cidade Baixa',20267.14,false),
  ('junho','heitor','Mercado e Padaria Indepedencia LTDA',52558.09,false),
  ('junho','heitor','Luis Augusto Pes Gabert ME',28289.37,false),
  ('junho','heitor','Kuchak Coml de Alimentos LTDA',22837.01,false),
  ('junho','heitor','Organização Coml Irber LTDA',22773.92,false),
  ('junho','heitor','Wagner de Oliveira Weber',21830.45,false),
  ('junho','heitor','Comércio de Carnes Fernando Oliveira Borges LTDA',14471.44,false),
  ('junho','heitor','Mercado Limasil LTDA',13063.29,false),
  ('junho','heitor','Otaviano Parchen',12358.14,false),
  ('junho','olavo','Ruben Boff Damian & CIA LTDA',262197.67,false),
  ('junho','olavo','Viezzer Central de Compras e Distribuição',26935.84,false),
  ('junho','olavo','Viezzer & CIA LTDA Loja 10',9442.8,false),
  ('junho','olavo','Viezzer & CIA LTDA Loja 01',6461.73,false),
  ('junho','olavo','Viezzer & CIA LTDA Loja 06',5835.87,false),
  ('junho','olavo','Viezzer &CIA LTDA Loja 17',5319.81,false),
  ('junho','olavo','Viezzer & CIA LTDA Loja 12',4941.0,false),
  ('junho','olavo','Viezzer & CIA LTDA Loja 11',4671.99,false),
  ('junho','vandal','Brasao Supermercados- Avenida',12800.23,false),
  ('junho','vandal','Galpão Grill Restaurante LTDA',11172.81,false),
  ('junho','vandal','Mercado Suamy Miotto',2030.2,false),
  ('junho','vandal','Mercado Sisal LTDA',418.76,false),
  ('julho','everaldo','Bernardo Baseggio Sisto',8955.43,false),
  ('julho','everaldo','Sociedade Concórdia e Harmonia - KM20',4981.24,false),
  ('julho','everaldo','Ronaldo Cavalheiro',1530.8,false),
  ('julho','everaldo','Faros Indústria de Farinha de Ossos LTDA',1446.88,false),
  ('julho','everaldo','L.l Martiny LTDA',1007.28,false),
  ('julho','everaldo','Franciele Seifert Schoninger do Nascimento',432.43,false),
  ('julho','everaldo','Fayruz Vieira Mustafa Minosso',357.0,false),
  ('julho','everaldo','Uliane Correa Medina de Lima',325.59,false),
  ('julho','lissandro','Cooperativa Mista Yucuma Cooperyucuma -filial',34221.59,false),
  ('julho','lissandro','Milton Bruno Bohnert LTDA',23525.77,false),
  ('julho','lissandro','Arleu Valadar Machado LTDA',21468.16,false),
  ('julho','lissandro','Silvestre Vogt',20332.33,false),
  ('julho','lissandro','Ari José Neuberger',17820.72,false),
  ('julho','lissandro','Comercial Bertei EIRELI',10872.94,false),
  ('julho','lissandro','Mercado Pilatti LTDA',6811.68,false),
  ('julho','lissandro','Cooperativa Mista Yucuma Cooperyucuma',5989.0,false),
  ('julho','adriano','Cotripal Agropecuaria Cooperativa Ijuí',17394.05,false),
  ('julho','adriano','Cotripal Agropecuaria Cooperativa Panambi',12031.74,false),
  ('julho','maykel','Cooperativa Mista São Luiz LTDA',234427.56,false),
  ('julho','maykel','Iris Durcks Matana',54680.1,false),
  ('julho','maykel','Cooperativa Tritícola Santa Rosa LTDA Av Rio Grande',51259.32,false),
  ('julho','maykel','Jurinic & CIA LTDA',28738.72,false),
  ('julho','maykel','Supermercado Strieder Express',25398.38,false),
  ('julho','maykel','Cerealista Giruá LTDA - FL02',24516.91,false),
  ('julho','maykel','Rodrigo Luiz Donadel LTDA',23230.32,false),
  ('julho','maykel','Boles Restaurante LTDA',22172.06,false),
  ('julho','heitor','Mercado e Padaria Indepedencia LTDA',73275.03,false),
  ('julho','heitor','Organização Coml Irber LTDA',73039.11,false),
  ('julho','heitor','Kuchak Coml de Alimentos LTDA',71331.68,false),
  ('julho','heitor','Wagner de Oliveira Weber',39767.79,false),
  ('julho','heitor','Comércio de Carnes Ja LTDA',25322.96,false),
  ('julho','heitor','De Carli e Dallabrida LTDA',15551.82,false),
  ('julho','heitor','Mercado Perini Rigo LTDA ME',14131.66,false),
  ('julho','heitor','Comércio de Carnes Fernando Oliveira Borges LTDA',13235.64,false),
  ('julho','vandal','Galpão Grill Restaurante LTDA',13239.37,false),
  ('julho','vandal','Casa de Carnes Cella LTDA',4976.61,false),
  ('julho','vandal','Flori Corea de Quadros',3463.19,false),
  ('julho','vandal','Supermercado Marcio LTDA',3433.14,false),
  ('julho','vandal','Colorado Carnes Nobres LTDA',1899.77,false),
  ('julho','vandal','Restaurante Transporte Kataucha LTDA',711.71,false),
  ('julho','vandal','The Garden Wine And Bar com de Bebidas Alimen e Eventos LTDA',709.33,false),
  ('julho','vandal','Comércio de Bebidas Lazzaretti',467.08,false);

delete from public.vendas_semanas;
insert into public.vendas_semanas (mes,vendedor_slug,semana,clientes,faturamento) values
  ('maio','everaldo','01–03/05',3,162.83),
  ('maio','everaldo','04–10/05',8,3157.67),
  ('maio','everaldo','11–17/05',10,2318.77),
  ('maio','everaldo','18–24/05',2,889.73),
  ('maio','everaldo','25–31/05',4,1582.52),
  ('maio','maykel','01–03/05',8,12755.79),
  ('maio','maykel','04–10/05',32,175471.25),
  ('maio','maykel','11–17/05',30,147266.39),
  ('maio','maykel','18–24/05',28,155392.53),
  ('maio','maykel','25–31/05',39,160289.97),
  ('maio','vandal','25–31/05',3,18961.91),
  ('maio','lissandro','04–10/05',8,32019.02),
  ('maio','lissandro','11–17/05',9,26948.67),
  ('maio','lissandro','18–24/05',8,33982.13),
  ('maio','lissandro','25–31/05',9,59306.95),
  ('maio','olavo','11–17/05',7,140317.3),
  ('maio','olavo','18–24/05',1,18358.55),
  ('maio','olavo','25–31/05',13,192422.18),
  ('maio','adriano','18–24/05',2,11296.45),
  ('maio','heitor','01–03/05',28,92995.16),
  ('maio','heitor','04–10/05',30,69099.27),
  ('maio','heitor','11–17/05',29,57189.48),
  ('maio','heitor','18–24/05',46,104060.47),
  ('maio','heitor','25–31/05',33,63761.38);

insert into public.mercado (id,dados) values (1, '{"fonte": "CEPEA/Esalq · Scot Consultoria", "atualizado": "30/07/2026", "indicador": {"valor": 347.4, "varMesPct": 3.27, "data": "29/07/2026", "praca": "CEPEA/Esalq · B3 (praça SP)"}, "tendencia": [336.4, 339.5, 342.6, 345.2, 347.4], "rs": [{"label": "Boi gordo", "valor": 10.45}, {"label": "Vaca gorda", "valor": 10.75}, {"label": "Novilha gorda (oeste)", "valor": 12.05}], "pracas": [{"uf": "SP", "valor": 344.0}, {"uf": "RJ", "valor": 336.0}, {"uf": "MS", "valor": 331.0}, {"uf": "MG", "valor": 325.0}, {"uf": "GO", "valor": 322.0}, {"uf": "MT", "valor": 321.0}]}'::jsonb)
on conflict (id) do update set dados=excluded.dados, atualizado_em=now();

-- ---------- ACESSOS (rode DEPOIS de criar os usuarios em Authentication > Users) ----------
-- 1) Crie no painel (Authentication > Users > Add user) um usuario para cada pessoa,
--    com email e senha. Ex.: maykel@zaleski.com , gestor@zaleski.com , admin@zaleski.com
-- 2) Depois rode os inserts abaixo trocando os e-mails pelos que voce criou.
--    (mapeia o e-mail -> id do auth e define o papel)

-- ADMIN (voce):
-- insert into public.profiles (id,nome,role,vendedor_slug)
--   select id,'Administrador','admin',null from auth.users where email='admin@zaleski.com'
--   on conflict (id) do update set role='admin', vendedor_slug=null, nome='Administrador';

-- GESTOR:
-- insert into public.profiles (id,nome,role,vendedor_slug)
--   select id,'Gestor','gestor',null from auth.users where email='gestor@zaleski.com'
--   on conflict (id) do update set role='gestor', vendedor_slug=null, nome='Gestor';

-- VENDEDORES (repita para cada um; troque email/slug/nome):
-- insert into public.profiles (id,nome,role,vendedor_slug)
--   select id,'Adriano','vendedor','adriano' from auth.users where email='adriano@zaleski.com'
--   on conflict (id) do update set role='vendedor', vendedor_slug='adriano', nome='Adriano';
-- insert into public.profiles (id,nome,role,vendedor_slug)
--   select id,'Everaldo','vendedor','everaldo' from auth.users where email='everaldo@zaleski.com'
--   on conflict (id) do update set role='vendedor', vendedor_slug='everaldo', nome='Everaldo';
-- insert into public.profiles (id,nome,role,vendedor_slug)
--   select id,'Heitor','vendedor','heitor' from auth.users where email='heitor@zaleski.com'
--   on conflict (id) do update set role='vendedor', vendedor_slug='heitor', nome='Heitor';
-- insert into public.profiles (id,nome,role,vendedor_slug)
--   select id,'Lissandro','vendedor','lissandro' from auth.users where email='lissandro@zaleski.com'
--   on conflict (id) do update set role='vendedor', vendedor_slug='lissandro', nome='Lissandro';
-- insert into public.profiles (id,nome,role,vendedor_slug)
--   select id,'Maykel','vendedor','maykel' from auth.users where email='maykel@zaleski.com'
--   on conflict (id) do update set role='vendedor', vendedor_slug='maykel', nome='Maykel';
-- insert into public.profiles (id,nome,role,vendedor_slug)
--   select id,'Olavo','vendedor','olavo' from auth.users where email='olavo@zaleski.com'
--   on conflict (id) do update set role='vendedor', vendedor_slug='olavo', nome='Olavo';
-- insert into public.profiles (id,nome,role,vendedor_slug)
--   select id,'Vandal','vendedor','vandal' from auth.users where email='vandal@zaleski.com'
--   on conflict (id) do update set role='vendedor', vendedor_slug='vandal', nome='Vandal';
