export type Role = {
  company: string;
  title: string;
  start: string;
  end: string | null;
  summary: string;
  url?: string;
};

export const experience: Role[] = [
  {
    company: "Swift ",
    title: "Founder",
    start: "2026",
    end: null,
    summary: "Suite of privacy-first tools for all websurfers.",
    url: "https://swift.cain.codes",
  },
  {
    company: "Freelance",
    title: "Full-stack developer",
    start: "2022",
    end: null,
    summary: "Shipped web apps and internal tools for small teams and startups.",
  },
];

export function formatRolePeriod(role: Role) {
  return role.end ? `${role.start}\u2013${role.end}` : `${role.start}\u2013present`;
}
