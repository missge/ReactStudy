//�������֮��Ĵ���
// ��һ��д��
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
// �ڶ���д��
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
const element =<Welcome name="Sara"/>;
ReactDOM.render(
  element,
  document.getElementById('root')
)
//�����Hello, Sara


