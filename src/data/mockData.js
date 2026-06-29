// "export" means other files can import and use this data.
// "const" means this variable won't be reassigned.
export const dashboardData = {

  // --- BUSINESS INFO ---
  business: {
    name: "Marisol's Bakery",
    owner: "Maria",
    employees: 14,
  },

  // --- SECURITY SCORE ---
  // A number from 0-100 plus a human-readable label and change from last week.
  score: {
    value: 78,
    max: 100,
    label: "Mostly secure",
    change: +6,
    summary:
      "You're in good shape overall. A couple of small gaps are worth closing this week to stay ahead of the most common attacks.",
  },

  // --- THIS WEEK'S TASKS ---
  // An array (list) of task objects. Each object has its own set of properties.
  tasks: [
    {
      id: 1,                        // unique identifier for each task
      priority: "HIGH",
      category: "Protect",
      minutes: 10,
      title: "Turn on two-step sign-in for 2 admin accounts",
      detail:
        "Two of your administrator accounts can sign in with only a password. If that password ever leaks, an attacker is one step away from full control of your email and files. Two-step sign-in adds a code from your phone — and blocks almost all of these takeovers.",
      done: false,                  // false = not checked off yet
    },
    {
      id: 2,
      priority: "MED",
      category: "Identify",
      minutes: 5,
      title: "Close 2 employee accounts that are no longer used",
      detail:
        "Two accounts belong to people who no longer work here. Unused accounts are easy targets — if someone still has the password, they could log in undetected.",
      done: false,
    },
    {
      id: 3,
      priority: "LOW",
      category: "Detect",
      minutes: 2,
      title: "Confirm 1 unfamiliar sign-in from Lagos, Nigeria",
      detail:
        "A sign-in was detected from a location your team has never used. It may be a VPN or a traveler, but it's worth confirming.",
      done: false,
    },
  ],

  // --- ACTIVITY FEED ("What Changed") ---
  // A list of security events noticed this week.
  events: [
    {
      id: 1,
      severity: "HIGH",
      title: "Impossible travel on an admin login",
      meta: "maria@ · Salt Lake City → Lagos · 40 min apart",
      detail:
        "This account signed in from Salt Lake City and then from Lagos, Nigeria — 40 minutes apart. That's physically impossible to travel, which means a password was stolen and is being used from somewhere else.",
      mitre: "T1078 · Valid Accounts",
    },
    {
      id: 2,
      severity: "MED",
      title: "14 failed sign-ins on the front-desk account",
      meta: "frontdesk@ · 14 attempts in 5 min · blocked",
      detail: null,   // null means no extra detail for this event
    },
    {
      id: 3,
      severity: "MED",
      title: "A new app was given access to your email",
      meta: '"InvoiceSync" · granted by jose@ · 2 days ago',
      detail: null,
    },
    {
      id: 4,
      severity: "CLEAR",
      title: "Everything else looks normal",
      meta: "298 of 312 sign-ins matched usual patterns",
      detail: null,
    },
  ],

  // --- NIST CSF 2.0 COVERAGE ---
  // The six cybersecurity framework categories and their current status.
  nist: [
    { id: 1, name: "Govern",   status: "green",  label: "On track" },
    { id: 2, name: "Identify", status: "yellow", label: "1 to review" },
    { id: 3, name: "Protect",  status: "yellow", label: "Action needed" },
    { id: 4, name: "Detect",   status: "green",  label: "Active" },
    { id: 5, name: "Respond",  status: "green",  label: "Ready" },
    { id: 6, name: "Recover",  status: "green",  label: "Backups OK" },
  ],

  // --- CONNECTED SOURCES ---
  // The list of data integrations and their connection status.
  sources: [
    { id: 1, name: "Google Workspace", status: "green",  label: "Connected · 2 min ago" },
    { id: 2, name: "Microsoft 365",    status: "green",  label: "Connected · 6 min ago" },
    { id: 3, name: "Firewall (export)", status: "green", label: "Connected · 1 hr ago" },
    { id: 4, name: "Endpoint logs",    status: "yellow", label: "Reconnect needed" },
    { id: 5, name: "Website scan",     status: "green",  label: "Connected · today" },
  ],

  // --- TOTALS ---
  totalEvents: 312,
  totalSources: 5,
  activeSources: 4,
};
