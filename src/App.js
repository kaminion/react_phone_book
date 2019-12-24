import React from 'react';
import PhoneBook from './components/PhoneBook';
import PhoneInfoList from './components/PhoneInfoList';

class App extends React.Component {
  
  id = 3;

  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phoneNum: '010-0000-0001'
      },
      {
        id: 1,
        name: '김민준',
        phoneNum: '010-0000-0002'
      },
      {
        id: 2,
        name: '김벨로퍼트',
        phoneNum: '010-0000-0003'
      },
    ],
    keyword: ''
  };

  handleCreate = (data) => {
    const {information} = this.state;

    this.setState({information : information.concat({...data, id:this.id++})})
  };

  handleRemove = (id) => 
  {
    const {information} = this.state;
    this.setState({information:information.filter(info => info.id !== id)})

  };

  handleUpdate = (id, data) =>
  {
    const {information} = this.state;
    this.setState({
      information: information.map( info => { if(info.id === id) {return {id, ...data};} return info;  } )
    })
  };

  handleChange = (e) => 
  {
    this.setState({
      keyword: e.target.value
    });

  };

  render()
  {
    return (
      <div>
        <PhoneBook onCreate={this.handleCreate}/>
        <input
          placeholder="검색..."
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <PhoneInfoList data={this.state.information.filter(info => { return info.name.indexOf(this.state.keyword) > -1 }  ) }
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
  
}

export default App;
