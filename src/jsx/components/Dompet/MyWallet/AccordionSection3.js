import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {AccordionBlog3,IconSuccess, } from './TabData';
import { Accordion} from 'react-bootstrap';

const AccordionSection3 = () => {
	const [activeDefault3, setActiveDefault3] = useState(0)
	return(
		<>	
			<Accordion className="accordion style-1"  defaultActiveKey="0" id="accordion-one" >
				{AccordionBlog3.map((item, i) => (	
					<div className="accordion-item" key={i}>
						<Accordion.Toggle as="div" variant="" className={` ${ activeDefault3 === i ? 'accordion-header' : 'accordion-header collapsed'}`} 
						onClick={() => 	setActiveDefault3(activeDefault3 === i ? -1 : i)} eventKey={`${i}`}>
							<div className="d-flex align-items-center">
								<div className="profile-image">
									<img src={item.image} alt="" />
									<span className="bg-success">
										<IconSuccess />
									</span>
								</div>
								<div className="user-info">
									<h6 className="fs-16 font-w700 mb-0"><Link to={"#"}>{item.title}</Link></h6>
									<span className="fs-14">Online Shop</span>
								</div>
							</div>
							<span>June 5, 2020, 08:22 AM</span>
							<span>+$5,553</span>
							<span>MasterCard 404</span>
							{item.status}
							<span className="accordion-header-indicator"></span>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey={`${i}`} className="accordion_body">
							{item.cardbody}
						</Accordion.Collapse>	
					</div>	
				))}
			</Accordion>
		</>
	)
}
export default AccordionSection3;