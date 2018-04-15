//父子组件之间的传递
// 第一种写法
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
// 第二种写法
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
const element =<Welcome name="Sara"/>;
ReactDOM.render(
  element,
  document.getElementById('root')
)
//结果：Hello, Sara


