import React, {Component} from 'react';
import Navigation from './Navigation';
import '../stylesheets/App.css';
import SearchBox from './SearchBox';
import Footer from './Footer';
import Feed from './Feed';
import Modal from './Modal';
import Query from '../model/Query';

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentTopic: 'business',
            query: {},
            modal: false
        };
        this.switchTopic = this.switchTopic.bind(this);
        this.processQuery = this.processQuery.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentWillMount() {

    }

    switchTopic(topic) {
        this.setState({currentTopic: topic});
        const query = this.state.query;
        query.category = topic;
        this.setState({query});
    }

    processQuery(query) {
        if (query instanceof Query) {
            this.setState({query});
            console.log(query);
        }
    }

    showModal(article) {
        var x = window.scrollX;
        var y = window.scrollY;
        let top = 0;
        window.onscroll = function (e) {
            window.scrollTo(x, y);
        };
        $('html').off("touchmove");
        $('body').on("mousewheel",function(e, delta) {
            let modal = document.getElementById("modal");
            let previousTop = modal.style.top.substring(0,modal.style.top.indexOf('p'));
            let newTop = (Number(previousTop)+ delta * 40);
            if(delta<0 && -modal.offsetHeight<=modal.offsetTop-window.innerHeight*0.6)
            {
                modal.style.top = newTop +"px";
            }
            else if(delta>0 && modal.offsetTop<window.innerHeight*0.3)
            {
                console.log(modal.offsetTop);
                modal.style.top = newTop +"px";
            }

            modal.style.transition = "top ease-out 0.1s";
            e.preventDefault();
        });

        let lastY;
        $('body').on("touchmove",function(e) {
            var currentY = e.originalEvent.touches[0].clientY;
            let delta;
            let distance;
            if(currentY > lastY){
                delta = 1;
            }else if(currentY < lastY){
                delta = -1;
            }
            distance = currentY - lastY;
            lastY = currentY;
            let modal = document.getElementById("modal");
            modal.style.transition = null;
            let previousTop = modal.style.top.substring(0,modal.style.top.indexOf('p'));
            let newTop = (Number(previousTop)+ distance);
            if(delta<0 && -modal.offsetHeight<=modal.offsetTop-window.innerHeight*0.6)
            {
                modal.style.top = newTop +"px";
            }
            else if(delta>0 && modal.offsetTop<window.innerHeight*0.3)
            {
                console.log(modal.offsetTop);
                modal.style.top = newTop +"px";
            }


            e.preventDefault();
        });

        let work=true;
        this.setState({modal: true});
    }

    hideModal() {
        $('body').off("mousewheel");
        enableScrolling();

        document.getElementById("modal").style.top =null;
        document.getElementById("modal").style.transition = null;
        this.setState({modal: false});
    }

    render() {
        return (
            <div className="App">
                <Navigation switchTopic={this.switchTopic}/>
                <SearchBox processQuery={this.processQuery} topic={this.state.currentTopic}/>
                <Feed query={this.state.query} showModal={this.showModal}/>
                <Footer/>
                <Modal hideModal={this.hideModal} show={this.state.modal}/>
            </div>
        );
    }
}

function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
        window.scrollTo(x, y);
    };
}

function enableScrolling() {
    window.onscroll = function () {
    };
}

export default App;
