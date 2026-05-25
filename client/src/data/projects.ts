export const projects = [
  {
    title: "GeoWatch",
    status: "Built",
    description:
      "GeoWatch is a fully autonomous geopolitical intelligence agent. Submit any IR query and it decides which tools to call — live web search via Tavily, conflict event data from ACLED, bilateral trade flows from UN Comtrade — then applies a formal IR framework to produce a structured intelligence brief. The agent loop is custom-built on Gemini 2.5 Flash with exponential backoff, session locking via Redis, and a multi-turn conversation history that persists across sessions.",
    tech: [
      "Next.js",
      "Express",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Gemini API",
      "Tavily",
    ],
    github: "https://github.com/Roiwhiz/geowatch-frontend",
    live: "https://geowatch-frontend.vercel.app/",
  },
  {
    title: "Conflict Data Dashboard",
    status: "In Development",
    description:
      "Most conflict data lives in spreadsheets that analysts have to download, filter, and chart manually. This dashboard pulls live from the ACLED API and renders conflict events on an interactive map — filterable by country, actor, event type, and date range — with fatality trend lines and actor breakdowns updating in real time.",
    tech: ["Next.js", "TypeScript", "ACLED API", "Mapbox", "Recharts"],
    github: "https://github.com/Roiwhiz",
    live: "#",
  },
  {
    title: "UN Resolutions Search Engine",
    status: "In Development",
    description:
      "UN Security Council resolutions are publicly available but practically unsearchable. This tool embeds every resolution into a vector database and lets users run natural language queries — returning ranked results with AI-generated summaries. It demonstrates RAG architecture applied to a real document corpus that analysts actually need to navigate.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "OpenAI Embeddings",
    ],
    github: "https://github.com/Roiwhiz",
    live: "#",
  },
  {
    title: "Sanctions Tracker",
    status: "In Development",
    description:
      "Sanctions regimes are fragmented across jurisdictions — US OFAC, the EU, the UN, and bilateral programmes all maintain separate lists with different formats and update cycles. This tracker aggregates active sanctions across all major issuing bodies into a single queryable interface.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "OFAC API",
      "EU Sanctions Data",
    ],
    github: "https://github.com/Roiwhiz",
    live: "#",
  },
  {
    title: "Trade Flow Visualiser",
    status: "In Development",
    description:
      "Bilateral trade relationships are notoriously hard to read from raw data. This tool takes any two countries and a year, queries the UN Comtrade API, and renders the trade relationship as a Sankey diagram — showing what each country exports to the other, in what volumes, and how that has shifted over time.",
    tech: ["Next.js", "TypeScript", "UN Comtrade API", "D3.js"],
    github: "https://github.com/Roiwhiz",
    live: "#",
  },
  {
    title: "Multilingual News Aggregator",
    status: "In Development",
    description:
      "The same geopolitical event looks completely different depending on which country's press you read. This aggregator pulls from RSS feeds across multiple languages and regions, uses an LLM to translate and cluster articles by topic, and surfaces divergent narratives on the same event side by side.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API", "RSS Parsing"],
    github: "https://github.com/Roiwhiz",
    live: "#",
  },
  {
    title: "Treaty Database",
    status: "In Development",
    description:
      "International treaties are referenced constantly in academic IR but are practically difficult to search at scale. This database ingests treaty records from the UN Treaty Collection and exposes them through a full-text search interface — filterable by signatory country, topic area, and date range.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "UN Treaty Collection API"],
    github: "https://github.com/Roiwhiz",
    live: "#",
  },
  {
    title: "Country Risk Intelligence Brief Generator",
    status: "In Development",
    description:
      "Enter a country and a sector — energy, finance, agriculture, defence — and this tool generates a structured risk brief covering political stability, economic indicators, security situation, and regulatory environment. It pulls live data from the World Bank and IMF APIs.",
    tech: ["Next.js", "TypeScript", "Gemini API", "World Bank API", "IMF API"],
    github: "https://github.com/Roiwhiz",
    live: "#",
  },
  {
    title: "Refugee and Displacement Tracker",
    status: "In Development",
    description:
      "Forced displacement data is scattered across UNHCR reports that are updated infrequently and hard to compare across time. This platform pulls directly from the UNHCR API and visualises displacement trends on an interactive map with country profiles, historical trend lines, and event-based annotations.",
    tech: ["Next.js", "TypeScript", "UNHCR API", "Mapbox", "Recharts"],
    github: "https://github.com/Roiwhiz",
    live: "#",
  },
  {
    title: "UN General Assembly Voting Tracker",
    status: "In Development",
    description:
      "How countries vote in the UN General Assembly is one of the clearest signals of geopolitical alignment. This tracker ingests the full GA voting record, models it as a network graph, and lets users explore voting blocs, alignment clusters, and how specific countries' positions have shifted over time.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "D3.js",
      "UN GA Voting Records",
    ],
    github: "https://github.com/Roiwhiz",
    live: "#",
  },
];
