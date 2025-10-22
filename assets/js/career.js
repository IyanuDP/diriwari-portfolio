import { experience, education } from './cv-data.js';
import { $ } from './utils.js';

function fmtDate(d) {
  if (!d) return '';
  const s = String(d);
  if (s.toLowerCase && s.toLowerCase() === 'present') return 'Present';
  const [y, m] = s.split('-');
  const monthNames = [ , 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec' ];
  if (m && +m >= 1 && +m <= 12) return `${monthNames[+m]} ${y}`;
  return y;
}

function dateRange(a, b){
  const A = fmtDate(a);
  const B = b ? fmtDate(b) : '';
  const isPresent = String(b||'').toLowerCase() === 'present';
  return isPresent ? `${A} – Present` : (B ? `${A} – ${B}` : A);
}

function parseDate(d){
  if (!d) return null;
  const s = String(d).toLowerCase();
  if (s === 'present') return 99999999;
  const [y,m] = s.split('-');
  return parseInt(`${y}${(m||'01').padStart(2,'0')}`)||0;
}

function overlaps(a, b){
  const aStart = parseDate(a.start);
  const aEnd = parseDate(a.end);
  const bStart = parseDate(b.start);
  const bEnd = parseDate(b.end);
  if (!aStart || !bStart) return false;
  // Check if date ranges overlap
  return aStart <= bEnd && bStart <= aEnd;
}

function groupByOverlap(items){
  const sorted = [...items].sort((a,b)=> parseDate(b.start) - parseDate(a.start));
  const rows = [];
  const used = new Set();
  
  sorted.forEach(item => {
    if (used.has(item)) return;
    
    const row = { experience: null, education: null };
    
    if (item.type === 'experience') {
      row.experience = item;
      // Find overlapping education
      const match = sorted.find(x => x.type === 'education' && !used.has(x) && overlaps(item, x));
      if (match) {
        row.education = match;
        used.add(match);
      }
    } else {
      row.education = item;
      // Find overlapping experience
      const match = sorted.find(x => x.type === 'experience' && !used.has(x) && overlaps(item, x));
      if (match) {
        row.experience = match;
        used.add(match);
      }
    }
    
    used.add(item);
    rows.push(row);
  });
  
  return rows;
}

function toTimelineEntries(){
  const exp = (experience||[]).map(e=>({
    type: 'experience',
    title: e.title,
    org: e.organization,
    loc: e.location,
    start: e.start,
    end: e.end,
    highlights: e.highlights||[]
  }));
  const edu = (education||[]).map(ed=>({
    type: 'education',
    title: ed.degree,
    org: ed.institution,
    loc: ed.location,
    start: ed.start,
    end: ed.end,
    highlights: [ ed.thesis ? `Thesis: ${ed.thesis}` : null, ...(ed.highlights||[]) ].filter(Boolean)
  }));
  
  return groupByOverlap([...exp, ...edu]);
}

function renderTimeline(){
  const root = $('#timeline-list');
  if (!root) return;
  const rows = toTimelineEntries();
  if (rows.length === 0){
    root.innerHTML = '<div class="card"><em>Career entries will appear here once provided.</em></div>';
    return;
  }
  
  root.innerHTML = rows.map(row => {
    const exp = row.experience;
    const edu = row.education;
    
    const renderItem = (it) => {
      if (!it) return '<div class="timeline-spacer"></div>';
      const dates = (it.start||it.end) ? `<div class="timeline-date">${dateRange(it.start,it.end)}</div>` : '';
      const title = it.title ? `<h3>${it.title}</h3>` : '';
      const org = it.org ? `<h4>${it.org}</h4>` : '';
      const loc = it.loc ? `<div class="loc">${it.loc}</div>` : '';
      const bullets = it.highlights && it.highlights.length ? `<ul class="bullets">${it.highlights.map(h=>`<li>${h}</li>`).join('')}</ul>` : '';
      return `
        <div class="timeline-content">
          ${dates}
          ${title}
          ${org}
          ${loc}
          ${bullets}
        </div>
      `;
    };
    
    return `
      <div class="timeline-row">
        <div class="timeline-item experience">
          ${renderItem(exp)}
        </div>
        <div class="timeline-dot"></div>
        <div class="timeline-item education">
          ${renderItem(edu)}
        </div>
      </div>
    `;
  }).join('');
}

renderTimeline();
