import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component
{
    render()
    {
        const { data, onRemove, onUpdate } = this.props;

        if(!data) return null;

        const list = data.map(
            info => 
            <PhoneInfo key={info.id} 
            info={info} 
            onRemove={onRemove}
            onUpdate={onUpdate}
            />
            )

        return (
            <div>
                {list}
            </div>
        );
    }

}




export default PhoneInfoList;