import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import elmaFrontImage from './EFDFront.png';
import elmaWaitingRoom from './EFDWaitingRoom.png';

class CarouselC extends React.Component {
render() {
return (
<div>
<div className='container-fluid' >
<div className="row">
<div className="col-sm-12">

</div>
</div>
<div className="row">
<div className="col-12">
<Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src= {elmaFrontImage}
alt="First slide"
/>

</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src= {elmaWaitingRoom}
alt="Second slide"
/>

</Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>
)
};
}
export default CarouselC;