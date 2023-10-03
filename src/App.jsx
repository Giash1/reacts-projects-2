
import './App.css'
import NavigationContact from './components/NavigationContact/NavigationContact'
import HeaderContact from './components/HeaderContact/HeaderContact';
import SupportContact from './components/SupportContact/SupportContact'

function App() {

  return (
      <div>
<NavigationContact/>
          <main className="container-main">
              <HeaderContact />
              <SupportContact/>
          </main>
      </div>
  )


}

export default App;
