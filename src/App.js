import {GoBell,GoCloudDownload,GoDatabase} from "react-icons/go"
import Button from "./components/Button";

function App(){
    return <div>
        <div><Button primary><GoBell/>Click</Button></div>
        <div><Button secondary rounded><GoCloudDownload/>Click</Button></div>
        <div><Button warning outline><GoDatabase/>Click</Button></div>
        <div><Button danger>Click</Button></div>
        <div><Button success>Click</Button></div>
    </div>
    
}

export default App;