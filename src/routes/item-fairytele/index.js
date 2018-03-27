import React, {Component} from 'react';
import Header from './../../components/header/'
import ItemFairytele from './../../components/item-fairytales/'
import axios from 'axios'

class itemFairytel extends Component {
    componentDidMount () {
    console.log(this.props.match.params.id);
      axios.get(`https://tales-server.herokuapp.com/api/v1/fairytales/${this.props.match.params.id}`)
          .then(response => {
              let data = response.data['fairytales']
              console.log(data);
          })
    }
    render(){
    return(
        <div>
            <Header
                title="Казки дитинства"
                subTitle=""
                background="#ee76276b"
            />
            <ItemFairytele
            />
        </div>
    )
  }
};

export default itemFairytel;
