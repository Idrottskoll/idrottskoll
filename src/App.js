import React, { Component } from 'react';
import { Faq } from './components/middleware/text';
import {
    Button,
    Label,
    Input,
    TextArea,
    Title,
    Paragraph,
    Link,
    SmallTitle,
} from './components/styles';
import StreamScheduleContainer from './components/streamSchedule/StreamScheduleContainer';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Hero from './components/Hero';
import UspContainer from './components/Usp';
import HowDoesItWork from './components/HowDoesItWork';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Hero />
                <UspContainer />
                <HowDoesItWork />
                <Footer />
            </div>
        );
    }
}
