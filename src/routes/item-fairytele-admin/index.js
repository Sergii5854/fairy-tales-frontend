import React, {Component} from 'react';
import Header from './../../components/header/'
import ItemFairytele from './../../components/item-fairytales/'
import axios from 'axios'

class itemFairytelAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    componentDidMount () {
    console.log(this.props.match.params.id);
      axios.get(`https://tales-server.herokuapp.com/api/v1/fairytales/${this.props.match.params.id}`)
          .then(response => {
              let data = response.data['fairytales']
              let dataALL = data
                  .map(({id, name,text,audioUrl}) => {
                      const res = {
                          'id': Number(id),
                          'name': name,
                          'text': text,
                          'audioUrl':audioUrl
                      };

                      return res;
                  });
              this.setState({
                  data: dataALL
              })

          })
    }
    render(){

        let {data} = this.state;

        if (!this.state.data.length) {
            return 'Loading...';
        }
        console.log(this.state.data, "state2");

        return(
        <div>
            <Header
                title="Казки дитинства"
                subTitle=""
                background="#dc76276b"
            />
            <ItemFairytele

                name={this.state.data[0].name}
                text={this.state.data[0].text}
                audioUrl={this.state.data[0].audioUrl}
                id={this.state.data[0].id}
            />
        </div>
    )
  }
};

export default itemFairytelAdmin;
