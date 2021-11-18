import React from 'react'
import {connect} from "react-redux"


class Google extends React.Component {



    componentDidMount() {
        if(this.props.match.params.token){
             localStorage.setItem("token", JSON.stringify(this.props.match.params.token))
        }

        this.props.history.push('/')
        window.location.reload()
    }

    render() {
        return(
            <div></div>
        )
    }
}

const mapStateToProps = ({productList: {products, loading, error}}) => {
    return {products, loading, error}
}

export default connect(mapStateToProps, null)(Google)







