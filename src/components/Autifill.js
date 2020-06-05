import React from 'react'
import { GoogleComponent } from "react-google-location";
class Autofill extends React.Component{

    render(){
        return(
<div>
<GoogleComponent
          apiKey={"AIzaSyB8BvbZp0i7LZw4mbhDiRKdbjYH_BZfM_c"}
          language={"en"}
          country={"country:pk"}
          coordinates={true}></GoogleComponent>
</div>

        )
    }
}
export default Autofill