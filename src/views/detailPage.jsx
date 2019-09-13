import React from 'react';

class DetailPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      data: {}
    }
  }

  componentDidMount () {
    var urlParams = new URLSearchParams(location.search);
    var storyId = urlParams.get('id');

    fetch(`http://sandbox.arabamd.com/news/${storyId}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render () {
    return (
      <div>
        <h1 className="page-title">Bunu Responsive Yap</h1>
        <span className="page-desc">Sayfadaki hiyerarşiyi korumaya dikkat et.</span>
        <div className="news-imageField">
          <img src={this.state.data.image} />
        </div>
        <h2 className="news-title">{this.state.data.title}</h2>
        <div className="news-description">
          <p>{this.state.data.snippet}</p>
          <div dangerouslySetInnerHTML={{__html: this.state.data.body}} />
        </div>
      </div>
    );
  }
}

export default DetailPage;
