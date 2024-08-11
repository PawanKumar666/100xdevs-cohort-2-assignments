
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    // fetch
    axios.get("https://sum-server.100xdevs.com/notifications")
      .then(res => {
        setNetworkCount(res.data)
      })
  }, [])

  return (
    <>
      {/* 
        Navigation Banner Component
        
        This component displays a series of buttons representing different sections of the application.
        Each button shows the corresponding notification count, if any.
        
        Features:
        - Home button (no notification count)
        - My network button (shows "99+" if count is 100 or more)
        - Jobs button (shows job notification count)
        - Messaging button (shows messaging notification count)
        - Notifications button (shows general notification count)
        
        The notification counts are fetched from an external API and stored in the Recoil state.
      */}
      <button>Home</button>
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
