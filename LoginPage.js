import React from 'react';
import Card from '@material-ui/core/Card';
import './LoginPage.css';
import '../_css/bootstrap.min.css'

class LoginPage extends React.Component {
    state = {
        username: '',
        password: '',
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value, });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        console.log(username + ' ' + password);
    }


    render() {
        return (
            
            <div align="center" >
                <img alt="Remy Sharp" src="http://clinikk.com/resources/images/logo_white.png" className="clinikkLogo" />
                <div>
                    <form onSubmit={this.onFormSubmit}>
                    <Card className="cardStyle">
                        <div>
                            <label htmlFor="username">Username</label>
                            <input
                                align="center"
                                className="form-group"
                                type="email"
                                value={this.state.username}
                                style={{ margin: 10, }}
                                name="username"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                className="form-group"
                                value={this.state.password}
                                type="password"
                                style={{ margin: 10, }}
                                name="password"
                                onChange={this.handleChange}
                            />
                        </div>
                        
                        <button className="form-group btn btn-primary" >
                            Submit
                        </button>
                        </Card>
                    </form>
                </div>
            </div>
            
        );
    };
}
export default LoginPage;
