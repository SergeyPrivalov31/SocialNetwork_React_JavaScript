import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, savePhoto, saveProfile, updateStatus } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";

class ProfileContainer extends React.Component {
	refreshProfile() {
		let userId = this.props.match.params.userId;// match взялся благодаря withRouter (коннектит к url)
		if (!userId) {
			userId = this.props.authorizedUserId;// authorizedUserId взялся благодаря connect (коннектит к стору)
			if (!userId) { this.props.history.push("/login") }
		}
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile();
		}
	}

	render() {

		return (
			<div>
				<Profile {...this.props}
					isOwner={!this.props.match.params.userId}
					profile={this.props.profile}
					status={this.props.status}
					updateStatus={this.props.updateStatus}
					savePhoto={this.props.savePhoto}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
});

export default compose(
	connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto, saveProfile }),
	withRouter,
	/*withAuthRedirect*/
)(ProfileContainer);