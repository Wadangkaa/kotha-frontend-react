import { useEffect, useState } from 'react';
import { AdvancedMarker, APIProvider, Map, InfoWindow } from '@vis.gl/react-google-maps';
import { Circle } from './Circle';
import { apiFetch } from '@/utilities/apiFetch';
import { ApiResponseWithPagination } from '@/types/commonTypes';
import { Contact } from '@/types/models';

type Point = google.maps.LatLngLiteral & { key: string };

export default function SearchInRadius() {
	const [radius, setRadius] = useState(1000);
	const [center, setCenter] = useState<google.maps.LatLngLiteral | null>(null);
	const [coordinates, setCoordinates] = useState<Point[]>([]);

	// Fetch the user's current location on component mount
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setCenter({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
				},
				(error) => {
					console.error('Error fetching location', error);
					setCenter({ lat: 27.693771, lng: 85.329209 }); // Default center
				}
			);
		} else {
			console.error('Geolocation is not supported by this browser.');
			setCenter({ lat: 27.693771, lng: 85.329209 }); // Fallback to default
		}
	}, []);

	const changeCenter = (newCenter: google.maps.LatLng | null) => {
		if (!newCenter) return;
		setCenter({ lng: newCenter.lng(), lat: newCenter.lat() });
	};

	const onDragEnd = (e: google.maps.MapMouseEvent) => {
		if (!e.latLng) return;
		setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() });
	};

	const onSubmit = async () => {
		try {
			const kothas = await apiFetch<ApiResponseWithPagination<Contact[]>>('api/search-kotha-in-map', {
				method: 'POST',
				body: JSON.stringify({ center, radius }),
			});
			// Set coordinates from fetched data
			setCoordinates(
				kothas.data.data.map((kotha) => ({
					key: JSON.stringify(kotha),
					lat: Number.parseFloat(kotha.latitude),
					lng: Number.parseFloat(kotha.longitude),
				}))
			);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<div className='tw-flex tw-p-10 tw-gap-4'>
			<div className='tw-flex-[3]'>
				<div style={ { height: '500px', width: '100%' } }>
					<APIProvider apiKey={ 'AIzaSyBt4cUvR9HOpwhNs_edkOTaYdRaHfgnfCs' }>
						{/* Only render the map when center is available */ }
						{ center && (
							<Map defaultCenter={ center } defaultZoom={ 14 } mapId={ 'kotha-434221' }>
								<AdvancedMarker position={ center } draggable={ true } onDragEnd={ onDragEnd } />
								<Circle
									radius={ radius }
									center={ center }
									onRadiusChanged={ setRadius }
									onCenterChanged={ changeCenter }
									strokeColor={ '#0c4cb3' }
									strokeOpacity={ 1 }
									strokeWeight={ 3 }
									fillColor={ '#3b82f6' }
									fillOpacity={ 0.1 }
									editable
									draggable
								/>
								{ coordinates.length > 0 && (coordinates.map((point: Point, index) =>
									<Marker point={ point } key={ index } />
								)) }
							</Map>
						) }
					</APIProvider>
				</div>
			</div>
			<div className='tw-flex-1'>
				<button onClick={ onSubmit }>Submit</button>
			</div>
		</div>
	);
}

const Marker = ({ point }: { point: Point; }) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<AdvancedMarker position={ point } onClick={ () => setOpen(true) }>
				<span style={ { fontSize: 20 } }>🏠</span>
			</AdvancedMarker>
			{ open && (
				<InfoWindow onCloseClick={ () => setOpen(false) }>
					<p>Hello </p>
				</InfoWindow>
			) }
		</>
	);
};
