'use client';

import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, Marker, Polygon, TileLayer } from 'react-leaflet';
import CardModal from './card-modal';

const markerIcon = Leaflet.divIcon({
	html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="map-marker"><path fill="#9e85be" d="M255 64.35a139.44 139.44 0 0 0-133.37 176.36A137.42 137.42 0 0 0 131.82 267l96.62 164.68c12.32 21.35 43.14 21.33 55.44 0l95.94-163.95A139.4 139.4 0 0 0 255 64.35ZM256.5 273a69.5 69.5 0 1 1 69.5-69.5 69.5 69.5 0 0 1-69.5 69.5Z"></path></svg>`,
	iconSize: [46, 46],
	iconAnchor: [64 / 2, 64],
	className: 'remove',
});

export default function Map() {
	const [show, setShow] = useState(false);
	const [data, setData] = useState(null);

	const purpleOptions = { color: 'purple' };

	const polygon = [
		[-8.651396519992753, 115.12133917916727],
		[-8.651477408166127, 115.12257644463489],
		[-8.651632138248367, 115.12208576693783],
		[-8.651919595504758, 115.1220412567456],
		[-8.651898382010655, 115.1213733867464],
	];

	const polygon2 = [
		[-8.649681987951357, 115.12277473919552],
		[-8.649370731717328, 115.12214506532166],
		[-8.649775739778658, 115.12203506205455],
		[-8.649933242796024, 115.12256231909352],
	];

	const listMarkers = [
		{
			marker: [-8.651620771016303, 115.12143952709745],
			data: {
				cordinate: '-8.651620771016303, 115.12143952709745',
				type: 'Freehold',
				size: '500',
				price: '3.968.000.000',
				description: `A vacant land measuring 500 square meters offers a promising canvas for your dreams and aspirations. This spacious plot of land provides ample room for creative endeavors, whether it's designing your dream home, establishing a flourishing garden, or constructing a thriving business space. With its generous size, this vacant lot presents endless possibilities, allowing you to shape your vision into reality. Located in a tranquil environment, this land offers a peaceful retreat from the hustle and bustle of city life, making it an ideal choice for anyone seeking a place to build, grow, and flourish.`,
				img: '/images/place1.jpg',
				activitiesAllowed: [
					{
						title: 'Boarding house',
					},
					{
						title: 'Grocery store / small shop / kiosk',
					},
					{
						title: 'Mini-market',
					},
					{
						title: 'Supermarket',
					},
					{
						title: 'Department Store',
					},
					{
						title: 'Hypermart',
					},
					{
						title: 'Mall',
					},
					{
						title: 'Wholesale store',
					},
					{
						title: 'Eatery',
					},
					{
						title: 'Restaurant',
					},
					{
						title: `Children's playground`,
					},
					{
						title: 'Fitness center',
					},
					{
						title: 'Spa center',
					},
					{
						title: 'Movie theater',
					},
					{
						title: 'Nightclub',
					},
					{
						title: 'Beauty salon',
					},
					{
						title: 'Electronics store',
					},
					{
						title: 'Car repair workshop',
					},
					{
						title: 'Computer repair center',
					},
					{
						title: 'Health clinic',
					},
				],
			},
		},
		{
			marker: [-8.651654521510663, 115.12167849973581],
			data: {
				cordinate: '-8.651654521510663, 115.12167849973581',
				type: 'Leasehold',
				size: '450',
				price: '3.120.000.000',
				description: 'This 450m² vacant land offers a canvas of endless possibilities. Nestled in a serene location, this empty plot presents a unique opportunity to design and build your dream space from the ground up. Surrounded by natural beauty and with ample space for your imagination to roam, this land is perfect for crafting a bespoke residence or a commercial venture. With its generous dimensions, this plot ensures ample room for landscaping, outdoor amenities, or any creative endeavor you envision. Seize the chance to create a haven tailored to your desires on this expansive 450m² blank canvas.',
				img: '/images/place2.jpg',
				activitiesAllowed: [
					{
						title: 'Boarding house',
					},
					{
						title: 'Grocery store / small shop / kiosk',
					},
					{
						title: 'Mini-market',
					},
					{
						title: 'Supermarket',
					},
					{
						title: 'Department Store',
					},
					{
						title: 'Hypermart',
					},
					{
						title: 'Mall',
					},
					{
						title: 'Wholesale store',
					},
					{
						title: 'Eatery',
					},
					{
						title: 'Restaurant',
					},
					{
						title: "Children's playground",
					},
					{
						title: 'Fitness center',
					},
					{
						title: 'Spa center',
					},
					{
						title: 'Movie theater',
					},
					{
						title: 'Nightclub',
					},
					{
						title: 'Beauty salon',
					},
					{
						title: 'Electronics store',
					},
					{
						title: 'Car repair workshop',
					},
					{
						title: 'Computer repair center',
					},
					{
						title: 'Health clinic',
					},
					{
						title: 'Pharmacy',
					},
					{
						title: 'Massage center',
					},
					{
						title: 'Bicycle repair shop',
					},
					{
						title: 'Primary school',
					},
					{
						title: 'Secondary school',
					},
					{
						title: 'High school',
					},
					{
						title: 'Art training center',
					},
					{
						title: 'Computer training center',
					},
					{
						title: 'Music training center',
					},
					{
						title: 'Language training center',
					},
					{
						title: 'Cooking school',
					},
				],
			},
		},
		{
			marker: [-8.649655737425654, 115.12242197011146],
			data: {
				cordinate: '-8.649655737425654, 115.12242197011146',
				type: 'Leasehold',
				size: '550',
				price: '4.200.000.000',
				description: `Embrace endless possibilities on this 550 sqm vacant land. Ideal for a dream home or lucrative investment, this spacious plot offers tranquility and convenience. Perfectly located, it's your canvas for endless potential.`,
				img: '/images/place3.jpg',
				activitiesAllowed: [
					{
						title: 'Boarding house',
					},
					{
						title: 'Grocery store / small shop / kiosk',
					},
					{
						title: 'Mini-market',
					},
					{
						title: 'Supermarket',
					},
					{
						title: 'Department Store',
					},
					{
						title: 'Hypermart',
					},
					{
						title: 'Mall',
					},
					{
						title: 'Wholesale store',
					},
					{
						title: 'Eatery',
					},
					{
						title: 'Restaurant',
					},
					{
						title: "Children's playground",
					},
					{
						title: 'Fitness center',
					},
					{
						title: 'Spa center',
					},
					{
						title: 'Movie theater',
					},
					{
						title: 'Nightclub',
					},
					{
						title: 'Beauty salon',
					},
					{
						title: 'Electronics store',
					},
					{
						title: 'Car repair workshop',
					},
					{
						title: 'Computer repair center',
					},
					{
						title: 'Health clinic',
					},
					{
						title: 'Pharmacy',
					},
					{
						title: 'Massage center',
					},
					{
						title: 'Bicycle repair shop',
					},
					{
						title: 'Primary school',
					},
					{
						title: 'Secondary school',
					},
					{
						title: 'High school',
					},
					{
						title: 'Art training center',
					},
					{
						title: 'Computer training center',
					},
					{
						title: 'Music training center',
					},
					{
						title: 'Language training center',
					},
					{
						title: 'Cooking school',
					},
					{
						title: 'Gymnasium',
					},
					{
						title: 'Dance studio',
					},
					{
						title: 'Yoga studio',
					},
					{
						title: 'Library',
					},
					{
						title: 'Bookstore',
					},
					{
						title: 'Community center',
					},
					{
						title: 'Art gallery',
					},
					{
						title: 'Cinema',
					},
					{
						title: 'Bowling alley',
					},
					{
						title: 'Arcade',
					},
					{
						title: 'Billiard hall',
					},
					{
						title: 'Karaoke bar',
					},
					{
						title: 'Tea house',
					},
				],
			},
		},
		{
			marker: [-8.649843241070014, 115.12255852589134],
			data: {
				cordinate: '-8.649843241070014, 115.12255852589134',
				type: 'Freehold',
				size: '600',
				price: '4.520.000.000',
				description: `Step into boundless opportunities with this 600 sqm vacant land. Ready to accommodate your dreams, this expansive plot is an ideal canvas for your vision. Whether you're envisioning a luxurious residence or a thriving business, this property offers the space and flexibility you need. Conveniently located and generously sized, this land promises a future filled with possibilities.`,
				img: '/images/place4.jpg',
				activitiesAllowed: [
					{
						title: 'Boarding house',
					},
					{
						title: 'Grocery store / small shop / kiosk',
					},
					{
						title: 'Mini-market',
					},
					{
						title: 'Supermarket',
					},
					{
						title: 'Department Store',
					},
					{
						title: 'Hypermart',
					},
					{
						title: 'Mall',
					},
					{
						title: 'Wholesale store',
					},
					{
						title: 'Eatery',
					},
					{
						title: 'Restaurant',
					},
					{
						title: "Children's playground",
					},
					{
						title: 'Fitness center',
					},
					{
						title: 'Spa center',
					},
					{
						title: 'Movie theater',
					},
					{
						title: 'Nightclub',
					},
					{
						title: 'Beauty salon',
					},
					{
						title: 'Electronics store',
					},
					{
						title: 'Car repair workshop',
					},
					{
						title: 'Computer repair center',
					},
					{
						title: 'Health clinic',
					},
					{
						title: 'Pharmacy',
					},
					{
						title: 'Massage center',
					},
					{
						title: 'Bicycle repair shop',
					},
					{
						title: 'Primary school',
					},
					{
						title: 'Secondary school',
					},
					{
						title: 'High school',
					},
					{
						title: 'Art training center',
					},
					{
						title: 'Computer training center',
					},
					{
						title: 'Music training center',
					},
					{
						title: 'Language training center',
					},
					{
						title: 'Cooking school',
					},
					{
						title: 'Gymnasium',
					},
					{
						title: 'Dance studio',
					},
					{
						title: 'Yoga studio',
					},
					{
						title: 'Library',
					},
					{
						title: 'Bookstore',
					},
					{
						title: 'Community center',
					},
					{
						title: 'Art gallery',
					},
					{
						title: 'Cinema',
					},
					{
						title: 'Bowling alley',
					},
					{
						title: 'Arcade',
					},
					{
						title: 'Billiard hall',
					},
					{
						title: 'Karaoke bar',
					},
					{
						title: 'Tea house',
					},
					{
						title: 'Coffee shop',
					},
					{
						title: 'Ice cream parlor',
					},
					{
						title: 'Bakery',
					},
					{
						title: 'Farmers market',
					},
					{
						title: 'Pet grooming salon',
					},
					{
						title: 'Pet supply store',
					},
					{
						title: 'Veterinary clinic',
					},
					{
						title: 'Plant nursery',
					},
					{
						title: 'Hardware store',
					},
					{
						title: 'Furniture store',
					},
					{
						title: 'Home decor store',
					},
					{
						title: 'Flower shop',
					},
					{
						title: 'Toy store',
					},
				],
			},
		},
	];

	return (
		<div className='relative'>
			<MapContainer
				center={[-8.651765392914381, +115.12164827109]}
				zoom={20}
				scrollWheelZoom={true}
				style={{
					height: '100vh',
				}}
			>
				<TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
				{listMarkers.map((item) => (
					<Marker
						key={item.marker}
						position={item.marker}
						icon={markerIcon}
						eventHandlers={{
							click: (e) => {
								setShow(true);
								setData(item.data);
							},
						}}
					/>
				))}
				<Polygon pathOptions={purpleOptions} positions={polygon} />
				<Polygon pathOptions={purpleOptions} positions={polygon2} />
			</MapContainer>
			{show && <CardModal setShow={setShow} data={data} setData={setData} />}
		</div>
	);
}
