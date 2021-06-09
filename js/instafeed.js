var feed = new Instafeed({
    accessToken: 'IGQVJVX0h0dUdFZA29UUzlTQTJ4b3NhRWtOanBGYnBKM182RThaSUJzaWx3ODJsX0U5cjZAsNGhDNDF3dG9FS04zbW5jdUlCaUdKQ1llT1luLVphQXdMWFJ2a2RES0UyMzhLNThHZAlU5eFVyMlpVTmxuNwZDZD',
    resolution: 'standard_resolution',
    target: 'instafeed',
    limit: 6,
    template:	'<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>'
  });
  feed.run();