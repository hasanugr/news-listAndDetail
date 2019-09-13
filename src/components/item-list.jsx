import React from 'react';
import Item from '../components/item.jsx';

class ItemList extends React.Component {

  constructor() {
    super();

    this.state = {
      importantNews: [],
      normalNews: [],
      isLoading: true
    }

  }

  componentDidMount () {
    fetch(`http://sandbox.arabamd.com/news`)
      .then(response => response.json())
      .then(data => {
        var newsObj = {
          important: [],
          normal: []
        }
        for (var i = 0 ; i < data.length ; i++) {
          if (data[i].isFeatured) {
            newsObj.important.push(data[i]);
          } else {
            newsObj.normal.push(data[i]);
          }
        }

        this.setState({
          importantNews: newsObj.important,
          normalNews: newsObj.normal,
          isLoading: false
        })
      });
  }

  render () {
    const { isLoading, normalNews, importantNews } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <div className="importantNews">
          <Item news={importantNews} />
        </div>
        <div className="normalNews">
          <Item news={normalNews} />
        </div>
      </div>
    );
  }

}

export default ItemList;
