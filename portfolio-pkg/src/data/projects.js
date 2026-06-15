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
      'A subscription business was losing customers without a clear view of who was leaving, why, or how much recurring revenue was exposed. Retention spend was spread evenly instead of where it mattered.',
    objective:
      'Segment the customer base, flag accounts at high risk of churning, and quantify the revenue at risk so the team can prioritize retention effort by expected impact.',
    kpis: [
      { value: '23.4%', label: 'Annual churn rate', tone: 'risk' },
      { value: '$1.2M', label: 'Revenue at risk', tone: 'risk' },
      { value: '6', label: 'Customer segments', tone: 'neutral' },
      { value: '+11pts', label: 'Retention lift (modeled)', tone: 'positive' },
    ],
    insights: [
      'Three segments accounted for 68% of revenue at risk while making up only 31% of the customer base.',
      'Churn spiked sharply after the third billing cycle, pointing to an onboarding and early-value gap rather than price.',
      'High-value customers who contacted support more than twice in 30 days churned at roughly double the baseline rate.',
    ],
    recommendations: [
      'Concentrate retention budget on the three high-revenue, high-risk segments instead of spreading it evenly.',
      'Add a structured 90-day onboarding checkpoint to close the early-value gap before the third billing cycle.',
      'Trigger a proactive outreach play when a high-value account opens repeat support tickets.',
    ],
    githubUrl: 'https://github.com/omarquinn/customer-churn-revenue-risk',
    summaryUrl: '#', // replace with a link to your executive summary PDF
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
    githubUrl: 'https://github.com/omarquinn/ecommerce-sales-analytics',
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
