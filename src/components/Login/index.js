// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'

const username = 'rahul'
const password = 'rahul@2021'

class Login extends Component {
  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitForm = async event => {
    console.log('on submit form function got super hit---------------')
    event.preventDefault()
    const apiUrl = `https://apis.ccbp.in/login`
    const userDetails = {username, password}
    console.log(userDetails)
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    const data = await response.json()
    console.log(data, '--------------------data-------------')
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      console.log(data.error_msg, '-----------------------')
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <form className="form_container" onSubmit={this.onSubmitForm}>
        <h1 className="form_heading">Please Login</h1>
        <div>
          <button type="submit" className="loginForm_button">
            Login with Sample Creds
          </button>
        </div>
      </form>
    )
  }
}

export default Login
