import React,{useState} from 'react'
import './Hotel.css';
import {Modal,Button,Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Order({res}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user=JSON.parse(localStorage.getItem('currentuser'));
  return (
    <div className='row bs'>
      <div className='col-md-4'>
        <img src={res.imageURLs[1]} alt="restaurant" className='smallimg'/>
      </div>
      <div className='col-md-7'>
        <h3>{res.name}</h3>
        <p>MaxCount:{res.maxCount}</p>
        <p>phoneNumber:{res.phoneNumber}</p>
        <p>Rating:{res.rating}</p>
        <div style={{float:'right'}}>
          {user ?
                  <>
                    <Link to={`/order`}>
                    <button className='btn btn-primary m-2'>Order Now</button>
                  </Link> 
                  <button className='btn btn-primary'onClick={handleShow}>View Details</button>
                  </> 
          :
            <button className='btn btn-primary'onClick={handleShow}>View Details</button> 
          }

        </div>
      </div>

      <Modal show={show} onHide={handleClose} animation={false} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{res.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Carousel prevLabel='' nextLabel=''>
                {res.imageURLs.map(url=>{
                    return <Carousel.Item>
                        <img src={url} alt='restaurants' className='d-block w-100 bigimg'/>
                    </Carousel.Item>
                })}
            </Carousel>
            <p>{res.description}</p>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Order