import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import axios from 'axios';
import Thumbnail from './Thumbnail';
import Header from './Header';
import NewAppModal from './NewApp';
import { getAppList, postApp, putApp } from '../api';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            applicationList: [],
            showModal: false,
            appCreationError: null,
            isDesktopApp: false
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.editApp=this.editApp.bind(this);
        this.onCheckBoxChange=this.onCheckBoxChange.bind(this);
        this.triggerDesktopApp=this.triggerDesktopApp.bind(this);
    }
    componentWillMount(){
        getAppList()
             .then((response) => {
                 this.setState({applicationList: response});
             })
             .catch((error) => {
                 console.log(error);
             })
    }
    toggleModal(){
        this.setState({
            showModal: !this.state.showModal,
            appCreationError: null
        })
    }
    onChange(type){
        return (event) => {
            this.setState({
                [type]: event.target.value,
                appCreationError: null
            })
        };
    }
    onCheckBoxChange(){
        this.setState({
            isDesktopApp: !this.state.isDesktopApp
        });
    }
    triggerDesktopApp(command){
        axios.get('http://localhost:4001/test').then(()=>{
        })
    }
    onSubmit(){
        const { displayname, description, linkUrl, iconimage, isDesktopApp } = this.state;
        if (!(displayname && description && linkUrl && iconimage)){
            return this.setState({
                     appCreationError: "All Fields are mandatory"
                 })
        }
        if (this.state._id) {
            return putApp({
            displayname, description, linkUrl, iconimage, isDesktopApp, _id: this.state._id
            })
             .then((response) => {
                 if(response.ok === 1){
                    const applicationList = this.state.applicationList;
                    applicationList.splice(applicationList.indexOf(_.filter(applicationList, {_id: this.state._id})[0]), 1, {displayname, description, linkUrl, iconimage, isDesktopApp, _id: this.state._id});
                    this.setState({
                        applicationList
                    });
                    this.toggleModal();
                 }
             })
             .catch((error) => {
                 this.setState({
                     appCreationError: "Something went wrong. Please try again."
                 })
             })
        }
        return postApp({
            displayname, description, linkUrl, iconimage, isDesktopApp
        }).then((response) => {
                 this.setState({
                     applicationList: [].concat(this.state.applicationList, response)
                 });
                 this.toggleModal();
             })
             .catch((error) => {
                 this.setState({
                     appCreationError: "Something went wrong. Please try again."
                 })
             })
    }
    editApp(appInfo){
        const { displayname, description, linkUrl, iconimage, _id } = appInfo;
        this.setState({
            displayname, description, linkUrl, iconimage, _id
        });
        this.toggleModal();
    }
    render(){
        console.log('***** process.env.USERNAME: ', process.env.USERNAME);
       return (
        <div>
           <Header />
           <div className="row addApp">
             <Button bsStyle="primary" onClick={this.toggleModal}>+ Add</Button>
           </div>
           <div className="container">
                <div className="appBox" >
                        {
                            _.map(this.state.applicationList,(each, index) => {
                                return(<Thumbnail key={index.toString()}
                                    editApp={this.editApp}
                                    appObject = {each}
                                    triggerDesktopApp={this.triggerDesktopApp}                    
                                />);
                            })
                        }
                </div>
           </div>
           <NewAppModal
                showModal={this.state.showModal}
                toggleModal={this.toggleModal}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                appCreationError={this.state.appCreationError}
                displayname={this.state.displayname}
                description={this.state.description}
                linkUrl={this.state.linkUrl}
                iconimage={this.state.iconimage}
                onCheckBoxChange={this.onCheckBoxChange}
                isDesktopApp={this.state.isDesktopApp}
            />
        </div>
       );
    }
}

export default Dashboard;
