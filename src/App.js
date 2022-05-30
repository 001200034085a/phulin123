import logo from './logo.svg';
import './App.css';


import FooterApp from './components/lichsu/FooterApp';
import FooterHistory from './components/lichsu/FooterHistory';
// import ContentApp from './components/lichsu/ContentApp';
// import ContentSlide from './components/lichsu/ContentSlide';
import HistoryApp from './components/lichsu/HistoryApp';
import ContentApp from './components/lichsu/ContentApp';
import { ScrollToTop } from './components/lichsu/ScrollToTop';
import SideEffectApp from './components/side_efect_app/SideEffectApp';
import HookApp from './components/Hook-app/HookApp';






import ('https://fonts.googleapis.com/css2?family=Luxurious+Roman&family=Pacifico&display=swap');




function App() {
  return (
    <div>
       <HistoryApp />
        
       <div>
         <ContentApp/>
         <ScrollToTop />
         <FooterApp/>
         <FooterHistory/>
       </div>
    
    </div>
  // <div>
  //   <HookApp />
  // </div>
  );
}

export default App;