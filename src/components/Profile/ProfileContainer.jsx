import { useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUsersProfile } from '../../redux/profileReducer';
import Profile from './Profile';


export function withRouter(Children) {
   
   return (props) => {
      console.log(props)
      const match = { params: useParams() };
      return <Children {...props} match={match} />
   }
}

class ProfileContainer extends React.Component {

   componentDidMount() {
      console.log(this.props)
      let userId = this.props.match.params.userId;
      console.log(userId);
      if (!userId) { userId = 2 }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
         .then(response => {
            this.props.setUsersProfile(response.data);
         });
   }
   render() {
      return (
         <Profile {...this.props}
            profile={this.props.profile} />
      )
   }
};
const mapStateToProps = (state) => ({
   profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, { setUsersProfile })(WithUrlDataContainerComponent);
