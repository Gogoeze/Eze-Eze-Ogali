// All page content lives here. Anything in [BRACKETS] is a placeholder to replace.
// Fields mirror the future Sanity schema, so phase two does not touch components.

export type IconKey = "training" | "tv" | "radio" | "education";

export type Project = {
  slug: string;
  org: string;
  title: string;
  summary: string;
  role: string;
  result: string;
  challenge: string;
  approach: string;
  outcome: string;
  tools: string[];
  icon: IconKey;
  link: { label: string; href: string };
  metric: { value: string; label: string; source?: { label: string; href: string } };
  mediaLabel: string;
};

export const person = {
  name: "Eze Eze Ogali",
  role: "Strategic Communications Consultant",
  headline: "Storytelling that shifts behavior and moves communities.",
  intro:
    "Two decades turning complex health and civic policy into radio and television that millions of Nigerians watch, trust and act on.",
  location: "Abuja, Nigeria",
  years: 20,
  email: "ezeogali@gmail.com",
  phone: "+234 816 241 6266",
  whatsapp: "https://wa.me/2348162416266",
  linkedin: "https://www.linkedin.com/in/eze-eze-ogali-5b736040",
  about: [
    "A seasoned development communication strategist and media scholar with over two decades of experience designing multi-million dollar social and behavior change (SBC) initiatives across West Africa. Grounded in the rigorous structural and dramatic traditions of the legendary playwright Prof. Ola Rotimi, my work bridges the gap between high-level public policy and grassroots cultural resonance. From directing transformative broadcast formats for BBC Media Action to leading strategic media implementations for USAID-funded public health campaigns, I specialize in engineering media architectures that dismantle stigma, enforce institutional accountability, and measurably shift societal norms.",
    "Whether training local journalists or orchestrating nationwide broadcast campaigns, my focus is always on creating narratives that empower communities and save lives.",
  ],
  portraitLabel: "[ADD PORTRAIT PHOTO]",
};

export const clients = [
  { name: "Johns Hopkins CCP", logo: "/logos/jhi.jpg", tint: "#E3EDFB" },
  { name: "USAID Breakthrough ACTION", logo: "/logos/btal1.jpg", tint: "#FDE8E8" },
  { name: "BBC Media Action", logo: "/logos/bbcl1.jpg", tint: "#EDEEF2" },
  { name: "Communication Aid International", logo: "/logos/communication-aid.jpg", tint: "#E1F5EC" },
  { name: "Nigerian Institute of Public Relations", logo: "/logos/niprl1.jpg", tint: "#FFF3D6" },
  { name: "COMPASS", logo: "/logos/COMPASSL1.png", tint: "#F1E8FB" },
  { name: "Institute of Strategic and Development Communication", logo: "/logos/SCHOOL.jpg", tint: "#DFF3F7" },
];

export const projects: Project[] = [
  {
    slug: "wetin-dey",
    org: "BBC Media Action",
    title: "“Wetin Dey” TV drama",
    summary: "A nationwide Nigerian television series created to tackle the stigma around HIV and sexual health.",
    role: "Content Researcher and Script Editor, turning medical facts into storylines audiences recognize as their own.",
    result: "Within three months on air, 20% of NTA’s audience had watched, and half of its viewers tuned in every week.",
    challenge: "In the mid-2000s, HIV/AIDS carried a heavy burden of social isolation and fear across Nigeria, which kept many people from getting tested or seeking treatment. Traditional public health messaging was often seen as dry, preachy or fear-based, which only reinforced the public’s desire to avoid the topic.",
    approach: "We used an entertainment-education model, with focus group data mapping the common cultural misconceptions. As script editor, I made sure clinical truths were woven into dramatic cliffhangers and relatable street dialogue, so viewers could see their own vulnerabilities in the characters without feeling lectured.",
    outcome: "Wetin Dey became a national weekly drama on NTA with a loyal audience: half of its viewers tuned in every week, and more than half could name its five main characters. Evaluations of the wider STOP HIV campaign also found higher awareness of HIV testing centres among the people most exposed to its programs.",
    tools: ["Entertainment-education", "Script editing", "Research"],
    icon: "tv",
    link: { label: "BBC Media Action", href: "https://www.bbc.co.uk/mediaaction" },
    metric: {
      value: "20%",
      label: "of NTA’s audience watched within 3 months of broadcast",
      source: { label: "BBC World Service Trust midline study", href: "https://media-development.comminit.com/content/media-and-behaviour-change-midline-case-study-bbc-world-service-trusts-stop-hiv" },
    },
    mediaLabel: "[ADD IMAGE OR VIDEO: episode still or trailer]",
  },
  {
    slug: "talk-your-own",
    org: "BBC Media Action",
    title: "“Talk Your Own” radio magazine",
    summary: "A flagship weekly governance and accountability program broadcasting across diverse Nigerian networks to amplify grassroots voices.",
    role: "Head of Productions (Nigeria), overseeing the technical assembly, editorial pipeline and grassroots field recording frameworks.",
    result: "Built a platform that connected marginalized communities directly with state actors.",
    // TODO: Eze to confirm or source the infrastructure claims below, and supply a figure for the metric.
    challenge: "Communities across Nigeria faced infrastructure decay, power grid failure and poor management, yet had no safe, structured channel to voice grievances to leadership. Political leaders, in turn, operated with little immediate public oversight.",
    approach: "We built a fast-paced radio magazine blending investigative field reports with studio panels. I directed field crews to record raw town-hall testimonies and brought those recordings into live broadcast rooms, so policymakers had to respond to specific community evidence in real time.",
    outcome: "The show gave communities a direct line to leaders. Local governments responded to problems exposed in its investigative segments, including infrastructure recovery projects.",
    tools: ["Production management", "Governance", "Investigative audio"],
    icon: "radio",
    link: { label: "BBC Media Action", href: "https://www.bbc.co.uk/mediaaction" },
    metric: { value: "[ADD FIGURE]", label: "e.g. listeners, episodes or communities reached" },
    mediaLabel: "[ADD IMAGE OR AUDIO CLIP: recording]",
  },
  {
    slug: "flava",
    org: "BBC Media Action",
    title: "“Flava” youth lifestyle radio",
    summary: "A lifestyle audio format addressing youth reproductive health, economic survival and life choices across Nigeria.",
    role: "Head of Productions, keeping a non-judgmental tone while holding precise dramatic structure to help young listeners remember what they learned.",
    result: "Reached young Nigerians with story-led, non-judgmental content on contraception, pregnancy and peer pressure.",
    challenge: "Adolescents across Nigeria struggled to get accurate reproductive health information because of religious, family and social taboos, leaving many open to peer pressure, unsafe habits and misinformation.",
    approach: "We dropped the textbook lecture style for youth slang, interactive segments and dramatic audio shorts. I applied classic dramatic pacing so stories about relationships and health ended on high-stakes cliffhangers that pushed peers to discuss the choices.",
    outcome: "Independent evaluations of the STOP HIV campaign found that Flava appealed to young listeners across Nigeria, and its cliffhanger stories were built to get peers talking about the choices characters faced.",
    tools: ["Adolescent health", "Behavioral analysis", "Radio production"],
    icon: "radio",
    link: { label: "STOP HIV endline evaluation", href: "https://files.comminit.com/content/media-and-behaviour-change-endline-evaluation-stop-hiv-campaign-nigeria-2005-2008" },
    metric: { value: "[ADD FIGURE]", label: "e.g. listenership from the research report" },
    mediaLabel: "[ADD IMAGE OR AUDIO CLIP: episode]",
  },
  {
    slug: "breakthrough-action",
    org: "Johns Hopkins University CCP",
    title: "Breakthrough ACTION, Nigeria",
    summary: "A national social and behavior change campaign targeting critical improvements in public health.",
    role: "Senior Program Officer (Media), driving media capacity building, broadcast dissemination strategies and journalist training.",
    result: "Trained hundreds of local journalists on reporting public health threats, strengthening risk awareness and access to care.",
    challenge: "Public health threats like tuberculosis and malaria keep claiming lives unnecessarily because of low health-seeking behavior and delayed diagnosis in local communities.",
    approach: "We moved away from standalone media ads to an integrated approach that combined broadcast media with local media capacity building. I designed virtual training programs that equipped working journalists to turn public health updates into impactful reporting.",
    outcome: "The training strengthened how local journalists report on public health threats. It ran alongside community volunteers who engaged more than 16 million people across the project.",
    tools: ["Media capacity building", "SBC strategy", "Public health"],
    icon: "training",
    link: { label: "Johns Hopkins University CCP", href: "https://ccp.jhu.edu/2024/06/05/breakthrough-action-nigeria-closing-transition-sustainability/" },
    metric: {
      value: "16M+",
      label: "community members engaged by 3,100 trained volunteers (project-wide)",
      source: { label: "Johns Hopkins CCP", href: "https://ccp.jhu.edu/2024/06/05/breakthrough-action-nigeria-closing-transition-sustainability/" },
    },
    mediaLabel: "[ADD IMAGE OR VIDEO: journalist training]",
  },
  {
    slug: "compass",
    org: "USAID Nigeria", // TODO: Eze to confirm the lead organization and COMPASS phase
    title: "COMPASS Interactive Radio Instruction",
    summary: "An integrated health and education program to lift primary education quality across focal Nigerian states.",
    role: "Interactive Radio Instruction Consultant, designing curriculum-aligned educational entertainment frameworks for schoolchildren.",
    result: "Brought interactive radio lessons into primary classrooms, turning passive listening into active, respond-aloud learning.",
    challenge: "Rural, resource-constrained primary schools faced large class sizes and a shortage of updated teaching resources, which meant low pupil engagement and weak literacy.",
    approach: "We designed a specialized Interactive Radio Instruction curriculum. I developed audio script templates in which radio characters paused the lesson to prompt students to sing, play games and answer out loud in the classroom.",
    outcome: "Interactive lessons reached primary classrooms in Nasarawa, Kano and Lagos on solar and wind-up radios, which also served as training tools for teachers.",
    tools: ["Educational media", "Interactive radio", "Curriculum design"],
    icon: "education",
    link: { label: "Lifeline Energy: COMPASS", href: "https://www.lifelineenergy.org/project/community-participation-action/" },
    metric: {
      value: "1,500",
      label: "solar and wind-up radios across Nasarawa, Kano and Lagos",
      source: { label: "Lifeline Energy", href: "https://www.lifelineenergy.org/project/community-participation-action/" },
    },
    mediaLabel: "[ADD IMAGE OR VIDEO: classroom radio lesson]",
  },

    {
    slug: "story-story",
    org: "BBC Media Action Nigeria",
    title: "“Story Story: Voices from the Market”",
    summary: "A long-running radio drama that uses a fictional marketplace to teach governance, accountability and voter rights.",
    // TODO: Eze to confirm the years he held this role.
    role: "Head of Productions, mapping story arcs, managing sound design and recording pipelines, and shaping election-sensitization storylines.",
    result: "Part of a drama that ran for more than 13 years and 500 episodes, broadcast across Nigeria and on the BBC World Service.",
    challenge: "Legal statutes, anti-corruption policies and electoral procedures are usually presented in dry, confusing text that feels detached from the lives of everyday market traders and workers.",
    approach: "We set the educational stories inside a fictional, high-stakes motor park and marketplace. I applied high-impact audio editing and cliffhangers involving familiar characters, such as drivers, traders and local union chairmen, so political accountability felt instantly recognizable.",
    outcome: "The show became a trusted staple on national airwaves, recorded on location to feel as true to life as possible, and reached listeners across Nigeria and beyond through the BBC World Service.",
    tools: ["Radio drama", "Voter sensitization", "Audio showrunning"],
    icon: "radio",
    link: { label: "The story of Story Story", href: "https://www.africa.comminit.com/node/9496495" },
    metric: {
      value: "500+",
      label: "episodes over more than 13 years on air",
      source: { label: "BBC Media Action retrospective", href: "https://www.africa.comminit.com/node/9496495" },
    },
    mediaLabel: "[ADD IMAGE OR AUDIO CLIP: Story Story episode]",
  },
];

export const services = [
  { icon: "users", title: "Media capacity building", text: "Journalist training that improves how public health and civic issues are reported." },
  { icon: "megaphone", title: "SBCC strategy", text: "Social and behavior change communication built around what audiences think, feel and do." },
  { icon: "clapper", title: "Radio and TV script editing", text: "Entertainment-education storylines that carry accurate facts without losing the drama." },
  { icon: "campaign", title: "Campaign management", text: "End-to-end management of media-based campaigns, from concept to nationwide broadcast." },
  { icon: "news", title: "Public health media relations", text: "Trusted relationships between health programs, broadcasters and the press." },
  { icon: "mic", title: "Audio and visual production", text: "High-impact production management across radio, television and field recording." },
] as const;

export const testimonial = {
  quote:
    "Eze’s unique ability to blend the artistic structural foundations of classic Nigerian theatre with modern behavioral science makes him one of the most effective media strategists in West Africa today.",
  attribution: "Senior Technical Advisor, Social and Behavior Change Project Frameworks",
  // TODO: replace with a named person, and get their permission, before launch.
};

export const mediaSlots = [
  { kind: "video", title: "On screen", text: "Episode clips, trailers and campaign spots.", label: "[ADD VIDEO LINK OR EMBED]" },
  { kind: "audio", title: "On air", text: "Radio episodes and community dialogue recordings.", label: "[ADD AUDIO CLIP]" },
  { kind: "press", title: "In print", text: "Articles, studies and project insights featuring his work.", label: "[ADD PRESS OR RESEARCH LINK]" },
] as const;
