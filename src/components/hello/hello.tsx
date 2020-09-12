import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './hello.css';
import { greeting } from '../../portfolio';
import Social from '../../components/social/social';

function Hello() {
	return (
		<Fade direction="up" duration={800} triggerOnce>
		<section className="section section--hello">
			<div className="inner">

				<div className="wrapper">
					<div className="text-title">
						{greeting.title}&nbsp;
						<span className="hello-emoji">👋</span>
					</div>
					<div className="text-subtitle">
						<span>{greeting.subTitle}</span>
					</div>
					<Social />
				</div>

				<div className="image-div">
				<img
					src={require("../../assets/web-developer-color.svg")}
					alt="programmer ekalii"
				/>
				</div>

			</div>
		</section>
		</Fade>
	);
}
export default Hello;