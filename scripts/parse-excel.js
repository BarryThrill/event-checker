import XLSX from 'xlsx';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const EXCEL_PATH = join(ROOT, 'Eventkalender_2026.xlsx');
const OUTPUT_PATH = join(ROOT, 'src', 'data', 'events.json');

// Full Swedish month names — auto-expands abbreviations
const MONTH_FULL_NAMES = {
  'jan': 'Januari', 'januari': 'Januari',
  'feb': 'Februari', 'februari': 'Februari',
  'mar': 'Mars', 'mars': 'Mars',
  'apr': 'April', 'april': 'April',
  'maj': 'Maj', 'may': 'Maj',
  'jun': 'Juni', 'juni': 'Juni',
  'jul': 'Juli', 'juli': 'Juli',
  'aug': 'Augusti', 'augusti': 'Augusti',
  'sep': 'September', 'september': 'September',
  'okt': 'Oktober', 'oktober': 'Oktober', 'oct': 'Oktober',
  'nov': 'November', 'november': 'November',
  'dec': 'December', 'december': 'December',
};

function normalizeMonth(raw) {
  if (!raw) return null;
  const key = raw.trim().toLowerCase();
  return MONTH_FULL_NAMES[key] || raw.trim();
}

function parseYYMMDD(value) {
  if (value == null) return null;
  const str = String(value).padStart(6, '0');
  if (!/^\d{6}$/.test(str)) return null;
  const yy = str.slice(0, 2);
  const mm = str.slice(2, 4);
  const dd = str.slice(4, 6);
  const date = `20${yy}-${mm}-${dd}`;
  const parsed = new Date(date + 'T00:00:00');
  if (isNaN(parsed.getTime())) return null;
  return date;
}

function parseExcel() {
  const buffer = readFileSync(EXCEL_PATH);
  const workbook = XLSX.read(buffer);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, { defval: null });

  const events = rows.map((row, index) => ({
    id: index + 1,
    startDate: parseYYMMDD(row['Datum Start']),
    endDate: parseYYMMDD(row['Datum Slut']),
    month: normalizeMonth(row['Månad']),
    name: row['Event'] || 'Unnamed Event',
    link: row['Länk/hemsida'] || null,
    description: row['Beskrivning'] || null,
    location: row['Plats'] || null,
    participants: row['Deltagare'] || null,
  }));

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(events, null, 2));
  console.log(`Parsed ${events.length} events → ${OUTPUT_PATH}`);
}

parseExcel();
