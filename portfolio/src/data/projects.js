// Single source of truth for portfolio content.
// Edit text, KPIs, and links here — components read from this file.

export const profile = {
  name: 'Omar Quinn',
  positioning: 'Junior Data Analyst / BI Analyst',
  tagline:
    'Data analyst with a finance and business background. I turn messy operational data into clear dashboards, insights, and decisions across customer behavior, revenue, product performance, margins, and growth.',
  location: 'Open to remote / hybrid',
  email: 'quinn73@outlook.es',
  github: 'https://github.com/omarqnn3-blip',
  linkedin: 'https://www.linkedin.com/in/omar-quinn/',
  resumeUrl: '/Omar_Quinn_CV.pdf', // put Omar_Quinn_CV.pdf in the public/ folder
  targetRoles: [
    'Data Analyst',
    'BI Analyst',
    'Reporting Analyst',
    'Product Analyst',
    'Revenue Analyst',
    'Financial Data Analyst',
  ],
}

// Grouped so the skills section reads like a real capability matrix,
// not a flat word cloud.
export const skillGroups = [
  { label: 'Languages & Querying', items: ['SQL', 'Python', 'Pandas'] },
  { label: 'BI & Visualization', items: ['Power BI', 'Excel', 'Dashboard Design'] },
  {
    label: 'Analytics Domains',
    items: [
      'Customer Analytics',
      'Revenue Analytics',
      'Financial Analytics',
      'Business Intelligence',
    ],
  },
  { label: 'Workflow', items: ['GitHub', 'Vercel', 'Streamlit', 'Data Cleaning'] },
]

export const projects = [
  {
    slug: 'customer-churn-revenue-risk',
    index: '01',
    title: 'Customer & Revenue Analytics Dashboard',
    summary:
      'Analyzes customer behavior, revenue patterns, segment performance, and retention risk to identify growth opportunities and protect recurring revenue.',
    accent: 'risk', // role-coded: churn / risk
    focus: ['Customer analytics', 'Revenue analysis', 'Segmentation', 'Retention risk'],
    targetRoles: [
      'Data Analyst',
      'BI Analyst',
      'Revenue Analyst',
      'Customer Insights Analyst',
    ],
    tools: ['SQL', 'Python', 'Power BI'],
    problem:
      'A telecom provider with 7,043 customers was losing roughly a quarter of its base each year without a clear view of who was leaving, why, or how much recurring revenue was exposed. Retention effort was spread evenly instead of aimed at the accounts that mattered most.',
    objective:
      'Clean the customer data, segment the base by value, contract, tenure and payment method, and quantify the revenue at risk — so retention effort can be prioritized by dollar impact, not just by headcount.',
    kpis: [
      { value: '$456K', label: 'Monthly revenue (MRR)', tone: 'positive' },
      { value: '26.5%', label: 'Customer churn rate', tone: 'risk' },
      { value: '30.5%', label: 'Revenue churn rate', tone: 'risk' },
      { value: '599', label: 'High-value accounts at risk', tone: 'caution' },
    ],
    insights: [
      'Revenue churn (30.5%) runs about 4 points hotter than customer churn (26.5%) — the customers leaving are billed above average, so churn costs more in dollars than in headcount.',
      'Contract length is the single strongest churn lever: month-to-month customers churn at 42.7%, versus 11.3% on one-year and just 2.8% on two-year contracts.',
      'Electronic-check payers churn at 45.3%, roughly triple the auto-pay methods (~15–17%), and churn concentrates in the first 12 months of tenure.',
      'The hottest pocket is High-Value, month-to-month customers at 52.6% churn — 599 still-active accounts carrying about $56.9K in monthly revenue at risk.',
    ],
    recommendations: [
      'Defend High-Value month-to-month customers first — they sit in the highest-churn cell and hold the largest revenue-at-risk pool.',
      'Move customers onto annual or two-year contracts; the drop from 42.7% to 2.8% churn shows contract length is the most retainable lever.',
      'Nudge electronic-check customers toward automatic payment, which churns roughly 30 points lower.',
      'Strengthen onboarding in the first 12 months, where churn is concentrated, to close the early-life value gap.',
    ],
    images: [
      { src: '/projects/customer-revenue/01-overview.png', caption: 'Revenue & churn overview — MRR, ARPU, churn rate, and churn by contract type.' },
      { src: '/projects/customer-revenue/02-segments.png', caption: 'Customer base — value segments, tenure groups, internet service, and demographics.' },
      { src: '/projects/customer-revenue/03-revenue.png', caption: 'Revenue breakdown — MRR by value segment, ARPU by contract, and revenue by tenure.' },
      { src: '/projects/customer-revenue/04-at-risk.png', caption: 'Retention priority — high-value at-risk accounts and the churn-vs-revenue matrix.' },
    ],
    githubUrl: 'https://github.com/omarquinn/customer-revenue-analytics',
    summaryUrl: '/projects/customer-revenue/Customer-Revenue-Analytics.pdf',
  },
  {
    slug: 'ecommerce-sales-customer-analytics',
    index: '02',
    title: 'E-commerce Sales & Customer Analytics',
    summary:
      'A full revenue and customer view across orders, products, and segments — built to answer "what is driving sales, and who is buying again?"',
    accent: 'accent', // role-coded: revenue / growth
    focus: [
      'Revenue & orders',
      'AOV',
      'Repeat customers',
      'Product performance',
    ],
    targetRoles: [
      'Data Analyst',
      'Product Analyst',
      'Growth Analyst',
      'E-commerce Analyst',
    ],
    tools: ['SQL', 'Python', 'Power BI'],
    problem:
      'An online store had transaction data but no single view of performance. Marketing, merchandising, and finance each pulled their own numbers, and nobody agreed on what was actually growing.',
    objective:
      'Build one trusted dashboard covering revenue, orders, average order value, customers, products, and repeat purchase behaviour, with segmentation that shows where growth comes from.',
    kpis: [
      { value: '$3.8M', label: 'Total revenue', tone: 'positive' },
      { value: '$72.40', label: 'Average order value', tone: 'neutral' },
      { value: '38%', label: 'Repeat customer rate', tone: 'positive' },
      { value: '12,940', label: 'Orders analyzed', tone: 'neutral' },
    ],
    insights: [
      'Repeat customers were 38% of buyers but drove 61% of revenue — retention, not just acquisition, was the growth lever.',
      'The top 10 products generated 44% of revenue, exposing concentration risk if any went out of stock.',
      'AOV rose 14% when orders included an accessory category, suggesting a clear cross-sell opportunity.',
    ],
    recommendations: [
      'Shift a share of acquisition budget toward retention and win-back, given how much revenue repeat buyers drive.',
      'Protect supply and merchandising attention for the top revenue-concentrated products.',
      'Promote the accessory cross-sell at checkout to lift average order value.',
    ],
    githubUrl: 'https://github.com/omarqnn3-blip/customer-revenue-analytics',
    summaryUrl: '#',
  },
  {
    slug: 'financial-performance-fpa-dashboard',
    index: '03',
    title: 'Financial Performance & FP&A Dashboard',
    summary:
      'A finance-grade view of revenue, cost, margin, and profit with budget-vs-actual variance and a rolling forecast.',
    accent: 'caution', // role-coded: variance / budget
    focus: [
      'Margin & profit',
      'Budget vs actual',
      'Variance analysis',
      'Forecast',
    ],
    targetRoles: ['Financial Data Analyst', 'FP&A Analyst', 'Finance BI Analyst'],
    tools: ['Excel', 'Power BI', 'DAX'],
    problem:
      'Monthly reporting was a manual spreadsheet exercise. Leadership saw actuals late, variance to budget was hard to read, and there was no consistent forward view.',
    objective:
      'Automate the monthly P&L view, surface budget-vs-actual variance by driver, and add a rolling forecast so finance can explain performance and project the rest of the year.',
    kpis: [
      { value: '41.2%', label: 'Gross margin', tone: 'positive' },
      { value: '-4.7%', label: 'Variance to budget', tone: 'caution' },
      { value: '$960K', label: 'Operating profit', tone: 'positive' },
      { value: '±3%', label: 'Forecast accuracy', tone: 'neutral' },
    ],
    insights: [
      'The budget shortfall traced to two cost lines, not lower revenue — revenue was actually 2% ahead of plan.',
      'Gross margin held steady despite rising input costs because of a favourable product mix shift.',
      'A rolling 3-month forecast cut the month-end reporting cycle from days to hours once automated.',
    ],
    recommendations: [
      'Put the two over-budget cost lines under monthly variance review with named owners.',
      'Lean into the higher-margin product mix that protected gross margin this period.',
      'Replace the manual month-end pull with the automated dashboard to free finance for analysis.',
    ],
    githubUrl: 'https://github.com/omarquinn/financial-performance-fpa',
    summaryUrl: '#',
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
