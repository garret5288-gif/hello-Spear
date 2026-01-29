import NewProject from "./Components/NewProject";
import ProjectSidebar from "./Components/ProjectsSidebar";

function App() {
  return (
    <main className='h-screen my-8 flex'>
      <ProjectSidebar />
      <NewProject />
    </main>
    );
}

export default App;
