import React from 'react';
import { Link } from "react-router-dom";


class Item extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      news: props.news
    }
  }

  render() {
    return (
      <div>
      {
        this.state.news.map(newItem => 
          <div key={newItem.id} className="item">
            <Link to={`/detail?id=${newItem.id}`} >
              <div className="item-imageField">
                <img src={newItem.image} />
              </div>
              <div className="item-textField">
                <strong className="item-textTitle">{newItem.title}</strong>
                <span className="item-textDescription">{newItem.snippet}</span>
              </div>
            </Link>
          </div>
          )
        }
      </div>
    );
  }
}

export default Item;
