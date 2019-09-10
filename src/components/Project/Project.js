import React from "react";
import Screen from "../Screen/Screen";
import Title from "../Title/Title";
import Colors from "../Colors/Colors";
import Fonts from "../Fonts/Fonts";
import Tools from "../Tools/Tools";
import { connect } from "react-redux";

// Styles
import "./Project.scss";

class Project extends React.Component {
	render() {
		const { selectedProject } = this.props;
		const height = -89;
		const projectStyles = {
			transform: `translateY(${height * (selectedProject - 1)}vh)`
		};
		return (
			<div className='Project' style={projectStyles}>
				<Title title={this.props.title} />
				<div className='link'>{this.props.link}</div>
				<Screen
					imageMobile={this.props.imageMobile}
					imageDesktop={this.props.imageDesktop}
					imageDesktopCoords={this.props.imageDesktopCoords}
					imageMobileCoords={this.props.imageMobileCoords}
				/>
				<Colors colors={this.props.colors} />
				<div className='tools-and-fonts'>
					<Fonts fonts={this.props.fonts} />
					<Tools tools={this.props.tools} />
				</div>
			</div>
		);
	}
}
const mapStateToProps = ({ navigationState: { selectedProject } }) => ({
	selectedProject
});

export default connect(
	mapStateToProps,
	null
)(Project);
