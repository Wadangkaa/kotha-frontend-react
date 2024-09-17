import React, { useEffect, useRef, useState } from 'react';

const MapComponent = ({ longitude, latitude, title }: {
	longitude: number, latitude: number, title: string
}) => {
	const [map, setMap] = useState<google.maps.Map | null>(null);
	const [loading, setLoading] = useState(false);
	const mapRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const initialize = () => {
			if (!mapRef.current) return;

			const myLatlng: google.maps.LatLngLiteral = { lat: latitude, lng: longitude };

			const mapOptions: google.maps.MapOptions = {
				center: myLatlng,
				zoom: 15,
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
				title,
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

	const clickTest = () => {
		alert('Example of infowindow with a button click');
	};

	return (
		<div>
			<div id="map" ref={ mapRef } style={ { height: '500px', width: '100%' } }></div>
			{ loading && <div>Loading...</div> }
		</div>
	);
};

export default MapComponent;
