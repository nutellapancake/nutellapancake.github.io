/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Columbia University, IEOR Department',
    position: 'University Projects / Student Ambassador',
    url: 'https://engineering.columbia.edu/',
    startDate: '2023-08-01',
    summary: 'Represented the IEOR department in various events, providing insights and guidance to prospective students. Developed models and applied quantitative techniques to optimize asset allocation and trading strategies.',
    highlights: [
      'Developed a model to compute the optimal share sales schedule considering moving-average/market memory liquidity impact.',
      'Solved a Markowitz portfolio optimization problem, enhancing portfolio performance while managing risk.',
      'Employed dimension reduction and clustering methods to identify anomalies in data.',
      'Designed and implemented a pairs trading algorithm using parallelized stochastic gradient descent.',
      'Developed an algorithmic trading script to trade cryptocurrencies using technical analysis and real-time data.',
    ],
  },
  {
    name: 'Ernst & Young (EY), Financial Service Risk Management (FSRM)',
    position: 'Senior Quantitative Risk Consultant',
    url: 'https://www.ey.com/',
    startDate: '2023-03-01',
    summary: 'Spearheaded the integration and advancement of credit risk models for large Canadian D-SIBs post-M&A, ensuring compliance with IFRS 9 and enhancing the predictive accuracy of PD, EAD, and LGD assessments for diverse wholesale portfolios.',
    highlights: [
      'Provided strategic guidance on the evaluation and refinement of Wholesale ECL models.',
      'Engineered and deployed machine learning risk quantification algorithms using Python, SAS, and R.',
      'Enhanced model performance through advanced statistical methods like logistic regression, decision trees, and sensitivity analysis.',
    ],
  },
  {
    name: 'The University of Toronto',
    position: 'Teaching Assistant (TA) & Research Assistant (RA)',
    url: 'https://www.utoronto.ca/',
    startDate: '2019-09-01',
    endDate: '2023-06-01',
    summary: 'Led a research project examining the prices and ratings of bonds pre-1930s, analyzing the impact of trading style shifts on bond pricing. Served as a TA for 8 diverse courses, including Financial Accounting and Macroeconomics.',
    highlights: [
      'Presented findings to department faculty, highlighting key insights and historical trends.',
      'Served as a TA for classes exceeding 400 students, providing support and guidance.',
    ],
  },
  {
    name: 'Scotiabank, Scotia Wealth Management',
    position: 'Quantitative Business Analyst, Fee Based Operations',
    url: 'https://www.scotiabank.com/',
    startDate: '2022-05-01',
    endDate: '2022-08-01',
    summary: 'Optimized fee structures for over 1500 client accounts by leveraging data analytics, enhancing the tiering system of client fee agreements.',
    highlights: [
      'Engineered an OCR data extraction pipeline and automated weekly review tasks with Python and VBA.',
      'Improved operational efficiency by transforming processes from weekly to daily execution.',
    ],
  },
  {
    name: 'Scotiabank, VELOCITY: Global Risk Management',
    position: 'Forecasting Intern, Retail Models & Analytics',
    url: 'https://www.scotiabank.com/',
    startDate: '2021-09-01',
    endDate: '2021-12-01',
    summary: 'Conducted data analysis using Python, SAS, and SQL, distilling large datasets into actionable insights. Visualized data trends and forecasts with Power BI to support strategic decision-making across the Retail Models and Analytics team.',
    highlights: [
      'Supported strategic decision-making through data analysis and visualization.',
    ],
  },
];

export default work;
