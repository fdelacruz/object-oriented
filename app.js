var oojs = (function(oojs) {

	var createToolbarItems = function(itemElements) {
		var items = [];

		[].forEach.call(itemElements, function(el, index, array) {

			var item = {
				el: el,
				disable: function() {
					this.el.classList.add('disabled');
				},
				enable: function() {
					this.el.classList.remove('disabled');
				},
				isDisabled: function() {
					return this.el.classList.contains('disabled');
				},
				activate: function() {
					if (this.isDisabled()) {
						return;
					}

					this.el.classList.add('active');
				},
				deactivate: function() {
					if (this.isDisabled()) {
						return;
					}

					this.el.classList.remove('active');
				},
				isActive: function () {
					return this.el.classList.contains('active');
				},
				toggleActiveState: function() {
					if (this.isActive()) {
						this.deactivate();
					} else {
						this.activate();
					}
				}
			};

			items.push(item);
		});

		return items;
	};

	oojs.createToolbar = function(elementId) {
		var element = document.getElementById(elementId);
		var items = element.querySelectorAll('.toolbar-item');

		return {
			items: createToolbarItems(items)
		};
	};

	return oojs;
}(oojs || {}));


// var toolbar = oojs.createToolbar('myToolbar')
// toolbar.items[0].disable()
// toolbar.items[0].isDisabled()
// toolbar.items[0].enable()
// toolbar.items[0].activate()
// toolbar.items[0].deactivate()
// toolbar.items[0].toggleActiveState()
