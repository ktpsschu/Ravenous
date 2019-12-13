import React from 'react';
import './BussinessList.css';
import { Business } from '../Business/Business';

class BussinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        );
    }
}

export default BussinessList;