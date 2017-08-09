import React from "react";
import "./Hours.css";
const Hours = () =>
<div>
	<div className="Hours-content">
		<div className="Hours-montothu">
			<strong>Mon - Thu</strong><p />
			<p>11:30am – 10:30pm</p>
		</div>
		<div className="Hours-fri">
			<strong>Fri</strong><p />
			<p>11:30 – 15:30pm</p>
		</div>
		<div className="Hours-sat">
			<strong>Sat</strong><p />
			<p>closed</p>
		</div>
	</div>
	<span className="Hours-disclaimer"> <span className="Hours-disclaimerstar">*</span>Last seating 30 minutes prior to closing </span>
	</div>;

export default Hours;
