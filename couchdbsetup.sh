HOST=http://127.0.0.1:5984

curl -X PUT $HOST/reactlondon
curl -X PUT $HOST/reactlondon/9db6c9bd6871df4fddcef7a3bb000d1a -d '
{
	"about": {
		"title": "London React Meetup",
		"summary": "This is the React London User Group"
	},
	"meetup": {
		"title": "June React User Group",
		"details": "",
		"when": "Tuesday, June 28, 2016",
		"where": {
			"text": "Facebook, 10 Brock Street, Regents Place, London",
			"url": "https://maps.google.com/maps?f=q&hl=en&q=10+Brock+Street%2C+Regents+Place%2C+London%2C+gb"
		},
		"signup": {
			"text": "For full details please see",
			"url": "http://www.meetup.com/London-React-User-Group/events/230114076/"
		},
		"streaming": {
			"text": "Check out the live stream",
			"url": "https://www.youtube.com/channel/UCHlIVrJki1BxwKe7NtFYZRg"
		},
		"speakers": [{
			"name": "Zoë",
			"title": "Stupid names for npm modules",
			"blurb": "If ibably been used to name a npm module.",
			"picture": "http://lorempixel.com/200/200/animals/"
		}, {
			"name": "Marcel",
			"title": "Writing COBOL underwater",
			"blurb": "Writing COBOL underwater is quite difficult, as Marcel will explain",
			"picture": "http://lorempixel.com/200/200/animals/"
		}, {
			"name": "Matt",
			"title": "To be confirmed",
			"blurb": "If you are interested in taking this slot, please talk to Amy",
			"picture": "http://lorempixel.com/200/200/animals/"
		}, {
			"name": "Someone amazing",
			"blurb": "I am from space",
			"picture": "http://lorempixel.com/200/200/animals/",
			"title": "I DO NOT HAVE A TITLE"
		}],
		"sponsors": [{
			"name": "Redbadger",
			"url": "http://www.red-badger.com",
			"picture": "http://lorempixel.com/200/200/animals/"
		}]
	}
}
'
curl -X PUT $HOST/_config/httpd/enable_cors -d '"true"'
curl -X PUT $HOST/_config/cors/origins -d '"*"'
curl -X PUT $HOST/_config/cors/credentials -d '"true"'
curl -X PUT $HOST/_config/cors/methods -d '"GET, PUT, POST, HEAD, DELETE"'
curl -X PUT $HOST/_config/cors/headers -d '"accept, authorization, content-type, origin, referer, x-csrf-token"'
