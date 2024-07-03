import { useSetRecoilState } from "recoil";
import LinkedInTopBarComponentAsync from "./components/LinkedInTopBarRecoilAsync";
import { networkData } from "./store/atomsAsync";
import { useEffect } from "react";
import axios from "axios";
import { RecoilRoot } from "recoil";

function App(){
    return <RecoilRoot><MainApp /></RecoilRoot>
    
}

function MainApp(){
    const setNetworkValues = useSetRecoilState(networkData);
    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/notifications")
            .then(res => {
                console.log(res.data)
                setNetworkValues(res.data)
            })
    }, [])

    return <LinkedInTopBarComponentAsync />
}
export default App;