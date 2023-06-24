import React, { useState } from 'react'
import FeatherIcon from "feather-icons-react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css'
// Form Editor

import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import HREmployee from '../HREmployee';


interface LayoutType {
  id: number;
  name: string;
}


const Meetings = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isEndDate, setIsEndDate] = useState(false)
  // console.log('isEndDate', isEndDate)
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

  return (
    <>
      {
        layout === "opened" ? <HREmployee/> : ''
      }
      <div className="mt-2 p-3 mb-4">
        <div className="d-flex justify-content-center align-items-center  flex-column">
          <div className="w-100  bg-white">
            <Button variant="success" style={{ cursor: 'none' }} className="w-100 fs-4 fw-bold align-items-start rounded-0">
              Add Meeting
            </Button>
            <div className="p-2">
              <div className="d-flex justify-content-between align-items-center ">
                <h4 className="fw-bold text-dark">Add Meeting</h4>
                <Link to="/apps/hremploye/calander" style={{ textDecoration: "none" }}>
                  <Button type="submit" variant="success" className="fw-bold align-items-center">
                    Go Back
                  </Button>
                </Link>
              </div>

              <Row>
                <Col md={3}>
                  <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                    <Form.Label>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Meeting Title
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                    <Form.Label>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Employee
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Select className="fw-bold">
                        <option>Nothing Selected</option>
                        <option>Arif</option>
                        <option>Asifullah</option>
                        <option>hasifullah</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                    <Form.Label>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Company
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Select className="fw-bold">
                        <option>Nothing Selected</option>
                        <option>Daraz</option>
                        <option>Evally</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                    <Form.Label>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Status
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Select className="fw-bold">
                        <option>Nothing Selected</option>
                        <option>Pending</option>
                        <option>Rejected</option>
                        <option>Approved</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-2 mt-2" controlId="formBasicEmail">
                    <Form.Label>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Meeting Date
                    </Form.Label>
                    <Form.Control type="text" onClick={() => {
                      setIsOpen(true)
                    }} />
                  </Form.Group>
                  <DatePicker
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    defaultValue={new Date(2022, 8, 8)}
                    minDate={new Date(2022, 10, 10)}
                    maxDate={new Date(2023, 0, 10)}
                    headerFormat='DD, MM dd'
                  />
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2 mt-2" controlId="formBasicEmail">
                    <Form.Label>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Meeting Time
                    </Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                </Col>
              </Row>

              <Col md={12}>
                <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword" >
                  <Form.Label>
                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Meeting Note
                  </Form.Label>
                  <Form.Control type='text' as="textarea" />
                </Form.Group>
              </Col>
              <Form.Group className="mb-2" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Notification" />
              </Form.Group>
              <div className="mb-3 pt-2">
                <div className="text-start">
                  <Button type="submit" variant="success">
                    <span className='fw-bold'>Save</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Meetings           