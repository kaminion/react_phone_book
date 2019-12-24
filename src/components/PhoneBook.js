import React, {Component} from 'react';


class PhoneBook extends Component
{
    input = React.createRef();

    state = {
        name : "",
        phoneNum : ""
    };

    handleChange = (e) =>
    {
        this.setState({[e.target.name] : e.target.value});
    };

    handleSubmit = (e) =>
    {
        e.preventDefault();
        this.props.onCreate(this.state);

        this.setState({name:"", phoneNum : ""});

        this.input.current.focus();
    }


    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="name" 
                placeholder="이름"
                onChange={this.handleChange} 
                value={this.state.name} 
                ref={ this.input }
                />
                <input name="phoneNum" 
                placeholder="전화번호"
                onChange={this.handleChange} 
                value={this.state.phoneNum}
                />
            <button type="submit">등록</button>
            <p>{this.state.name} {this.state.phoneNum}</p>
            </form>
        );
    }

}

export default PhoneBook;
