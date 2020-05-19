G.AddData({
    name:'Thot Mod',
    author:'fancy and torcado',
    desc:'This mod makes it possible to create thots. Thots are an improved version of Dreamers.',
    engineVersion:1,
    manifest:0,
    requires:['Default dataset*'],
    sheets:{'thotSheet':'/thotModIconSheet.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
    func:function()
    {
		new G.Unit({
		name:'thot',
		desc:'@generates [insight] more frequently than a [dreamer]<>A [thot] spends their time observing, thinking, and wondering why things are the way they are.',
		icon:[0,0,'thotSheet'],
		cost:{'food':50},
		use:{'worker':1},
		effects:[
			{type:'gather',what:{'insight':0.3}},
			{type:'gather',what:{'insight':0.15},req:{'symbolism':true}},
			{type:'mult',value:1.2,req:{'wisdom rituals':'on'}}
		],
		category:'discovery',
		req:{'construction':true},
		limitPer:{'population':400},//I changed from House to population to make your mod working. If you wish to have still house DM me on Dashnet Discord or somewhere I will tell you how you can do that.
		});
    }
});
