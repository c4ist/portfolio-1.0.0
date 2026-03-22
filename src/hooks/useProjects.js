import { useEffect, useMemo, useState } from 'react';
import { filterFeaturedProjects, projectService } from '../services/projectService';

let projectsCache = null;
let pendingProjectsRequest = null;

const loadProjects = async () => {
  if (projectsCache) {
    return projectsCache;
  }

  if (!pendingProjectsRequest) {
    pendingProjectsRequest = projectService
      .getProjects()
      .then((projects) => {
        projectsCache = projects;
        return projects;
      })
      .finally(() => {
        pendingProjectsRequest = null;
      });
  }

  return pendingProjectsRequest;
};

const useProjects = ({ featuredOnly = false } = {}) => {
  const [projects, setProjects] = useState(projectsCache ?? []);
  const [isLoading, setIsLoading] = useState(!projectsCache);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isSubscribed = true;

    if (projectsCache) {
      setProjects(projectsCache);
      setIsLoading(false);
      return () => {
        isSubscribed = false;
      };
    }

    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const data = await loadProjects();

        if (!isSubscribed) {
          return;
        }

        setProjects(data);
        setError(null);
      } catch (fetchError) {
        if (!isSubscribed) {
          return;
        }

        setError(fetchError);
      } finally {
        if (isSubscribed) {
          setIsLoading(false);
        }
      }
    };

    fetchProjects();

    return () => {
      isSubscribed = false;
    };
  }, []);

  const filteredProjects = useMemo(
    () => (featuredOnly ? filterFeaturedProjects(projects) : projects),
    [featuredOnly, projects],
  );

  return {
    projects: filteredProjects,
    isLoading,
    error,
  };
};

export default useProjects;
