import React, {Component, Fragment} from 'react';


class PhoneInfo extends Component
{

    state = {
        editing: false,
        name: '',
        phoneNum: ''
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        // 기본적으로는 return true
        if(this.state !== nextState)
        {
            return true;
        }
        return this.props.info !== nextProps.info;
    }

    handleRemove = () => {
        const {info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        //true -> false
            // on update
        // false -> true
            //state에 info값

        const { info, onUpdate } = this.props;

        if(this.state.editing)
        {
            onUpdate(info.id, {
                name: this.state.name,
                phoneNum: this.state.phoneNum
            });
        }else{
            this.setState({
                name: info.name,
                phoneNum: info.phoneNum
            });
        }

        this.setState({
            editing:!this.state.editing
        });
    }

    handleChange = (e) => 
    {
        this.setState({[e.target.name]: e.target.value});

    }

    render()
    {
        const { name, phoneNum } = this.props.info;
        const { editing }  = this.state;
        
        const style = {
            border : '1px solid black',
            padding: '8px',
            margin: '8px'
        };
        
        console.log(name);

        return (
            <div style={style}>
            {
                editing ? (
                    <Fragment>
                        <div>
                            <input
                                name="name" 
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                        </div>
                        <div>
                            <input 
                                name="phoneNum"
                                onChange={this.handleChange} 
                                value={this.state.phoneNum}
                            />
                        </div>
                    </Fragment>
                ) :
                (
                    <Fragment>
                        <div><b>{name}</b></div>
                        <div>{phoneNum}</div>
                    </Fragment>
                )
            }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>{editing ? "적용" : "수정"}</button>
            </div>
        );
    }
}

export default PhoneInfo;