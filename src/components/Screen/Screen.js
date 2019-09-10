import React from "react";

// Styles
import "./Screen.scss";

class Screen extends React.Component {
	state = {
		leftImageHovered: false,
		rightImageHovered: false
	};
	handleImageLeft = () => {
		this.setState({ leftImageHovered: !this.state.leftImageHovered });
		console.log("eee");
	};
	handleImageRight = () => {
		this.setState({ rightImageHovered: !this.state.rightImageHovered });
	};
	render() {
		const { leftImageHovered, rightImageHovered } = this.state;
		const imageLeftStyle = {
			transform: leftImageHovered && "translateX(0px)"
		};
		const imageRightStyle = {
			transform: rightImageHovered && "translateX(-350px)"
		};
		return (
			<div className='Screen'>
				<div className='image-left' style={imageLeftStyle}>
					<img
						src={this.props.imageDesktop && this.props.imageDesktop}
						alt='desktop mockup'
						useMap='#image-map'
					/>
					<map
						name='image-map'
						onClick={evt => {
							evt.preventDefault();
						}}
					>
						<area
							onMouseEnter={this.handleImageLeft}
							onMouseLeave={this.handleImageLeft}
							target=''
							alt=''
							title=''
							href=''
							coords={this.props.imageDesktopCoords}
							shape='poly'
						/>
					</map>
				</div>
				{this.props.imageMobile && (
					<div className='image-right' style={imageRightStyle}>
						<img
							src={this.props.imageMobile && this.props.imageMobile}
							alt='mobile mockup'
							useMap='#image-map-mobile'
						/>
						<map
							name='image-map-mobile'
							onClick={evt => {
								evt.preventDefault();
							}}
						>
							<area
								onMouseEnter={this.handleImageRight}
								onMouseLeave={this.handleImageRight}
								target=''
								alt=''
								title=''
								href=''
								coords={this.props.imageMobileCoords}
								shape='poly'
							/>
						</map>
					</div>
				)}
			</div>
		);
	}
}

export default Screen;
