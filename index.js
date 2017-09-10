let type = true;

module.exports = {
	onClick: function(click, block, status){
		type = !type;
	},
	render: function(block, status){
		return new Promise((resolve, reject) => {
			if(type){
				resolve({
					text: "   "+new Date().toLocaleTimeString() + " "
				});
			} else {
				resolve({
					text: "   "+new Date().toLocaleDateString() + " "
				});
			}
		});
	},
};

