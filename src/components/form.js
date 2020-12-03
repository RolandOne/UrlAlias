import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import axios from 'axios'
const config = require('../config')

class UrlForm extends Component {
  constructor(props) {
    super(props)
    this.state = { success: false, buttonLoading: true, warning: false }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, { name, value }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    console.log(`${this.state.id} ${this.state.originalUrl}`)
    console.log(this.state)
    console.log(process.env)
    axios.post(config.baseurl + '/create', { id: this.state.id, originalUrl: this.state.originalUrl })
      .then(response => {
        this.setState({ success: true })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} warning={this.state.warning} success={this.state.success}>
        <Form.Input fluid label='Url Alias' placeholder='fb' name='id' required onChange={this.handleChange} value={this.state.id} />
        <Form.Input fluid label='Original Url' placeholder='https://facebookcom' name='originalUrl' required onChange={this.handleChange} value={this.state.originalUrl} />

        <Message
          warning
          header='Warning'
          content="Error"
        />

        <Button type='submit' loading={false}>Submit</Button>

        <Message
          success
          header='Success'
          content={`Your url is ${config.baseurl + '/go/' + this.state.id}`}
        />

      </Form >
    )
  }
}

export default UrlForm
