function formDate(date){
  return date.toLocaleDateString();
}

class Comment extends React.Component{
  render(){
    return (
      <div className="UserInfo">
        <img className="imgBox" src={this.props.author.url}
          alt={this.props.author.name}
          />
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