import { ApiResponseWithPagination } from '@/types/commonTypes';
import { Contact } from '@/types/models';
import { apiFetch } from '@/utilities/apiFetch';
import { useEffect, useRef, useState } from 'react';
import { AdvancedMarker, APIProvider, Map, InfoWindow } from '@vis.gl/react-google-maps';
import type { Marker, MarkerClusterer } from "@googlemaps/markerclusterer"
import { Circle } from './Circle';


export default function SearchInRadius() {
	const [radius, setRadius] = useState(1000)
	const [center, setCenter] = useState({ lat: 27.693771, lng: 85.329209 });

	const coordinates: Point[] = [
		{ key: "one", lat: 27.703771, lng: 85.359209 },
		{ key: "two", lat: 27.694071, lng: 85.369209 },
	];

	const changeCenter = (newCenter: google.maps.LatLng | null) => {
		if (!newCenter) return;
		setCenter({ lng: newCenter.lng(), lat: newCenter.lat() });
	};

	const onDragEnd = (e: google.maps.MapMouseEvent) => {
		if (!e.latLng) return;
		const newCenter = {
			lat: e.latLng.lat(),
			lng: e.latLng.lng(),
		};
		setCenter(newCenter);
	}

	return (
		<div className='tw-flex tw-p-10 tw-gap-4'>
			<div className='tw-flex-[3]'>
				<div style={ { height: '500px', width: '100%' } }>
					<APIProvider apiKey={ 'AIzaSyBt4cUvR9HOpwhNs_edkOTaYdRaHfgnfCs' }>
						<Map defaultCenter={ center } defaultZoom={ 14 } mapId={ 'kotha-434221' }>
							<AdvancedMarker position={ center } draggable={ true } onDragEnd={ (e: google.maps.MapMouseEvent) => onDragEnd(e) } />
							<Circle
								radius={ radius }
								center={ center }
								onRadiusChanged={ setRadius }
								onCenterChanged={ changeCenter }
								strokeColor={ '#0c4cb3' }
								strokeOpacity={ 1 }
								strokeWeight={ 3 }
								fillColor={ '#3b82f6' }
								fillOpacity={ 0.3 }
								editable
								draggable
							/>
							<Markers points={ coordinates } />
						</Map>
					</APIProvider>
				</div>
			</div>
			<div className='tw-flex-1'>
				<button>Center on Me</button>
				<input
					type="range"
					min="500"
					max="5000"
				// value={ radius }
				// onChange={ (e) => handleRadiusChange(Number(e.target.value)) }
				/>
				<button onClick={ () => console.log('hello') }>Submit</button>
			</div>
		</div>
	);
};



type Point = google.maps.LatLngLiteral & { key: string }
type Props = { points: Point[] }

const Markers = ({ points }: Props) => {
	const [open, setOpen] = useState(false)

	return (
		points.map((point: Point, index) => (
			<div key={ index }>
				<AdvancedMarker position={ point } onClick={ () => setOpen(true) }>
					<span style={ { fontSize: 20 } }>🏠</span>
				</AdvancedMarker>
				{ open && <InfoWindow onCloseClick={ () => setOpen(false) }><p>Hello { point.key }</p></InfoWindow> }
			</div>
		))
	)
}