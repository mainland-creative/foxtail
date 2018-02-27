import axios from 'axios'
import React, { Component } from 'react'
import Radium from 'radium'

import ArrowGrey from './gallery_more.png'
import ArrowBlack from'./gallery_more_black.png'

class ContactContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      label: this.props.label,
      message: this.props.message,
      arrow: ArrowGrey,
      body: '',
      email: '',
      name: '',
      subject: ''
    }

    this.changeArrowToBlack = this.changeArrowToBlack.bind(this)
    this.changeArrowToGrey = this.changeArrowToGrey.bind(this)
    this.handleChangeBody = this.handleChangeBody.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeSubject = this.handleChangeSubject.bind(this)
    this.submit = this.submit.bind(this)
  }

  changeArrowToGrey () {
    this.setState({ arrow: ArrowGrey })
  }

  changeArrowToBlack () {
    this.setState({ arrow: ArrowBlack })
  }

  async submit () {
    const validatedFields = ['name', 'email', 'subject', 'body'].filter((field) => {
      if (this.state[field].length <= 0) return true
    })

    if (validatedFields.length > 0) {
      this.setState({ formError: "Please complete the form fields before submission." })
      this.deferStateFieldRemoval('formError', 3000)
      return
    }

    const { body, email, name, subject } = this.state
    const payload = { message: body, email, name, subject }
    const resp = await axios.post('https://foxtailapi-dhwcqoxfuf.now.sh/email', payload)

    if (resp.status >= 200) {
      this.clearForm('Thanks! We\'ll be in touch.')
    } else {
      this.setState({ formError: "Something went wrong, please try again." })
      this.deferStateFieldRemoval('formError', 3000)
      return
    }
  }

  clearForm (message) {
    this.setState({ body: '', email: '', name: '', subject: '' })
    this.inputName.value = ""
    this.inputEmail.value = ""
    this.inputSubject.value = ""
    this.inputMessage.value = ""
    if (message) {
      this.setState({ formError: message })
      this.deferStateFieldRemoval('formError', 3000)
    }
  }

  deferStateFieldRemoval (field, time) {
    setTimeout(() => {
      this.setState({ [field]: null})
    }, time)
  }

  handleChangeBody (e) {
    this.setState({ body: e.target.value })
  }

  handleChangeEmail (e) {
    this.setState({ email: e.target.value })
  }

  handleChangeName (e) {
    this.setState({ name: e.target.value })
  }

  handleChangeSubject (e) {
    this.setState({ subject: e.target.value })
  }

  renderMessage () {
    const style = {
      message: {
        position: 'absolute',
        paddingLeft: '55px',
        paddingTop: '80px',
        zIndex: '1000'
      }
    }
    if (!this.state.formError) return null

    return (
      <div style={style.message}>
        {this.state.formError}
      </div>
    )
  }

  render () {
    const style = {
      container: {
        display: "flex",
        height: this.props.top ? "585px" : "650px",
        paddingTop:  this.props.top ? "65px" : "0px",
      },
      textItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#E9DCDB",
      },
      textLabel: {
        display: "flex",
        fontSize: "34px",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      textMessage: {
        fontSize: "18px",
        flex: 2,
        padding: "0 36px 0 36px"
      },
      formItem: {
        display: "flex",
        flex: 2,
        flexDirection: "column"
      },
      nameInput: {
        display: "flex",
        flexDirection: "column",
        height: "20%",
        zIndex: 1000
      },
      flexRow: {
        display: "flex",
        height: "50%",
        fontSize: "18px",
        color: "#999999"
      },
      flexRowItem: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
      },
      textArea: {
        height: "95%",
        width: "560px",
        marginLeft: "40px",
        fontSize: "18px",
        color: "#999999",
        resize: "none",
        outline: "none"
      },
      label: {
        textAlign: "left"
      },
      input: {
        border: "none",
        fontSize: "25px",
        outline: "none",
        boxShadow: "0 2px 0 #999999"
      },
      submit: {
        cursor: "pointer",
        marginLeft: "35px",
        ':hover': {
          color: "black"
        }
      }
    }

    return (
      <div style={style.container}>
        <div style={style.textItem}>
          <div style={style.textLabel}>{this.state.label}</div>
          <div style={style.textMessage}>{this.state.message}</div>
        </div>
        <div style={style.formItem}>
          {this.renderMessage()}
          <div style={style.flexRowItem}>
            <div style={{ ...style.flexRow, alignItems: "flex-end" }}>
              <div style={{ ...style.nameInput, paddingLeft: "60px", paddingRight: "40px" }}>
                <span style={style.label}>Name</span>
                <input ref={el => this.inputName = el} onChange={this.handleChangeName} style={style.input} type="text"/>
              </div>
              <div style={style.nameInput}>
                <span style={style.label}>Email</span>
                <input ref={el => this.inputEmail = el} onChange={this.handleChangeEmail} style={style.input} type="text"/>
              </div>
            </div>
            <div style={{ ...style.flexRow, alignItems: "center" }}>
              <div style={{ ...style.nameInput, paddingLeft: "60px" }}>
                <span style={style.label}>Subject</span>
                <input ref={el => this.inputSubject = el}onChange={this.handleChangeSubject} style={style.input} type="text"/>
              </div>
            </div>
          </div>
          <div style={style.flexRowItem}>
            <div style={{ ...style.flexRow, alignItems: "flex-end", height: "100%", marginBottom: "70px" }}>
              <textarea ref={el => this.inputMessage = el} style={style.textArea} placeholder="Message" onChange={this.handleChangeBody}/>
              <div onClick={this.submit} style={style.submit} onMouseEnter={this.changeArrowToBlack} onMouseLeave={this.changeArrowToGrey}>
                <span style={style.label}>Submit</span>
                <img style={{ marginBottom: "-8px", marginLeft: "20px" }}src={this.state.arrow} alt="arrow"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(ContactContainer)
