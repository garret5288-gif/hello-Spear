import { useState } from "react";

import NewProject from "./Components/NewProject.jsx";
import ProjectSidebar from "./Components/ProjectsSidebar.jsx";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
       setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = { 
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId 
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask() {}

  function handleSelectProject(id) {
  setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleStartAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null, 
    }));
  }

  function handleCancelProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined, // return to NoProjectSelected
    }));
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = { ...projectData, id: projectId };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(project =>  project.id === projectsState.selectedProjectId);

  let content = (
    <SelectedProject 
    project={selectedProject} 
    onDelete={handleDeleteProject} 
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectsState.tasks}
     />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartAddProject={handleStartAddProject} />
    );
  } else {
    content = <p className="m-4">Project details go here.</p>;
  }

  return (
    <main className="h-screen my-8 flex">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
