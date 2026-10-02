/* chapters-data.js — Chapter lists for Core 1 and Core 2 */
window.CHAPTERS_CORE1 = [
  {num:1,  title:"IT Foundations & Troubleshooting Methodology", domain:"troubleshooting", coverage:"COVERED", objectives:["5.1","5.2"]},
  {num:2,  title:"PC Fundamentals & Components",                 domain:"hardware",        coverage:"COVERED", objectives:["3.1"]},
  {num:3,  title:"CPUs: Architecture & Installation",            domain:"hardware",        coverage:"COVERED", objectives:["3.4","3.5"]},
  {num:4,  title:"RAM & Memory",                                 domain:"hardware",        coverage:"COVERED", objectives:["3.3","3.4"]},
  {num:5,  title:"Motherboards & Expansion Cards",               domain:"hardware",        coverage:"COVERED", objectives:["3.4","3.5"]},
  {num:6,  title:"Storage Devices: HDD, SSD & RAID",            domain:"hardware",        coverage:"COVERED", objectives:["3.4","3.6"]},
  {num:7,  title:"Power Supplies & Cooling",                     domain:"hardware",        coverage:"COVERED", objectives:["3.4","3.7"]},
  {num:8,  title:"Display Technologies & Interfaces",            domain:"hardware",        coverage:"COVERED", objectives:["3.8"]},
  {num:9,  title:"Cables, Connectors & USB",                     domain:"hardware",        coverage:"COVERED", objectives:["3.1","3.2"]},
  {num:10, title:"Printers: Technologies & Setup",               domain:"hardware",        coverage:"COVERED", objectives:["3.9","3.10"]},
  {num:11, title:"Printers: Config, Security & Maintenance",     domain:"hardware",        coverage:"COVERED", objectives:["3.9","3.10"]},
  {num:12, title:"TCP/IP Model & Core Protocols",                domain:"networking",      coverage:"COVERED", objectives:["2.1","2.2"]},
  {num:13, title:"IP Addressing: IPv4, IPv6 & Subnetting",       domain:"networking",      coverage:"COVERED", objectives:["2.1","2.3"]},
  {num:14, title:"DHCP, DNS & Network Services",                 domain:"networking",      coverage:"COVERED", objectives:["2.1","2.4"]},
  {num:15, title:"Network Hardware & Types",                     domain:"networking",      coverage:"COVERED", objectives:["2.2","2.5"]},
  {num:16, title:"Wireless Networking",                          domain:"networking",      coverage:"COVERED", objectives:["2.3","2.4"]},
  {num:17, title:"Internet Connections & IoT",                   domain:"networking",      coverage:"COVERED", objectives:["2.6","2.7"]},
  {num:18, title:"Network Monitoring & Troubleshooting",         domain:"troubleshooting", coverage:"COVERED", objectives:["5.6","5.7"]},
  {num:19, title:"Laptop Hardware & Upgrades",                   domain:"mobile",          coverage:"COVERED", objectives:["1.1","1.2"]},
  {num:20, title:"Mobile Devices: Connectivity & Apps",          domain:"mobile",          coverage:"PARTIAL", objectives:["1.2","1.3"]},
  {num:21, title:"Enterprise Mobility & Mobile Troubleshooting", domain:"mobile",          coverage:"COVERED", objectives:["1.3","5.4"]},
  {num:22, title:"Cloud Computing Fundamentals",                 domain:"cloud",           coverage:"COVERED", objectives:["4.1"]},
  {num:23, title:"Virtualization Deep Dive",                     domain:"cloud",           coverage:"COVERED", objectives:["4.1","4.2"]},
  {num:24, title:"Hardware Troubleshooting",                     domain:"troubleshooting", coverage:"COVERED", objectives:["5.3","5.4","5.5"]},
  {num:25, title:"Display & Printer Troubleshooting",            domain:"troubleshooting", coverage:"COVERED", objectives:["5.4","5.5"]},
];

window.CHAPTERS_CORE2 = [
  {num:1,  title:"Windows Editions & OS Overview",               domain:"os",             coverage:"COVERED", objectives:["1.1"]},
  {num:2,  title:"OS Installation & Upgrades",                   domain:"os",             coverage:"COVERED", objectives:["1.2","1.3"]},
  {num:3,  title:"Windows Features & Settings",                  domain:"os",             coverage:"COVERED", objectives:["1.4","1.5"]},
  {num:4,  title:"Windows Networking & Command Line",            domain:"os",             coverage:"COVERED", objectives:["1.6","4.7"]},
  {num:5,  title:"Installing Applications",                      domain:"os",             coverage:"COVERED", objectives:["1.7"]},
  {num:6,  title:"macOS & Linux Fundamentals",                   domain:"os",             coverage:"COVERED", objectives:["1.8","1.9"]},
  {num:7,  title:"Cloud-Based Productivity",                     domain:"os",             coverage:"COVERED", objectives:["1.10","4.1"]},
  {num:8,  title:"Physical Security & Access Controls",          domain:"security",       coverage:"COVERED", objectives:["2.1","2.2"]},
  {num:9,  title:"Social Engineering & Threats",                 domain:"security",       coverage:"COVERED", objectives:["2.3","2.4"]},
  {num:10, title:"Malware Detection & Removal",                  domain:"security",       coverage:"COVERED", objectives:["2.4","2.5"]},
  {num:11, title:"SOHO & Wireless Network Security",             domain:"security",       coverage:"COVERED", objectives:["2.6","2.7"]},
  {num:12, title:"Windows Security & Browser Security",          domain:"security",       coverage:"COVERED", objectives:["2.7","2.8"]},
  {num:13, title:"Workstation Hardening & Mobile Security",      domain:"security",       coverage:"COVERED", objectives:["2.8","2.9"]},
  {num:14, title:"Data Destruction & Disposal",                  domain:"security",       coverage:"COVERED", objectives:["2.9","4.5"]},
  {num:15, title:"Windows OS Troubleshooting",                   domain:"troubleshooting",coverage:"COVERED", objectives:["3.1"]},
  {num:16, title:"PC Security & Mobile OS Issues",               domain:"troubleshooting",coverage:"COVERED", objectives:["3.2","3.3"]},
  {num:17, title:"Safety Procedures",                            domain:"operational",    coverage:"COVERED", objectives:["4.4"]},
  {num:18, title:"Documentation & Change Management",            domain:"operational",    coverage:"COVERED", objectives:["4.1","4.2"]},
  {num:19, title:"Privacy, Licensing & Environmental Impact",    domain:"operational",    coverage:"COVERED", objectives:["4.5","4.6"]},
  {num:20, title:"Backup, Recovery & Operational Wrap-Up",       domain:"operational",    coverage:"COVERED", objectives:["4.2","4.3"]},
];

window.DOMAIN_LABELS_CORE1 = {
  hardware:"Hardware", networking:"Networking", mobile:"Mobile Devices",
  cloud:"Cloud & Virtualization", troubleshooting:"Troubleshooting"
};

window.DOMAIN_LABELS_CORE2 = {
  os:"Operating Systems", security:"Security",
  troubleshooting:"Troubleshooting", operational:"Operational Procedures"
};
