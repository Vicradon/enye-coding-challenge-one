import React from "react";
import { Form, Input, Button, DatePicker } from "antd";
import Table from "./Table";

class NormalLoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      Data: [
        {
          "first name": "Ralph",
          "last name": "Victor",
          "date of birth": "2nd March 2001",
          age: 19,
          hobby: "coding and writing"
        }
      ]
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState(prevState => {
          const newData = [
            {
              "first name": values["first name"],
              "last name": values["last name"],
              "date of birth": values["birthday"]._d.toDateString(),
              age: values["age"],
              hobby: values["hobby"]
            }
          ];
          this.props.form.resetFields();
          return { Data: [...prevState.Data, ...newData] };
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("first name", {
              rules: [
                { required: true, message: "Please enter your first name!" }
              ]
            })(<Input placeholder="First Name" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("last name", {
              rules: [
                { required: true, message: "Please enter your last name!" }
              ]
            })(<Input placeholder="Last Name" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("birthday", {
              rules: [
                { required: true, message: "Please enter your date of birth!" }
              ]
            })(<DatePicker placeholder={"Enter Date of Birth"} />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("age", {
              rules: [{ required: true, message: "Please enter your age!" }]
            })(<Input min="0" type="number" placeholder="Age" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("hobby", {
              rules: [{ required: true, message: "Please enter your hobby!" }]
            })(<Input placeholder="Hobby" />)}
          </Form.Item>
          <Form.Item>
            {
              <div className="submit-button-holder">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Submit
                </Button>
              </div>
            }
          </Form.Item>
        </Form>

        <Table Data={this.state.Data} />
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

const App = () => {
  return (
    <div>
      <WrappedNormalLoginForm />
    </div>
  );
};

export default App;
