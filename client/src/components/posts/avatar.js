import React, {Component} from 'react'
import {connect} from 'react-redux'
import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator"
import {product} from "../../actions"
import {fetchAvatar} from "../../actions"

const ava = 'https://p.kindpng.com/picc/s/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png'


class Avatar extends Component {

    state = {
        id: 0,
        file: null,
        loading: false
    }

    componentDidMount() {
        this.props.dispatch(product())
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.products.image !== this.props.products.image) {
        }
    }


    onChangeHadler = event => {
        this.setState({file: event.target.files[0]})
    }

    uploadAvatar = async (e) => {
        e.preventDefault()
        const {id} = this.props.products
        const image = new FormData()
        image.append('image', this.state.file)
        image.append('id', id)
        this.props.dispatch(fetchAvatar(image))
        this.loading()
    }

    loading = () => {
        this.setState(prevState => ({
            loading: !prevState.loading}))
    }

    render() {


        const {products, loading, error} = this.props
        const {image} = products

        if (products === undefined) {
            return <Spinner/>
        }
        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return (
            <>
                <div className="bg-secondary rounded-lg p-4 mb-4">
                    <div className="media align-items-center">
                        <img
                            src={image ? image : ava}
                            width={90}
                            alt="Susan Gardner"
                            style={{width: "90px", height: "90px"}}
                        />
                        <div className="media-body pl-3">
                            <input type="file" name="file"
                                   onChange={this.onChangeHadler}/>
                            <button
                                className="btn btn-light btn-shadow btn-sm mb-2"
                                type="file"
                                onClick={this.uploadAvatar}
                            >
                                <i className="czi-loading mr-2"/>
                                Change avatar
                            </button>
                            <div className="p mb-0 font-size-ms text-muted">
                                Upload JPG, GIF or PNG image. 300 x 300 required.
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}


const mapStateToProps = ({productList: {products, loading, error}}) => {
    return {products, loading, error}
}

export default connect(mapStateToProps, null)(Avatar)
