Polymer('mosaiqo-color-picker', {
	box : null ,
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
		if( colorName.value.indexOf("#") != -1){
			this.setColor( colorName.value );
			this.setColorValue( colorName.value );
		}
		else
		{
			this.searchColor( colorName.value )
		}

	},
	showTooltip: function( event )
	{	
		var colorBox = event.target;
		var name = colorBox.getAttribute("data-name");
		this.box = document.getElementById("tooltip");
		this.box.innerHTML = name ;
	},
	hideTooltip: function( event )
	{	
		this.box.classList.remove("show");
		this.box.innerHTML = "";
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
		
		this.hideTooltip( event );
		this.setColorValue( color );
		this.setColorName( name );
		this.showAllColors();
		
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
		if (parseInt( color.replace("#","") , 16) > 0xffffff/2)
			this.$.currentColor.style.color = "black";
		else
			this.$.currentColor.style.color = "white";

		this.$.currentColor.style.background = color;
		if( color != "#ffffff")
			this.$.input.style.borderColor = color;
		else if(color == "#ffffff")
			this.$.input.style.borderColor = "#ccc";
	},
	setBackground : function ( color )
	{
		this.$.input.style.borderColor = "";
		this.$.currentColor.style.backgroundImage = color;
	},
	searchColor : function ( string )
	{
		var colors = this.$.picker.querySelectorAll(".color");
		var counter  = 0;
		for(i=0; i<colors.length; i++)
		{
			var color = colors[i];
			var colorName = color.getAttribute("data-name");
			if( colorName.indexOf(string) == -1 )
				color.classList.add("hide");
			else
			{
				counter ++;
				color.classList.remove("hide");
			}
		}
		this.box = document.getElementById("tooltip");
		this.box.innerHTML = "Se han encontrado " +counter+ " resultados"
	},
	showAllColors : function ()
		{
			var colors = this.$.picker.querySelectorAll(".color");
			var counter  = 0;
			for(i=0; i<colors.length; i++)
			{
				var color = colors[i];
				color.classList.remove("hide");
			}
		}
});