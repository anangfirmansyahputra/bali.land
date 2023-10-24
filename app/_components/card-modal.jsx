'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';

export default function CardModal({ setShow, data, setData }) {
	const [active, setActive] = useState(false);

	return (
		<div className='z-[9999] absolute top-0 w-screen h-screen bg-[#0000006f] flex items-center justify-center sm:p-0 p-6'>
			<Card className='max-w-lg w-full z-[99999]'>
				<CardHeader>
					<CardTitle className='text-xl sm:text-2xl'>{active ? `Activity Allowed (${data.activitiesAllowed.length})` : 'Information'}</CardTitle>
				</CardHeader>
				{active ? (
					<CardContent className='space-y-2 text-xs sm:text-sm max-h-[400px] h-full overflow-y-auto'>
						{data.activitiesAllowed.map((item, index) => (
							<div key={index} className='flex items-center justify-between px-4 py-3 border rounded-md'>
								<div>
									<div>{item.title}</div>
									<div className='text-[8px] sm:text-[10px]'>Allowed</div>
								</div>{' '}
							</div>
						))}
					</CardContent>
				) : (
					<CardContent className='space-y-2 text-xs sm:text-sm max-h-[400px] overflow-y-auto'>
						<div className='w-full aspect-video relative'>
							<Image src={data.img} alt='place' fill className='object-cover' />
						</div>
						<div className='grid grid-cols-12'>
							<div className='col-span-2'>Cordinate</div>
							<div className='col-span-10 break-words'>: {data.cordinate}</div>
						</div>
						<div className='grid grid-cols-12'>
							<div className='col-span-2'>Type</div>
							<div className='col-span-10'>
								: <Badge>{data.type}</Badge>
							</div>
						</div>
						<div className='grid grid-cols-12'>
							<div className='col-span-2'>Size</div>
							<div className='col-span-10'>
								: {data.size}m<sup>2</sup>
							</div>
						</div>
						<div className='grid grid-cols-12'>
							<div className='col-span-2'>Price</div>
							<div className='col-span-10'>
								<span>
									: <span className='font-semibold'>Rp {data.price}</span>
								</span>
							</div>
						</div>
						<CardDescription className='space-y-2 text-xs sm:text-sm max-h-[100px] overflow-y-auto'>
							<p>Description</p>
							<p>{data.description}</p>
						</CardDescription>
					</CardContent>
				)}
				<CardFooter className='space-x-2 mt-2'>
					<Button
						size='sm'
						className='text-xs sm:text-sm'
						onClick={() => {
							setShow(false);
							setData(null);
						}}
					>
						Close
					</Button>
					<Button size='sm' className='text-xs sm:text-sm' onClick={() => setActive((prev) => !prev)} variant='secondary'>
						{active ? 'Information' : 'Activities allowed'}
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
