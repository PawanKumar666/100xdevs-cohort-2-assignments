import LinkedInTopBarComponent from "./components/LinkedInTopBar"
import { RecoilRoot } from "recoil";
function App() {
  return ( // The component which uses recoil hooks should be enclosed by RecoilRoot
    <RecoilRoot>
    <LinkedInTopBarComponent />
    </RecoilRoot>
  )
}

export default App
