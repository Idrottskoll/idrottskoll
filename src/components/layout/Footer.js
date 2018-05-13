import React, { Component } from 'react';
import { Link, Paragraph } from '../styles';
import Seperator from './Seperator';

export default class Footer extends Component {
    render() {
        return (
          <div>
            <Seperator></Seperator>
            <div className="row bm-40">
              <div className="large-6">
                <Link className="bm-10" href="#">Terms and conditions</Link>
                <Link className="bm-10" href="#">Privacy Policies</Link>
                <Link className="bm-10" href="https://www.instagram.com/idrottskoll/">F&ouml;lj oss på Instagram</Link>
              </div>
              <div className="large-6 text-right">
                <Paragraph>© Idrottskoll 2018</Paragraph>
              </div>
            </div>
          </div>
        );
    }
}