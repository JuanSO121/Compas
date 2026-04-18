import Navbar  from './components/Navbar';
import Hero    from './components/Hero';
import Value   from './components/Value';
import How     from './components/How';
import Why     from './components/Why';
import Demo    from './components/Demo';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Value />
      <How />
      <Why />
      <Demo />
      <Contact />
    </div>
  );
}

export default App;