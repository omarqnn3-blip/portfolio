// Single source of truth for portfolio content.
// Edit text, KPIs, and links here, components read from this file.

export const profile = {
  name: 'Omar Quinn',
  positioning: 'Junior Data Analyst / BI Analyst',
  tagline:
    'Data analyst with a finance and business background. I turn messy operational data into clear dashboards, insights, and decisions across customer behavior, revenue, product performance, margins, and growth.',
  location: 'Open to remote / hybrid',
  email: 'omar.quinn@example.com',
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
      'Clean the customer data, segment the base by value, contract, tenure and payment method, and quantify the revenue at risk, so retention effort can be prioritized by dollar impact, not just by headcount.',
    kpis: [
      { value: '$456K', label: 'Monthly revenue (MRR)', tone: 'positive' },
      { value: '26.5%', label: 'Customer churn rate', tone: 'risk' },
      { value: '30.5%', label: 'Revenue churn rate', tone: 'risk' },
      { value: '599', label: 'High-value accounts at risk', tone: 'caution' },
    ],
    insights: [
      'Revenue churn (30.5%) runs about 4 points hotter than customer churn (26.5%): the customers leaving are billed above average, so churn costs more in dollars than in headcount.',
      'Contract length is the single strongest churn lever: month-to-month customers churn at 42.7%, versus 11.3% on one-year and just 2.8% on two-year contracts.',
      'Electronic-check payers churn at 45.3%, roughly triple the auto-pay methods (~15-17%), and churn concentrates in the first 12 months of tenure.',
      'The hottest pocket is High-Value, month-to-month customers at 52.6% churn: 599 still-active accounts carrying about $56.9K in monthly revenue at risk.',
    ],
    recommendations: [
      'Defend High-Value month-to-month customers first, since they sit in the highest-churn cell and hold the largest revenue-at-risk pool.',
      'Move customers onto annual or two-year contracts; the drop from 42.7% to 2.8% churn shows contract length is the most retainable lever.',
      'Nudge electronic-check customers toward automatic payment, which churns roughly 30 points lower.',
      'Strengthen onboarding in the first 12 months, where churn is concentrated, to close the early-life value gap.',
    ],
    process: [
      'Cleaned the raw Telco dataset in Python, handled the blank TotalCharges values, fixed data types, and engineered the fields the analysis runs on: Churn_Flag, Revenue_At_Risk, Tenure_Group, and Customer_Value_Segment.',
      'Wrote a set of 12 documented SQL queries to cut churn and revenue by contract, tenure, payment method, internet service, and value segment.',
      'Reframed churn from a customer count into a dollar figure (revenue at risk), so retention could be prioritized by expected impact rather than headcount.',
      'Built a 4-page Power BI dashboard: executive overview, customer base, revenue, and a retention-priority matrix.',
    ],
    learnings: [
      'What worked: leading with revenue-at-risk instead of churn counts framed everything in dollars, the language the business actually responds to.',
      "Next time: I'd add a logistic-regression churn model to score individual accounts, rather than relying on rule-based segments alone.",
      "I'd also validate the value-segment thresholds with the business instead of setting them purely analytically.",
    ],
    images: [
      { src: '/projects/customer-revenue/01-overview.png', caption: 'Revenue & churn overview: MRR, ARPU, churn rate, and churn by contract type.' },
      { src: '/projects/customer-revenue/02-segments.png', caption: 'Customer base: value segments, tenure groups, internet service, and demographics.' },
      { src: '/projects/customer-revenue/03-revenue.png', caption: 'Revenue breakdown: MRR by value segment, ARPU by contract, and revenue by tenure.' },
      { src: '/projects/customer-revenue/04-at-risk.png', caption: 'Retention priority: high-value at-risk accounts and the churn-vs-revenue matrix.' },
    ],
    githubUrl: 'https://github.com/omarqnn3-blip/customer-revenue-analytics',
    summaryUrl: '/projects/customer-revenue/Customer-Revenue-Analytics.pdf',
  },
  {
    slug: 'ecommerce-sales-customer-analytics',
    index: '02',
    title: 'E-commerce Funnel & Conversion Analysis',
    summary:
      'Event-level funnel analysis of 4,291 shoppers in BigQuery, finding where users drop off, which channels bring real buyers, and where to spend next.',
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
      'An online store had rich event data (page views, add-to-cart, checkout, payment, purchase) but no clear read on where shoppers dropped off, whether checkout was the bottleneck, or which marketing channels actually produced buyers, so budget and UX effort risked going to the wrong place.',
    objective:
      'Build the full purchase funnel from event-level data, measure step-by-step conversion, compare channels on quality (not just volume), and translate it into revenue KPIs that tell the business where to invest next.',
    kpis: [
      { value: '16.5%', label: 'Overall conversion rate', tone: 'neutral' },
      { value: '$107.46', label: 'Average order value', tone: 'positive' },
      { value: '92.1%', label: 'Payment-to-purchase rate', tone: 'positive' },
      { value: '$17.76', label: 'Revenue per visitor', tone: 'neutral' },
    ],
    insights: [
      'Checkout is not the problem: late-stage conversion is strong: 80.7% checkout-to-payment and 92.1% payment-to-purchase. The biggest drop-off is early, at view-to-cart (31.2%).',
      'Channel quality varies wildly. Email converts at 33.9%, about 5x social (6.7%), while paid ads (21.0%) and organic (17.1%) sit in between.',
      'Social is a volume trap: it drives ~29% of all traffic but the lowest purchase conversion, so spend there largely buys window-shoppers.',
      'Economics are tight but clear: AOV is $107.46 and revenue per visitor $17.76, and the average buyer completes the journey in about 25 minutes.',
    ],
    recommendations: [
      'Protect the checkout flow: late-stage conversion is already excellent, so limit changes to small A/B tests, not a redesign.',
      'Stop over-investing in social as a direct-sales channel; shift that budget toward retargeting and email capture.',
      'Double down on email, the highest-converting channel, with popups, abandoned-cart flows, and lifecycle campaigns.',
      'Set a CAC ceiling against the $107.46 AOV and $17.76 revenue per visitor so paid acquisition stays profitable.',
    ],
    process: [
      'Modeled the five funnel stages from event-level data in BigQuery: page view, add-to-cart, checkout, payment, purchase, counting distinct users at each.',
      'Calculated step-by-step conversion rates and the overall view-to-purchase rate.',
      'Cut the funnel by traffic source to compare channels on quality, not just volume.',
      'Measured time-in-funnel and revenue KPIs (AOV, revenue per buyer and per visitor) to tie behaviour back to dollars.',
    ],
    learnings: [
      'What worked: comparing channels on conversion quality rather than traffic volume flipped the obvious conclusion and exposed the social volume trap.',
      "Next time: I'd segment the view-to-cart drop-off by device and landing page to pinpoint where the biggest leak actually happens.",
      "I'd also bring in cost/CAC data per channel to turn the channel-quality finding into a concrete budget reallocation.",
    ],
    images: [
      { src: '/projects/ecommerce-funnel/01-funnel.png', caption: 'The purchase funnel: biggest drop-off is early (view-to-cart), not at checkout.' },
      { src: '/projects/ecommerce-funnel/02-channels.png', caption: 'Purchase conversion by channel: email far outperforms social.' },
      { src: '/projects/ecommerce-funnel/03-volume-vs-quality.png', caption: 'Volume vs quality: social is high-traffic but low-conversion; email is the reverse.' },
    ],
    githubUrl: 'https://github.com/omarqnn3-blip/ecommerce-funnel-analysis',
    summaryUrl: 'https://github.com/omarqnn3-blip/ecommerce-funnel-analysis#readme',
  },
  {
    slug: 'uber-valuation-dcf',
    index: '03',
    title: 'Uber Valuation: DCF & Downside Stress Test',
    summary:
      'A fully-sourced unlevered free-cash-flow DCF of Uber (NYSE: UBER) with bear / base / bull scenarios and a hard downside stress test, built like a junior analyst would hand a PM.',
    accent: 'caution', // role-coded: finance / valuation
    disclaimer:
      'Educational portfolio project, not investment advice and not a recommendation to buy or sell any security. Historical figures are from cited SEC filings; forward-looking numbers are labelled modelling assumptions.',
    focus: [
      'DCF valuation',
      'Scenario analysis',
      'Sensitivity tables',
      'Investment memo',
    ],
    targetRoles: [
      'Financial Analyst',
      'Equity Research Analyst',
      'Financial Data Analyst',
      'FP&A Analyst',
    ],
    tools: ['Excel', 'DCF Modeling', 'Scenario Analysis'],
    problem:
      'By the end of FY2025 Uber had turned to real profitability and multi-billion-dollar free cash flow, yet the stock had fallen ~28% from its high on fears that autonomous vehicles would disrupt the business. The question: is it attractively valued, and how much breaks if the bear case is right?',
    objective:
      'Build a defensible, fully-sourced unlevered FCF DCF, run bear / base / bull as three complete re-runs of the model, probability-weight them, and stress-test the downside hard enough to size the risk, not just land on a single price target.',
    kpis: [
      { value: '~$101', label: 'Prob-weighted fair value', tone: 'positive' },
      { value: '+38%', label: 'Upside vs ~$73 price', tone: 'positive' },
      { value: '~$33', label: 'Bear-case value / share', tone: 'risk' },
      { value: '~$164', label: 'Bull-case value / share', tone: 'neutral' },
    ],
    insights: [
      'Probability-weighted fair value lands near $101 (about 38% above the ~$73 quote), with a base case of ~$103.',
      'The real story is the spread: the bear case, AV disruption plus stalling margins, implies a drawdown of more than half, clustering the downside grid in the $24 to $41 range.',
      'Conservatism is built in: stock-based comp is expensed as a real cash cost and the non-operating equity stakes (Aurora, Grab, Didi) carry a 30% illiquidity haircut.',
      'Every number is traceable, footnoted to an SEC filing or flagged as an assumption, across a 9-tab live-formula model and an 11-section memo.',
    ],
    recommendations: [
      'Conclusion: a Qualified Buy / Accumulate (constructive), the upside is real and business quality is improving, but the bear case is severe.',
      'Size for survivability: accumulate carefully rather than taking a full position, given the dispersion in outcomes.',
      'Treat autonomous-vehicle deployment news as the key thesis-check that moves the model between scenarios.',
    ],
    process: [
      'Forecast 2026 to 2030 top-down: gross bookings, then revenue via the take rate, then adjusted EBITDA as a margin on bookings, walked down to unlevered free cash flow.',
      "Treated stock-based compensation as a real cash cost (deducted pre-tax), more conservative than Uber's own free-cash-flow definition.",
      'Bridged enterprise value to equity value: subtracted ~$2.9bn net debt, added the Aurora / Grab / Didi stakes at a 30% illiquidity haircut, and divided by ~2.04bn diluted shares.',
      'Ran bear, base and bull as three full re-runs of the model, probability-weighted 25 / 50 / 25, plus a dedicated downside grid.',
    ],
    learnings: [
      'What worked: making the bear case explicit and survivable, rather than landing on one tidy number, is what turned this from a calculation into a judgment.',
      "Next time: I'd add a reverse-DCF to show what growth and margin the ~$73 price already implies, as a cross-check on my forward assumptions.",
      "I'd also tie the autonomous-vehicle scenarios to dated catalysts so the thesis-check is concrete rather than open-ended.",
    ],
    images: [
      { src: '/projects/uber-valuation/01-football-field.png', caption: 'Implied value per share: bear / base / bull and the probability-weighted result vs the current price.' },
      { src: '/projects/uber-valuation/02-upside-downside.png', caption: 'Upside / downside vs price: the asymmetry that drives the conclusion.' },
    ],
    extraLinks: [
      { label: 'Investment memo (Word)', href: '/projects/uber-valuation/UBER_Investment_Memo.docx' },
      { label: 'Valuation model (Excel)', href: '/projects/uber-valuation/UBER_Valuation_Model.xlsx' },
    ],
    githubUrl: 'https://github.com/omarqnn3-blip/uber-valuation-dcf',
    summaryUrl: 'https://github.com/omarqnn3-blip/uber-valuation-dcf#readme',
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
