import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import axios from 'axios'
const config = require('../config')

class UrlForm extends Component {
  constructor(props) {
    super(props)
    this.state = { success: false, buttonLoading: true, warning: false, U2A: true }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitCreate = this.handleSubmitCreate.bind(this);
    this.handleSubmitDecode = this.handleSubmitDecode.bind(this);
    this.toggleU2A = this.toggleU2A.bind(this);
    this.toggleA2U = this.toggleA2U.bind(this);
  }

  handleChange(event, { name, value }) {
    this.setState({ [name]: value });
  }

  toggleU2A(event) {
    console.log('toggleU2A')
    this.setState({ U2A: true, success: false, warning: false, id: '', originalUrl: '' });
  }

  toggleA2U(event) {
    console.log('toggleA2U')
    this.setState({ U2A: false, success: false, warning: false, id: '', originalUrl: '' })
  }

  handleSubmitCreate(event) {
    this.setState({ success: false, warning: false })
    if (this.state.originalUrl.startsWith('https://') || this.state.originalUrl.startsWith('http://')) {
      axios.get(config.baseurl + `/decode/${this.state.id}`)
        .then(response1 => {
          if (!response1.data) {
            axios.post(config.baseurl + '/create', { id: this.state.id, originalUrl: this.state.originalUrl })
              .then(response2 => {
                this.setState({ success: true })
              })
              .catch(error => {
                console.log(error)
              })
          } else {
            this.setState({ warning: true })
          }
        })
    } else {
      this.setState({ warning: true })
    }
  }

  handleSubmitDecode(event) {
    this.setState({ success: false, warning: false })

    axios.get(config.baseurl + `/decode/${this.state.id}`)
      .then(response => {
        if (response.data.originalUrl) {
          this.setState({ success: true })
          console.log(response)
          this.setState({ originalUrl: response.data.originalUrl })
        } else {
          this.setState({ warning: true })
        }
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
          ? <Form onSubmit={this.handleSubmitCreate} warning={this.state.warning} success={this.state.success}>
            <Form.Input fluid label='Original Url' placeholder='https://facebook.com' name='originalUrl' required onChange={this.handleChange} value={this.state.originalUrl} />
            <Form.Input fluid label='Url Alias' placeholder='fb' name='id' required onChange={this.handleChange} value={this.state.id} />
            <Message warning header='Warning' content="Alias already taken or Entered Url doesnt start with https:// or http://" />
            <Button type='submit' loading={false}>Generate Alias Url</Button>
            <Message success>Success! this is your Alias Url <a href={`${config.baseurl + '/go/' + this.state.id}`} target="_blank">{`${config.baseurl + '/go/' + this.state.id}`}</a> </Message>
          </Form >
          : <Form onSubmit={this.handleSubmitDecode} warning={this.state.warning} success={this.state.success} error={this.state.warning}>
            <Form.Input fluid label='Url Alias' placeholder='fb' name='id' required onChange={this.handleChange} value={this.state.id} />
            <Button type='submit' loading={false}>Decode Alias Url</Button>
            <Message success> Success! this is the Original Url <a href={`${this.state.originalUrl}`} target="_blank">{`${this.state.originalUrl}`}</a> </Message>
            <Message error header='Error' content="Alias doesnt exist" />
          </Form>}

        </>
      </>
    )
  }
}

export default UrlForm
