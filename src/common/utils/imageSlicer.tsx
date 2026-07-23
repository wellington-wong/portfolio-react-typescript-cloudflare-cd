import { useEffect, useState } from "react";
import styled from "styled-components";




interface ImageSliceProps {
	src: string;
	row: number;
	col: number;

	rows?: number;
	cols?: number;


}

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	gap: 0;




	width: 100%;
	aspect-ratio: 3 / 2;
`;
const Tile = styled.div`
	width: 100%;
	height: 100%;

	background-repeat: no-repeat;
`;

interface Props {
	src: string;
	rows?: number;

	cols?: number;
}




export default function ImageSlicer({
	src,
	rows = 3,


	cols = 3,
}: Props) {


	const [ratio, setRatio] = useState(1);

	useEffect(() => {
		const img = new Image();

		img.onload = () => {
			setRatio(img.naturalWidth / img.naturalHeight);
		}


		
		img.src = src;
	}, [src]);

	const slices = [];

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			slices.push(





				<ImageSlice
					key={`${row}-${col}`}
					src={src}

					row={row}
					col={col}
					rows={rows}



					cols={cols}
				/>
			);
		}
	}





	return <Container
		style={{
			aspectRatio: ratio,



			gridTemplateColumns: 	`repeat(${cols}, 1fr)`,
			gridTemplateRows: `repeat(${rows}, 1fr)`,
		}}
	>{slices}</Container>
}

function ImageSlice({
	src,



	row,
	col,
	rows = 3,

	cols =3,
}: ImageSliceProps) {
	return <Tile



		className="image-tile"
		style={{
			backgroundImage: `url(${src})`,

			backgroundSize: `${cols * 100}% ${rows * 100}%`,
			backgroundPosition: `${(col * 100) / (cols - 1)}% ${
				(row * 100) / (rows - 1)



			}%`,
		}}
	/>
}