Polymer('mosaiqo-color-picker', {
	image : false,
	name : "",
	color : "white",
	closed : true,
	ready: function() 
	{
		if(this.image)
			this.setImage(this.color)	
		else
			this.setColor(this.color)

		this.setColorName( this.name );
		this.setColorValue( this.color );
	},
	onKeyUp: function( event )
	{
		colorName = this.$.colorName
		this.setColor( colorName.value );
		this.setColorValue( colorName.value );
	},
	showPicker: function( event )
	{
		var picker = this.$.picker;
		if(this.closed)
		{
			picker.classList.remove("closed");
			this.closed = false;
		}
		else
		{
			picker.classList.add("closed");
			this.closed = true;
		}
	},
	selectColor: function( event )
	{
		var image = event.target.getAttribute("data-image");
		var color = event.target.getAttribute("data-color");
		var name = event.target.getAttribute("data-name");
		if(image == "true")
			this.setBackground( color );
		else
			this.setColor( color );
		
		this.setColorValue( color );
		this.setColorName( name );
		
	},
	setColorName: function ( name )
	{
		this.$.colorName.value = name;
	},
	setColorValue : function (color)
	{
		this.$.colorValue.value = color;
	},
	setColor : function ( color )
	{
		this.$.currentColor.style.background = color;
	},
	setBackground : function ( color )
	{
		this.$.currentColor.style.backgroundImage = color;
	}
});