
import $ from 'libs/jquery/dist/jquery.min';
import snabbt from 'snabbt.js';

var ele = $('#is-this-you');

const roles = ['a developer','a community organizer', 'a graphic-designer', 'a facillitator', 'a project-manager', 'a goverment representative', 'a student', 'an ally', 'curious about Code For Denver', 'a technical writer'] ;

var randomRole = () => {
	return roles[0 | Math.random() * roles.length];
}

var insertRoleText = () => {
	let role = randomRole();
	let template = `<span id="underline"
					class="label label-default
					extra-top-margin">${role}</span>?`;
	ele.html(template);
};

var animateRole = () => {
	 snabbt(ele, {
		position: [0,-200,0],
		easing: (val) => Math.sin(Math.PI * val),
		loop: 1,
		delay: 3000,
		callback: () => {
			insertRoleText();
			animateRole();
		}
	});
};

animateRole();

export default {};