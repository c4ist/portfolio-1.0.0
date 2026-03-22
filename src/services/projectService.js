import projectRecords from '../data/projects.json';

const normalizeProject = (project, index) => ({
  id: project.id ?? `project-${index + 1}`,
  title: project.title ?? 'Untitled project',
  description: project.description ?? '',
  image: project.image ?? '/assets/projects/portfolio.svg',
  tags: Array.isArray(project.tags) ? project.tags : [],
  link: project.link ?? '',
  repository: project.repository ?? '',
  featured: Boolean(project.featured),
  order: typeof project.order === 'number' ? project.order : index + 1,
});

const normalizedProjects = Object.freeze(
  projectRecords
    .map((project, index) => normalizeProject(project, index))
    .sort((left, right) => left.order - right.order),
);

// Keeping reads behind a service makes swapping JSON for an API straightforward.
export const projectService = {
  async getProjects() {
    return [...normalizedProjects];
  },
};

export const filterFeaturedProjects = (projects) => projects.filter((project) => project.featured);
