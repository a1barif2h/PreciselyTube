import React, { useState } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { ImYoutube } from "react-icons/im";
import Styles from "../styles/SearchBar.module.css";

const SearchBar = ({handleSubmit}) => {
    const [value, setValue] = useState('Search from youtube..');

    const handleChange = e => setValue(e.target.value);

    const handleSearchSubmit = e => {
        e.preventDefault();
        handleSubmit(value)
    }
    return (
        <>
            <Navbar className={Styles.header_bg} expand="lg">
                <Navbar.Brand  className={`"ml-auto" ${Styles.header_title}`}>PreciselyTube</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Form inline onSubmit={handleSearchSubmit}>
                        <Form.Control onChange={handleChange} className="mr-sm-2" type="text" placeholder="Search from youtube..." />
                        <Button className={Styles.submit_btn} type="submit">
                            <ImYoutube />
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default SearchBar;