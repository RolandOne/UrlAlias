import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import axios from 'axios'
const config = require('../config')

class UrlForm extends Component {
  constructor(props) {
    super(props)
    this.state = { success: false, buttonLoading: true, warning: false, U2A: true }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleU2A = this.toggleU2A.bind(this);
    this.toggleA2U = this.toggleA2U.bind(this);
  }

  handleChange(event, { name, value }) {
    this.setState({ [name]: value });
  }

  toggleU2A(event) {
    console.log('toggleU2A')
    this.setState({ U2A: true })
  }

  toggleA2U(event) {
    console.log('toggleA2U')
    this.setState({ U2A: false })
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
      <>
        <Button.Group size='large'>
          <Button onClick={this.toggleU2A}>Create Alias</Button>
          <Button.Or />
          <Button onClick={this.toggleA2U}>Decode Alias</Button>
        </Button.Group>
        <>{this.state.U2A
          ? <Form onSubmit={this.handleSubmit} warning={this.state.warning} success={this.state.success}>
            <Form.Input fluid label='Original Url' placeholder='https://facebookcom' name='originalUrl' required onChange={this.handleChange} value={this.state.originalUrl} />
            <Form.Input fluid label='Url Alias' placeholder='fb' name='id' required onChange={this.handleChange} value={this.state.id} />

            <Message
              warning
              header='Warning'
              content="Error"
            />

            <Button type='submit' loading={false}>Generate Alias Url</Button>

            <Message
              success
              header='Success this is your Alias Url'
            ><a href={`${config.baseurl + '/go/' + this.state.id}`} target="_blank">{`${config.baseurl + '/go/' + this.state.id}`}</a>
            </Message>

          </Form >
          : <>
            <Form.Input fluid label='Url Alias' placeholder='fb' name='id' required onChange={this.handleChange} value={this.state.id} />
            <Button type='submit' loading={false}>Decode Alias Url</Button>
          </>}

        </>
      </>
    )
  }
}

export default UrlForm
