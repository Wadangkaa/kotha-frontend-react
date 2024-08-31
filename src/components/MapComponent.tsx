import React, { useEffect, useRef, useState } from 'react';

const MapComponent = ({ longitude, latitude }: {
	longitude: Number, latitude: Number
}) => {
	const [map, setMap] = useState<google.maps.Map | null>(null);
	const [loading, setLoading] = useState(false);
	const mapRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const initialize = () => {
			if (!mapRef.current) return;

			const myLatlng = { lat: latitude, lng: longitude };

			const mapOptions: google.maps.MapOptions = {
				center: myLatlng,
				zoom: 16,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
			};

			const newMap = new google.maps.Map(mapRef.current, mapOptions);

			const contentString = "<div><button id='clickButton'>Click me!</button></div>";

			const infowindow = new google.maps.InfoWindow({
				content: contentString,
			});

			const marker = new google.maps.Marker({
				position: myLatlng,
				map: newMap,
				title: 'Uluru (Ayers Rock)',
			});

			marker.addListener('click', () => {
				infowindow.open(newMap, marker);
			});

			google.maps.event.addListener(infowindow, 'domready', () => {
				const button = document.getElementById('clickButton');
				if (button) {
					button.addEventListener('click', clickTest);
				}
			});

			setMap(newMap);
		};

		const loadGoogleMapsScript = () => {
			const existingScript = document.getElementById('google-maps-script');
			if (existingScript) {
				existingScript.onload = initialize;
				return;
			}

			const script = document.createElement('script');
			script.id = 'google-maps-script';
			script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBt4cUvR9HOpwhNs_edkOTaYdRaHfgnfCs`;
			script.async = true;
			script.defer = true;
			script.onload = initialize;
			script.onerror = () => console.error('Failed to load Google Maps API');
			document.head.appendChild(script);
		};

		loadGoogleMapsScript();

		return () => {
			if (map) {
				google.maps.event.clearInstanceListeners(map);
			}
			// Clean up the script if necessary
		};
	}, [map]);

	const centerOnMe = () => {
		if (!map) return;

		setLoading(true);

		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
				map.setCenter(position);
				setLoading(false);
			},
			(error) => {
				alert('Unable to get location: ' + error.message);
				setLoading(false);
			}
		);
	};

	const clickTest = () => {
		alert('Example of infowindow with a button click');
	};

	return (
		<div>
			<div id="map" ref={ mapRef } style={ { height: '500px', width: '100%' } }></div>
			<button onClick={ centerOnMe }>Center on Me</button>
			{ loading && <div>Loading...</div> }
		</div>
	);
};

export default MapComponent;
