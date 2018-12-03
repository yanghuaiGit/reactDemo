import React, {Component} from 'react'



class RequestView extends Component {
  constructor(props) {
    super(props)
    this.state = {users: []}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    let initHeaders = new Headers()
    initHeaders.append('Accept', 'application/json, text/plain, */*')
    initHeaders.append('Cache-Control', 'no-cache')
    initHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

    
  const init={
    method: 'POST',
    headers: initHeaders,
    
  }

  

    fetch(
      'http://localhost:9099/WxOrder/OrderSave1/3',
      init
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({users: data.result.Order})
      })
      .catch(e => console.log('错误:', e))
  }

  render() {
    return (
      <div>
        <input   type="button" value="点击 http-get 方式获取数据" onClickCapture={this.handleClick} />
        {this.state.users.map((item, index) => (
             <li key={index.toString()}>{item.orderbillId}</li>
           ))}
        {/* <ul>
          {this.state.users
           &&
           <div>{this.state.users}</div>
            // this.state.users.result.Order.map((item, index) => (
           //   <li key={index.toString()}>{item.orderbillId}</li>
          //  ))
            }
        </ul> */}
      </div>
    )
  }
}

export default RequestView