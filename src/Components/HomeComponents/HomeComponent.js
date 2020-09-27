import React, {useState, useEffect} from 'react'
import {Redirect, useLocation} from "react-router-dom";
 import HomeComponentNavigator from "./HomeComponentNavigator";
import FirstHome from "./FirstHome";

//I removed HomeComponentNavigator as we now have the permentant one
// removed from line 33

export default function HomeComponent(props) {
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({});
    let currentLocation = useLocation();

    let handleTabSelection = function (location, index) {
        console.log(`In GeneDesign Component; Text: ${location.text}, Path: ${location.path}, Index: ${index}`)
        setNavigateTo({path: location.path, push: true, state: {referrer: currentLocation}})
        setNavigate(true)
    }
    /*<FirstHome/>
    <br/>
    <About/>
*/
    if (navigate) {
        return (<Redirect
            to={{
                pathname: navigateTo.path,
                push: navigateTo.push,
                state: navigateTo.state
            }}
        />)
    }

    return (
<div display={"flex"} position={"relative"}>
<div>
    <FirstHome/>
    </div>

</div>
    )
}