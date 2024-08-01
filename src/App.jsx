import { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import NewProject from './components/NewProject.jsx';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((pState) => {
      return {
        ...pState,
        selectedProjectId: null,
      };
    });
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar onStartAddProject={handleStartAddProject}></Sidebar>
        {content}
      </main>
    </>
  );
}

export default App;
