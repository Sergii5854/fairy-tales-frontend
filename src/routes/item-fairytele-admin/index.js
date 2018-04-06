import React, {Component} from 'react';
import Header from './../../components/header/'
import ItemFaIrytailesAdmin from './../../components/item-fairytales-admin/'
import axios from 'axios'

class itemFairytelAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        // alert(this.props.match.params.id, " data from admin");
        axios.get(`https://tales-server.herokuapp.com/api/v1/fairytales-admin/${this.props.match.params.id}`)
            .then(response => {
                let data = response.data['fairytales']
                let dataALL = data
                    .map(({id, name, text, audioUrl, imageUrl, lullaby, updateTime, updated}) => {
                        const res = {
                            'id': Number(id),
                            'name': name,
                            'text': text,
                            'audioUrl': audioUrl,
                            'imageUrl': imageUrl,
                            'lullaby': lullaby,
                            'updateTime': updateTime,
                            'updated': updated
                        };

                        return res;
                    });
                this.setState({
                    data: dataALL
                })
            })
    }

    render() {

        let {data} = this.state;

        if (!this.state.data.length) {
            return (
                <div className="loader">

                </div>
            )
        }
        return (
            <div>
                <Header
                    title="Казки дитинства"
                    subTitle=""
                    background="#dc76276b"
                />
                <ItemFaIrytailesAdmin

                    name={this.state.data[0].name}
                    text={this.state.data[0].text}
                    audioUrl={this.state.data[0].audioUrl}
                    id={this.state.data[0].id}
                    imageUrl={this.state.data[0].imageUrl}
                    lullaby={this.state.data[0].lullaby}
                    updateTime={this.state.data[0].updateTime}
                    updated={this.state.data[0].updated}
                />
            </div>
        )
    }
};

export default itemFairytelAdmin;
