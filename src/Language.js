import React from 'react';

class Language extends React.Component {
    // Übergeben "props" mit Daten als Argument
    render(){
        return(
            <div className='language-item'>
                <div className="language-name">{this.props.name}</div>
                <img
                className='language-image'
                src={this.props.image}
                />
                <div className="language-introduction">{this.props.introduction}</div>
                </div>
        );
    }
}

export default Language;