import React from 'react';
import {  Button, ButtonGroup, TextBox, DropdownMenu, DropdownItem } from 'reactstrap';
var axios = require('axios');
import ReactJson from 'react-json-view'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            id: "",
            response: {}
        };
    }

    toggle() {
        this.setState({
        });
    }

    getAllMethod(){
        axios.get("/invoices")
            .then((response)=>{
                this.setState({id:this.state.id, response: response})
            });
    }

    getMethod(id){
        axios.get("/invoice/" + id)
            .then((response)=>{
                this.setState({id:this.state.id, response: response})
            });
    }

    postMethod(id){
        if(id === null || id === ""){
            axios.post("/invoice")
                .then((response)=>{
                    this.setState({id:this.state.id, response: response})
                });
        }else {
            axios.post("/invoice/" + id)
                .then((response) => {
                    this.setState({id: this.state.id, response: response})
                });
        }
    }

    deleteMethod(id){
        axios.delete("/invoice/" + id)
            .then((response)=>{
                this.setState({id:this.state.id, response: response})
            });
    }

    render() {
        return (
            <div>
                <Button onClick={()=>this.getAllMethod()}>GET ALL</Button>
                <ButtonGroup>
                    <Button onClick={()=>this.getMethod(this.state.id)}>GET</Button>
                    <Button>POST</Button>
                    <Button onClick={()=>this.deleteMethod(this.state.id)}>DELETE</Button>
                </ButtonGroup>
                <input value={this.state.id} onChange={(change => this.setState({id: change.target.value}))}/>
                <ReactJson src={response} onEdit={(edit)=> {
                    this.setState({id: this.state.id, response: edit})
                    console.log(edit)
                }} onAdd={(add)=>console.log(add)}/>
            </div>
        );
    }
}