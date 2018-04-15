function formDate(date){
  return date.toLocaleDateString();
}
class Avatar extends React.Component{
  render(){
    return(
       <img className="imgBox" src={this.props.user.url}
          alt={this.props.user.name}
          />
    )
  }
}
class Comment extends React.Component{
  render(){
    return (
      <div className="UserInfo">
        <!--<img className="imgBox" src={this.props.author.url}
          alt={this.props.author.name}
          />-->
<!-- user  所以子组件的值写的时候是this.props.user.url-->
         < Avatar user={this.props.author}/>
        <div>
          {this.props.text}
        </div>
        <div>
            {formDate(this.props.date)}
          </div>
       </div>
    )
  }
}


const comment ={
  date:new Date(),
  text:'hha hah',
  author:{
    name:'hello,kitty',
    url:'http://placekitten.com/g/64/64'
  }
}

ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
    
    />
  ,
  document.getElementById('root')

)