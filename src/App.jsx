import Sidebar from './components/Sidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar></Sidebar>
        {/*<NewProject></NewProject>*/}
        <NoProjectSelected></NoProjectSelected>
      </main>
    </>
  );
}

export default App;
