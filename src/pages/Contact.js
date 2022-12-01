import React from 'react';

import { Row, Col } from 'antd';

import MenuBar from '../components/MenuBar';

class Services extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <MenuBar />
        <div>
          <img
            alt="tc"
            style={{ width: '100%', height: 'auto', marginTop: '2vh' }}
            src="https://i.ibb.co/jTLs8kC/parl.jpg"
          />
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '50%',
              fontSize: '150%',
              color: 'white',
              fontFamily: 'Garamond',
              fontVariant: 'small-caps',
              fontWeight: 'bold',
              transform: 'translate(-50%, -50%)',
            }}
          >
            Welcome to the website of Marci ien, Member of Parliament for
            Toronto Centre!
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'Snow',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              marginTop: '4vh',
              width: '60%',
              float: 'left',
            }}
          >
            <h3
              style={{
                marginLeft: '20%',
                color: 'black',
              }}
            >
              Contact Us
            </h3>
            <h5
              style={{
                marginLeft: '20%',
                color: 'black',
              }}
            >
              We are here to help! Please read the following information to be
              in contact with our office.
            </h5>
            <p
              style={{
                marginLeft: '20%',
                color: 'black',
              }}
            >
              <br></br>
              If you are a resident of the Toronto Centre riding, you can reach
              us by contacting our constituency office or Hill office:
              <br></br>
              <Row>
                <Col>
                  <h4
                    style={{
                      marginTop: '10vh',
                      color: 'black',
                    }}
                  >
                    Hill Office
                  </h4>

                  <p>
                    House of Commons Ottawa, Ontario,
                    <br />
                    Canada K1A 0A6
                    <br />
                    Telephone: 613-992-1377
                    <br />
                    Fax: 613-992-1383
                  </p>
                </Col>
                <Col style={{ marginTop: '10vh', marginLeft: '4vh' }}>
                  <h4>Constituency Office</h4>

                  <p>
                    430 Parliament Street
                    <br />
                    Toronto, Ontario
                    <br />
                    Telephone: 416-972-9749
                    <br />
                    Fax: 416-972-9891
                  </p>
                </Col>
              </Row>
            </p>
            <p
              style={{
                marginLeft: '20%',
                color: 'black',
              }}
            >
              <h4>Ministry Office</h4>
              For press requests, event booking, as well as inquiries regarding
              Marci's work in Women, Gender Equality and Youth, please contact
              her ministry office:
              <br></br>
              <a href="https://women-gender-equality.canada.ca/en/contact-minister.html">
                Office of the Minister for Women and Gender Equality
              </a>
              <br />
            </p>
          </div>
          <img
            style={{
              overflow: 'hidden',
              marginTop: '12vh',
              width: '60vh',
              marginRight: '5%',
              marginLeft: '1%',
            }}
            alt="tc"
            src="https://scontent.fyto1-2.fna.fbcdn.net/v/t39.30808-6/263846449_319583449983979_6577474024350985601_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=sTwd2ug4ceIAX_1e9mA&tn=iDXkdDMVWAEiQPg5&_nc_ht=scontent.fyto1-2.fna&oh=00_AT-2nFRT6KHAd-DwH6HKcJdTWH7HH5akITCL1_dQhRTcTQ&oe=624679B6"
          />
          <img
            style={{
              overflow: 'hidden',
              marginTop: '3vh',
              width: '60vh',
              marginRight: '5%',
              marginLeft: '1%',
            }}
            alt="tc"
            src="https://i.ibb.co/hZrxbMT/laptop1.jpg"
          />
        </div>

        <div
          style={{
            backgroundColor: 'IndianRed',
            overflow: 'hidden',
          }}
        ></div>

        <div
          style={{
            marginTop: '20vh',
            backgroundColor: 'DarkRed',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              marginTop: '2vh',
              color: 'white',
              marginLeft: '40%',
            }}
          >
            <p>Thank you for visiting MarciIenTC.ca!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
