import React, { useEffect, useRef, useState } from 'react';

type Coordinate = {
	longitude: number;
	latitude: number;
};

const MapComponent = ({
	coordinates,
	initialRadius = 2000, // Default radius in meters
}: {
	coordinates: Coordinate[];
	initialRadius?: number;
}) => {
	const [map, setMap] = useState<google.maps.Map | null>(null);
	const [loading, setLoading] = useState(false);
	const [circle, setCircle] = useState<google.maps.Circle | null>(null);
	const [radius, setRadius] = useState(initialRadius); // State to control circle radius
	const [center, setCenter] = useState<google.maps.LatLng | null>(null); // State to control circle center
	const mapRef = useRef<HTMLDivElement | null>(null);
	const markersRef = useRef<google.maps.Marker[]>([]);
	const centerMarkerRef = useRef<google.maps.Marker | null>(null);

	useEffect(() => {
		const initialize = () => {
			if (!mapRef.current) return;

			const defaultCenter = { lat: 0, lng: 0 };

			const mapOptions: google.maps.MapOptions = {
				center: defaultCenter,
				zoom: 14,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
			};

			const newMap = new google.maps.Map(mapRef.current, mapOptions);
			setMap(newMap);
		};

		const loadGoogleMapsScript = () => {
			if (typeof google !== 'undefined' && google.maps && google.maps.geometry) {
				initialize();
				return;
			}

			const existingScript = document.getElementById('google-maps-script');
			if (existingScript) {
				existingScript.onload = initialize;
				return;
			}

			const script = document.createElement('script');
			script.id = 'google-maps-script';
			script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBt4cUvR9HOpwhNs_edkOTaYdRaHfgnfCs&libraries=geometry`;
			script.async = true;
			script.defer = true;
			script.onload = initialize;
			script.onerror = () => console.error('Failed to load Google Maps API');
			document.head.appendChild(script);
		};

		loadGoogleMapsScript();
	}, []);

	useEffect(() => {
		if (map && google.maps.geometry) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const userLocation = new google.maps.LatLng(
						position.coords.latitude,
						position.coords.longitude
					);
					setCenter(userLocation); // Set initial center state
					map.setCenter(userLocation);

					const newCircle = new google.maps.Circle({
						map: map,
						center: userLocation,
						radius: radius,
						fillColor: '#FF0000',
						fillOpacity: 0.2,
						strokeColor: '#FF0000',
						strokeOpacity: 0.5,
						strokeWeight: 1,
					});
					setCircle(newCircle);

					const centerMarker = new google.maps.Marker({
						position: userLocation,
						map: map,
						draggable: true,
						title: 'Drag me to move the circle',
					});
					centerMarkerRef.current = centerMarker;

					centerMarker.addListener('dragend', (event) => {
						const newCenter = event.latLng;
						setCenter(newCenter);
						circle?.setCenter(newCenter);
						displayMarkersWithinCircle(newCenter, radius);
					});

					displayMarkersWithinCircle(userLocation, radius);
				},
				(error) => {
					console.error('Error fetching location: ', error);
				}
			);
		} else {
			console.error('Map or Google Maps Geometry library is not loaded');
		}
	}, [map]);

	useEffect(() => {
		if (circle && center) {
			// Update circle properties when radius or center changes
			circle.setCenter(center);
			circle.setRadius(radius);
			displayMarkersWithinCircle(center, radius);
		}
	}, [radius, center]);

	const displayMarkersWithinCircle = (center: google.maps.LatLng, radius: number) => {
		if (!map) {
			console.error('Map is not initialized');
			return;
		}

		markersRef.current.forEach((marker) => marker.setMap(null));
		markersRef.current = [];

		coordinates.forEach(({ latitude, longitude }, index) => {
			const position = new google.maps.LatLng(latitude, longitude);
			const distanceFromCenter = google.maps.geometry.spherical.computeDistanceBetween(
				center,
				position
			);

			if (distanceFromCenter <= radius) {
				const marker = new google.maps.Marker({
					position,
					map: map,
					title: `Room ${index + 1}`,
				});

				markersRef.current.push(marker);
			}
		});
	};

	const handleRadiusChange = (newRadius: number) => {
		setRadius(newRadius);
	};

	const handleCenterChange = (latitude: number, longitude: number) => {
		const newCenter = new google.maps.LatLng(latitude, longitude);
		setCenter(newCenter);
	};

	const centerOnMe = () => {
		if (!map) return;

		setLoading(true);

		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
				setCenter(position);
				map.setCenter(position);
				if (circle) {
					circle.setCenter(position);
					displayMarkersWithinCircle(position, radius);
				}
				setLoading(false);
			},
			(error) => {
				alert('Unable to get location: ' + error.message);
				setLoading(false);
			}
		);
	};

	const handleSubmit = () => {
		if (!center) return;

		const data = {
			center: {
				lat: center.lat(),
				lng: center.lng(),
			},
			radius,
		};

		console.log('Submit data:', data);

		// You can replace the following line with an API call to send the data to your backend
		// fetch('/your-api-endpoint', {
		//   method: 'POST',
		//   headers: {
		//     'Content-Type': 'application/json',
		//   },
		//   body: JSON.stringify(data),
		// })
		// .then(response => response.json())
		// .then(result => console.log('Success:', result))
		// .catch(error => console.error('Error:', error));
	};

	return (
		<div>
			<div id="map" ref={ mapRef } style={ { height: '500px', width: '100%' } }></div>
			<button onClick={ centerOnMe }>Center on Me</button>
			<input
				type="range"
				min="500"
				max="5000"
				value={ radius }
				onChange={ (e) => handleRadiusChange(Number(e.target.value)) }
			/>
			<button onClick={ handleSubmit }>Submit</button>
			{ loading && <div>Loading...</div> }
		</div>
	);
};

export default MapComponent;
