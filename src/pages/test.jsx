import React from 'react';

// попытка при клике на "оплату", отправлять на почту объект со всеми данными из корзины
export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: 'study.andrverh@mail.ru' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  <div>
    
  	<form className="test-mailing">
    	<h1>Let's see if it works</h1>
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Post some lorem ipsum here"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
  
      </div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
    </form>
    
    </div>
     
  )
 
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit (event) {
    const templateId = 'template_7gwo6kq';
  
    return this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    }
  
    sendFeedback (templateId, variables) {
    window.emailjs.send(
      'service_vrtvoy5', templateId, {
        message: this.state.feedback,
      }
      ).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
  }
  