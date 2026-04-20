import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import Value    from './components/Value';
import How      from './components/How';
import Why      from './components/Why';
import Screens  from './components/Screens';
import Demo     from './components/Demo';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Value />
      <How />
      <Why />
      <Screens />
      <Demo />
      <Feedback />
    </div>
  );
}

export default App;