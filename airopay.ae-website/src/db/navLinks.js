export const navLinks = [
  { title: "what we do", route: "/" },
  { title: "solutions", route: "/solutions" },
  { title: "customers", route: "/customers" },
  { title: "company", route: "/company" },
  { title: "insights", route: "/insights" },
];

export const nav = [
  {
    title: "home",
    mobile: true,
    route: "/",
  },
  {
    title: "contact us",
    mobile: true,
    route: "/contact",
  },
  {
    title: "what we do",
    icon: "bi bi-search",
    active: true,
    sub: [
      {
        title: "technology",
        sub: [
          { title: "Our platform", route: "/technology/ourplatform" },
          { title: "Composable approach", route: "/technology/composability" },
          { title: "Multi-cloud approach", route: "/technology/multicloud" },
          { title: "Process orchestration", route: "/technology/process" },
          {
            title: "Configuration as code",
            route: "/technology/configuration",
          },
          { title: "Security and compliance", route: "/technology/security" },
        ],
      },
      {
        title: "services",
        sub: [
          { title: "enablement", route: "/technology/enablement" },
          { title: "advisory", route: "/technology/advisory" },
        ],
      },
      {
        title: "ecosystem",
        sub: [{ title: "developer", route: "/technology/devs" }],
      },
    ],
  },
  {
    title: "solutions",
    icon: "bi bi-puzzle",
    active: false,
    sub: [
      {
        title: "lending engine",
        sub: [
          {
            title: "rethinking lending",
            route: "/solutions/rethinkinglending",
          },
          { title: "business lending", route: "/solutions/businesslending" },
          { title: "personal lending", route: "/solutions/personallending" },
          { title: "purchase finance", route: "/solutions/purchasefinance" },
          { title: "retail mortgage", route: "/solutions/retailmortgage" },
        ],
      },
      {
        title: "daily banking",
        sub: [
          { title: "deposits", route: "/solutions/deposits" },
          {
            title: "business banking & deposit",
            route: "/solutions/businessbanking",
          },
          {
            title: "personal banking & deposit",
            route: "/solutions/personalbanking",
          },
          {
            title: "stored value account",
            route: "/solutions/storevalueaccount",
          },
        ],
      },
      {
        title: "use cases",
        sub: [
          { title: "banking as a service", route: "/solutions/baas" },
          { title: "purchase now pay later", route: "/solutions/pnpl" },
          // { title: "embedded finances", route: "/solutions/embeddedfinance" },
        ],
      },
    ],
  },
  {
    title: "customers",
    icon: "bi bi-person-circle",
    active: false,
    sub: [
      {
        title: "our customer",
        sub: [{ name: "customer stories", route: "/" }],
      },
      {
        title: "who we serve",
        sub: [
          { title: "traditional banks", route: "/customers/banks" },
          { title: "neobanks", route: "/customers/neobanks" },
          { title: "lenders", route: "/customers/lenders" },
          { title: "fintechs", route: "/customers/fintech" },
          { title: "telcons", route: "/customers/telcons" },
          { title: "ecommerce", route: "/customers/ecommerce" },
        ],
      },
    ],
  },
  {
    title: "company",
    active: false,
    icon: "bi bi-building",
    sub: [
      {
        title: "join us",
        sub: [{ title: "careers", route: "/join/career" }],
      },
      {
        title: "about us",
        sub: [{ title: "about us", route: "/" }],
      },
    ],
  },
  {
    title: "Terms of Service",
    mobile: true,
    route: "/terms",
  },
  {
    title: "Privacy Policy",
    mobile: true,
    route: "/privacy-policy",
  },
];
