// Single source of truth for portfolio content.
// Edit text, KPIs, and links here — components read from this file.

export const profile = {
  name: 'Omar Quinn',
  positioning: 'Junior Data Analyst / BI Analyst',
  tagline:
    'Data analyst with a finance and business background. I turn messy operational data into clear dashboards, insights, and decisions across customer behavior, revenue, product performance, margins, and growth.',
  location: 'Open to remote / hybrid',
  email: 'omar.quinn@example.com',
  github: 'https://github.com/omarquinn',
  linkedin: 'https://www.linkedin.com/in/omarquinn',
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
    title: 'E-commerce Funnel & Conversion Analysis',
    summary:
      'Event-level funnel analysis of 4,291 shoppers in BigQuery — finding where users drop off, which channels bring real buyers, and where to spend next.',
    accent: 'accent', // role-coded: revenue / growth
    focus: [
      'Funnel analysis',
      'Conversion rates',
      'Channel performance',
      'Revenue efficiency',
    ],
    targetRoles: [
      'Data Analyst',
      'Product Analyst',
      'Growth Analyst',
      'E-commerce Analyst',
    ],
    tools: ['BigQuery', 'SQL'],
    problem:
      'An online store had rich event data (page views, add-to-cart, checkout, payment, purchase) but no clear read on where shoppers dropped off, whether checkout was the bottleneck, or which marketing channels actually produced buyers — so budget and UX effort risked going to the wrong place.',
    objective:
      'Build the full purchase funnel from event-level data, measure step-by-step conversion, compare channels on quality (not just volume), and translate it into revenue KPIs that tell the business where to invest next.',
    kpis: [
      { value: '16.5%', label: 'Overall conversion rate', tone: 'neutral' },
      { value: '$107.46', label: 'Average order value', tone: 'positive' },
      { value: '92.1%', label: 'Payment-to-purchase rate', tone: 'positive' },
      { value: '$17.76', label: 'Revenue per visitor', tone: 'neutral' },
    ],
    insights: [
      'Checkout is not the problem: late-stage conversion is strong — 80.7% checkout-to-payment and 92.1% payment-to-purchase. The biggest drop-off is early, at view-to-cart (31.2%).',
      'Channel quality varies wildly. Email converts at 33.9% — about 5x social (6.7%) — while paid ads (21.0%) and organic (17.1%) sit in between.',
      'Social is a volume trap: it drives ~29% of all traffic but the lowest purchase conversion, so spend there largely buys window-shoppers.',
      'Economics are tight but clear: AOV is $107.46 and revenue per visitor $17.76, and the average buyer completes the journey in about 25 minutes.',
    ],
    recommendations: [
      'Protect the checkout flow — late-stage conversion is already excellent, so limit changes to small A/B tests, not a redesign.',
      'Stop over-investing in social as a direct-sales channel; shift that budget toward retargeting and email capture.',
      'Double down on email — the highest-converting channel — with popups, abandoned-cart flows, and lifecycle campaigns.',
      'Set a CAC ceiling against the $107.46 AOV and $17.76 revenue per visitor so paid acquisition stays profitable.',
    ],
    images: [
      { src: '/projects/ecommerce-funnel/01-funnel.png', caption: 'The purchase funnel — biggest drop-off is early (view-to-cart), not at checkout.' },
      { src: '/projects/ecommerce-funnel/02-channels.png', caption: 'Purchase conversion by channel — email far outperforms social.' },
      { src: '/projects/ecommerce-funnel/03-volume-vs-quality.png', caption: 'Volume vs quality — social is high-traffic but low-conversion; email is the reverse.' },
    ],
    githubUrl: 'https://github.com/omarquinn/ecommerce-funnel-analysis',
    summaryUrl: 'https://github.com/omarquinn/ecommerce-funnel-analysis#readme',
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
