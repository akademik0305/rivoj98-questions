import logoDark from "~/assets/images/logo/logo-2.png"
// import logoLight from "~/assets/images/logo/logo-2.png"
import logoStacked from "~/assets/images/logo/logo-1.jpg"

export const site = {
  name: "eSquare e.V.",
  email: "info@esquare-ev.de",
  phone: "+49 152 55782470",
  phoneHref: "tel:+4915255782470",
  address: "Florastrasse 48, 13187 Berlin",
  addressLine: "Florastrasse 48, 13187, Berlin",
  url: "https://esquare-ev.de",
  founded: 2018,
}

export const assets = {
  /** Transparent PNG — dark backgrounds */
  logoDark,
  /** JPG on white — light backgrounds */
  logo: logoDark,
  logoStacked,
  heroBg:
    "https://esquare-ev.de/wp-content/uploads/2023/11/376819373_706837994822143_2083299039578990032_n-1.jpg",
  newsletterBg:
    "https://esquare-ev.de/wp-content/uploads/2023/11/pngtree-bookstore-background-gray-background-newspaper-psd-picture-image_914534-1024x374.png",
}

export const homeActivities = [
  {
    title: "Non-Formal Education",
    description:
      "We work on promoting non-formal education, we focus on younger generations and equipping them with necessary skills and competencies to increase their civic participation in the society and promote mutual understanding between different cultures.",
    cta: "Explore Projects",
    to: "/projects/eu-mobility",
    reverse: false,
    images: [
      "https://esquare-ev.de/wp-content/uploads/2023/11/248499945_2581825841961271_80847004823349955_n.jpg",
      "https://esquare-ev.de/wp-content/uploads/2023/11/278567267_358932216279391_5748461646202050641_n-1024x768.jpg",
      "https://esquare-ev.de/wp-content/uploads/2023/11/250060994_2581825605294628_8580545588188982534_n-1024x473.jpg",
    ],
  },
  {
    title: "International Exchange Programmes",
    description:
      "Our projects, spanning from local to international levels, use dynamic methods like workshops, international youth exchanges, focus groups and forums to foster a global, peer-to-peer learning community committed to active citizenship.",
    cta: "Explore Projects",
    to: "/projects/open-applications",
    reverse: true,
    images: [
      "https://esquare-ev.de/wp-content/uploads/2023/11/IMG_7512.jpg",
      "https://esquare-ev.de/wp-content/uploads/2023/11/250631709_2581825905294598_6595524751515843079_n.jpg",
      "https://esquare-ev.de/wp-content/uploads/2023/11/376631965_707515578087718_8184947767423237743_n.jpg",
      "https://esquare-ev.de/wp-content/uploads/2023/11/248041182_2581825641961291_2960537840988198306_n.jpg",
    ],
  },
  {
    title: "Research",
    description:
      "We focus on various strands of research related to democracy, human rights and accountability of media institutions. Our researchers have a wide experience in topics such as gender, ngo management, fact checking, digital governance and digital rights.",
    cta: "Explore Publications",
    to: "/research",
    reverse: false,
    images: [
      "https://esquare-ev.de/wp-content/uploads/2023/11/246344079_2573501626127026_741603927364192344_n-1024x508.jpg",
      "https://esquare-ev.de/wp-content/uploads/2023/11/78535783_1856093954534467_4907568411392868352_n.png",
    ],
  },
]

export const homeActivityCards = [
  {
    number: "01",
    title: "Non-Formal Education",
    description:
      "Equipping younger generations with skills and competencies for civic participation and mutual cultural understanding.",
    cta: "Explore Projects",
    to: "/projects/eu-mobility",
    featured: false,
  },
  {
    number: "02",
    title: "International Exchange Programmes",
    description:
      "Dynamic methods like workshops, youth exchanges, focus groups and forums to foster global peer-to-peer learning.",
    cta: "Explore Projects",
    to: "/projects/open-applications",
    featured: true,
  },
  {
    number: "03",
    title: "Research",
    description:
      "Democracy, human rights and media accountability. Topics include gender, NGO management, fact checking, digital governance.",
    cta: "Explore Publications",
    to: "/research",
    featured: false,
  },
]

export const homeAboutFeatures = [
  "EU-funded mobility projects connecting young Europeans",
  "Global outreach programs building cross-cultural bridges",
  "Independent research in digital rights and media literacy",
]

export const homeAboutImages = [
  "https://esquare-ev.de/wp-content/uploads/2023/11/248499945_2581825841961271_80847004823349955_n.jpg",
  "https://esquare-ev.de/wp-content/uploads/2023/11/IMG_7512.jpg",
  "https://esquare-ev.de/wp-content/uploads/2023/11/376631965_707515578087718_8184947767423237743_n.jpg",
  "https://esquare-ev.de/wp-content/uploads/2023/11/248041182_2581825641961291_2960537840988198306_n.jpg",
]

export const coreActivities = homeActivities.map(({ title, description, cta, to }) => ({
  title,
  description,
  cta,
  to,
  accent: "main" as const,
}))

export const teamMembers = [
  {
    name: "Haytham Mones",
    role: "CEO",
    bio: "Haytham is the founder and CEO of eSquare, a researcher in the field of governance, digital transformation, and media. Currently a PhD candidate at the Hertie School of Governance. He holds a Master of Public Policy from the University of Erfurt in Germany and a Master of Arts in Global Citizenship, Identities and Human Rights from the University of Nottingham, UK.",
  },
  {
    name: "Grigoriy Grigoryev",
    role: "Project Coordinator",
    bio: "Grisha is a student, tutor, mentor, advisor & an entrepreneur. He has been volunteering and working with young people since 2012, on four continents. He holds Master's degrees in Political Science and Public Policy.",
  },
  {
    name: "Mateeullah Tareen",
    role: "Project Coordinator",
    bio: "Mateeullah Tareen is a seasoned researcher and project organizer, currently pursuing his PhD at Humboldt-Universität zu Berlin. He excels in project management, grant writing, and democratization processes.",
  },
  {
    name: "Tuba Iqbal",
    role: "Project Coordinator",
    bio: "Tuba contributes to eSquare's international projects with expertise in youth engagement, civic education, and cross-cultural programme design.",
  },
  {
    name: "Ulyana Duve",
    role: "Project Coordinator",
    bio: "Ulyana is a youth worker, facilitator and project manager with 5 years of experience. She holds a degree in Pedagogy and is passionate about promoting diversity and equality through self-expression.",
  },
  {
    name: "Elisabeth Fischer",
    role: "Project Coordinator",
    bio: "Elisabeth Fischer is a game designer based in Berlin with a BA in Media and Communication and an MSc in Cultural Informatics. She specialises in immersive gamified applications in Art and Cultural Heritage.",
  },
]

export interface PostItem {
  slug: string
  title: string
  date: string
  excerpt: string
  category?: string
}

export const researchPosts: PostItem[] = [
  {
    slug: "it-skills-for-young-migrants",
    title: "IT skills for young migrants",
    date: "2024-02-06",
    excerpt:
      "The project aims at equipping young migrant kids in Germany with essential digital skills that helps them integrate in the German society and provide them with the basic technological skills needed for future employment.",
  },
  {
    slug: "fact-checking-research",
    title: "Fact checking research",
    date: "2024-02-06",
    excerpt:
      "In this project we research trends in digital content fact checking, research the impact of fact checking initiatives on information consumers by collecting and analysing data drawn from various countries around the world.",
  },
  {
    slug: "mapping-digital-initiatives",
    title: "Mapping digital initiatives",
    date: "2024-02-06",
    excerpt:
      "The project is a partnership with GPP e.V. and the digital arabia network. It aimed at creating a map of digital initiatives and actors in the Middle east and north africa to facilitate future cooperation.",
  },
]

export const blogPosts: PostItem[] = [
  {
    slug: "change-is-happening",
    title: "Change is happening",
    date: "2024-02-06",
    excerpt: "Our website is currently under construction.",
  },
]

export const openApplications: PostItem[] = [
  {
    slug: "youth-4-eu",
    title: "YOUTH 4 EU",
    date: "2024-02-06",
    excerpt:
      "KA1 Youth Exchange 28 March – 5 April 2024 Berlin, Germany. The project's core aim is to enhance young individuals' understanding of EU policymaking. Participants from Germany, France, Romania, Greece, and Ireland will gather in Berlin for a 7-day youth exchange.",
    category: "Apply Now",
  },
]

export const globalProjects = [
  {
    title: "Servitude for Quality Education",
    location: "Azerbaijan",
    topic: "Dyslexia / Dyscalculia",
    href: "https://esquare-ev.de/global_projects/s4qedu/",
  },
]

export const imprintSections = [
  {
    title: "Address",
    content: [
      "eSquare e.V.",
      "Florastrasse 48",
      "10117 Berlin",
      "Germany",
    ],
  },
  {
    title: "CEO",
    content: [
      "Haytham Mones",
      site.phone,
      site.email,
    ],
  },
  {
    title: "Registration",
    content: [
      "Association register number VR37329 B",
      "District Court Berlin Charlottenburg",
      "Tax number: 27/664/58065",
    ],
  },
  {
    title: "Represented by",
    content: [
      "Ms. Haytham Mones, Legal head of the organization",
      "Responsible for content according to Section 6 MDStV: Ms. Haytham Mones, CEO",
    ],
  },
  {
    title: "Liability",
    content: [
      "eSquare e.V. cannot guarantee the completeness and correctness of the information provided. eSquare e.V. as content provider is responsible for its own content according to the general laws. In addition, eSquare e.V. holds no responsibility for the content of external links, except where it has positive knowledge and it is technically possible and reasonable to prevent their use.",
      "We create our Internet presence with the utmost care. In the event of warnings against applicable law, we ask that you contact us in advance to avoid unnecessary litigation and costs.",
    ],
  },
  {
    title: "Conception, design and programming",
    content: [
      "Elisabeth Fischer",
      "Buggenhagenstr. 30",
      "10369 Berlin",
      "Germany",
    ],
  },
]

export const privacyIntro = `Data protection is of a particularly high priority for eSquare e.V. The use of the Internet pages of eSquare e.V. is possible without any indication of personal data. However, if a data subject wants to use special services of our association via our website, processing of personal data could become necessary.`

export const privacySections = [
  {
    title: "Controller",
    content: `The controller within the meaning of the General Data Protection Regulation is:\n\neSquare e.V.\nFlorastrasse 48\n13187, Berlin\nGermany\nTel.: ${site.phone}\nWebsite: ${site.url}`,
  },
  {
    title: "Cookies",
    content:
      "The internet pages of eSquare e.V. use cookies. Cookies are text files that are stored on a computer system via an Internet browser. Through the use of cookies, eSquare e.V. can provide users with more user-friendly services that would not be possible without the cookie setting.",
  },
  {
    title: "Collection of general data",
    content:
      "When data subjects visit our website, we collect general data and information transmitted by the browser. This may include browser type, operating system, referrer URL, date and time of access, and IP address. These data do not allow conclusions about the data subject and are used for security and optimization.",
  },
  {
    title: "Rights of the data subject",
    content:
      "Every data subject has the right to request confirmation as to whether personal data concerning them are being processed, to obtain information about stored data, to request rectification or erasure, to restrict processing, and to data portability where applicable. Data subjects may also lodge a complaint with a supervisory authority.",
  },
  {
    title: "Newsletter",
    content:
      "If you subscribe to our newsletter, we process your email address to send updates about projects, events, and opportunities. You may unsubscribe at any time via the link in each newsletter or by contacting us directly.",
  },
]
