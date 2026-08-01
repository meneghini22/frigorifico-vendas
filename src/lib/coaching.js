// Motor de metas/coaching por vendedor — derivado dos próprios dados de venda.
import { DADOS, MESES } from '@/data/relatoriosVendas';

const fmt = (v) => new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v);
const fmt0 = (v) => new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(v);

// mês de referência = mês mais recente com dados do vendedor
export function mesReferencia(vend) {
  if (DADOS.julho[vend]) return 'julho';
  if (DADOS.junho[vend]) return 'junho';
  return 'maio';
}

export function gerarMetas(vend) {
  const mesRef = mesReferencia(vend);
  const d = DADOS[mesRef];
  const ord = Object.keys(d).sort((a, b) => d[b].total - d[a].total);
  const pos = ord.indexOf(vend) + 1;
  const eu = d[vend];
  const metas = [];

  // 1) Meta de faturamento — alcançar o vendedor logo acima (ou manter liderança)
  if (pos > 1) {
    const acimaNome = ord[pos - 2];
    const acima = d[acimaNome];
    const gap = acima.total - eu.total;
    const gapPct = (gap / eu.total) * 100;
    metas.push({
      tipo: 'faturamento',
      titulo: `Ultrapassar ${acimaNome}`,
      texto: `Faltam R$ ${fmt(gap)} (+${gapPct.toFixed(0)}%) para assumir a ${pos - 1}ª posição em ${DADOS.meta[mesRef].nome}.`,
      atual: eu.total,
      alvo: acima.total,
    });
    if (acima.clientes > eu.clientes) {
      metas.push({
        tipo: 'clientes',
        titulo: 'Ampliar a carteira',
        texto: `${acimaNome} atende ${acima.clientes} clientes; você atende ${eu.clientes}. Capte +${acima.clientes - eu.clientes} clientes para acompanhar.`,
        atual: eu.clientes,
        alvo: acima.clientes,
      });
    }
  } else {
    const rec = Math.max(...MESES.map((m) => DADOS[m][vend]?.total || 0));
    const alvo = Math.round(Math.max(rec, eu.total) * 1.1);
    metas.push({
      tipo: 'faturamento',
      titulo: 'Manter a liderança',
      texto: `Você lidera em ${DADOS.meta[mesRef].nome}. Meta: crescer +10% e superar o recorde do período (≈ R$ ${fmt0(alvo)}).`,
      atual: eu.total,
      alvo,
    });
  }

  // 2) Tendência junho -> julho
  const jun = DADOS.junho[vend];
  const jul = DADOS.julho[vend];
  if (jun && jul) {
    const p = ((jul.total - jun.total) / jun.total) * 100;
    metas.push({
      tipo: 'tendencia',
      titulo: 'Tendência recente',
      texto: p >= 0
        ? `Alta de +${p.toFixed(0)}% de junho para julho — mantenha o ritmo.`
        : `Queda de ${Math.abs(p).toFixed(0)}% de junho para julho — priorize a recuperação neste mês.`,
      positivo: p >= 0,
    });
  }

  // 3) Onde focar
  const top = eu.top && eu.top.length ? eu.top[0] : null;
  const share = top ? (top.valor / eu.total) * 100 : 0;
  let foco;
  if (share >= 45 && top) {
    foco = `Reduza a concentração: ${top.nome} representa ${share.toFixed(0)}% do seu faturamento. Desenvolva outros clientes para diminuir o risco.`;
  } else if (eu.clientes <= 5) {
    foco = `Carteira enxuta (${eu.clientes} clientes): priorize prospecção de novos clientes para crescer com segurança.`;
  } else {
    foco = `Eleve o ticket médio (hoje R$ ${fmt0(eu.ticket)}) com mix de maior valor agregado e venda casada.`;
  }
  metas.push({ tipo: 'foco', titulo: 'Onde focar', texto: foco });

  return { mesRef, pos, total: ord.length, faturamento: eu.total, clientes: eu.clientes, ticket: eu.ticket, metas };
}
