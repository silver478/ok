import React from 'react'
import HeaderAdmin from './HeaderAdmin'
class Admin extends React.Component{

    render(){
        return(
            <div>
                <HeaderAdmin/>
                Admin panel
                {localStorage.getItem('type')}
            </div>
        )
    }
}
export default Admin