import React from 'react';

import ItemList from '../components/item-list.jsx';

class ListPage extends React.Component {
  
  render () {
    return (
      <div>
        <h1 className="page-title">Bunu Responsive Yap</h1>
        <span className="page-desc">Sayfadaki hiyerarşiyi korumaya dikkat et.</span>
        <ItemList />
      </div>
    );
  }
}

export default ListPage;
