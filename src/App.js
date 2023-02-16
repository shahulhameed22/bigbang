import logo from './logo.svg';
import './App.css';
import { Header } from './component/header/header';
import { Banner } from './component/banner/banner';
import { About } from './component/about/about';
import { Project } from './component/projects/project';
import { Gallery } from './component/gallery/gallery';
import { Testimonial } from './component/testimonials/testimonials';
import { Footer } from './component/footer/footer';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Contact } from './component/contact/contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Header/>,<Banner/>,<About/>,<Project/>,<Gallery/>,<Testimonial/>,<Contact/>,<Footer/>]}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
