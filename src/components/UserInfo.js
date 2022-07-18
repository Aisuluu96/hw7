import Avatar from "./Avatar";
import CommentWrapper from "./CommentWrapper";

const UserInfo = (props) => {
  return (
    <div className="user-info">
      <CommentWrapper>
        <Avatar author={props.author} />
        <div className="Comment-text">{props.text}</div>
      </CommentWrapper>
    </div>
  );
};
export default UserInfo;
