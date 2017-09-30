import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Icon, Checkbox } from 'antd';
import authLogin from 'actions/login';
import  './login.less';

const FormItem = Form.Item;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.authLogin(values,() => {
          window.location.href = '/';
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return(
      <div id="login_page">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('pwd', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authInfo: state.authInfo
  };
};
export default connect(
  mapStateToProps,
  {
    authLogin
  }
)(Form.create()(LoginForm));
