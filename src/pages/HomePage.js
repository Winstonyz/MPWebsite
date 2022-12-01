import React from 'react';

import MenuBar from '../components/MenuBar';

import { Button, Card, CardBody, CardHeader, CardImg } from 'shards-react';

import { Row, Col } from 'antd';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

class HomePage extends React.Component {
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
            style={{ width: '100%', height: 'auto' }}
            src="https://i.ibb.co/xshD0bq/toronto23.jpg"
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
            backgroundColor: 'IndianRed',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              marginTop: '4vh',
              width: '80%',
              float: 'left',
            }}
          >
            <h3
              style={{
                marginLeft: '20%',
                color: 'white',
              }}
            >
              About Marci
            </h3>
            <p
              style={{
                marginLeft: '20%',
                color: 'white',
              }}
            >
              Marci Ien is a devoted Toronto community leader and journalist who
              has dedicated her life to providing a voice for those who need it
              most, and has served as our Member of Parliament for Toronto
              Centre since October 2020. Born in St. Jamestown and raised in
              Toronto, where she lives with her children Blaize and Dash, Marci
              has seen first hand the opportunities and challenges our city
              faces.
            </p>
            <div>
              <Button
                style={{
                  color: 'white',
                  marginLeft: '70%',
                }}
                href="/bio"
              >
                Read more
              </Button>
              <p></p>
            </div>
          </div>
          <img
            style={{ overflow: 'hidden', marginTop: '3%', marginBottom: '2vh' }}
            alt="tc"
            src="https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/44/IenMarci_Lib.jpg"
          />
        </div>

        <div
          style={{
            backgroundColor: 'Snow	',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              marginTop: '4vh',
              marginLeft: '16%',
              float: 'left',
            }}
          >
            <h3>Recent Updates</h3>
            <Row>
              <Col>
                <Card style={{ maxWidth: '500px' }}>
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="MarciIen"
                    options={{ width: 400, height: 495 }}
                  />
                </Card>
              </Col>
              <Col>
                <Card style={{ marginLeft: '10%', maxWidth: '500px' }}>
                  <CardHeader>Other News</CardHeader>
                  <CardImg src="https://pbs.twimg.com/profile_banners/47338701/1609598851/1500x500" />
                  <CardBody>
                    <a href="https://www.toronto.ca/city-government/data-research-maps/neighbourhoods-communities/ward-profiles/ward-13-toronto-centre/">
                      Toronto Centre Information
                    </a>
                    <p></p>
                    <a href="https://www.facebook.com/MarciIenTO">
                      Facebook Posts
                    </a>
                    <p></p>
                    <a href="https://www.instagram.com/marci.ien/?hl=en">
                      Recent Instagram Posts
                    </a>
                    <p></p>
                    <a href="https://www.ourcommons.ca/members/en/marci-ien(107097)/votes">
                      Recent Vote Record
                    </a>
                    <p></p>
                    <a href="https://www.ourcommons.ca/publicationsearch/en/?per=107097&pubType=37">
                      Recent Parliamentary Speeches
                    </a>
                    <p></p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <p></p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'DarkRed',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              marginTop: '4vh',
              width: '80%',
              float: 'left',
              color: 'white',
              marginLeft: '17%',
            }}
          >
            <h3
              style={{
                color: 'white',
              }}
            >
              Contact Us
            </h3>
            <Row>
              <Col>
                <h4
                  style={{
                    color: 'white',
                  }}
                >
                  Email
                </h4>
                <p>marci.ien@parl.gc.ca</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4
                  style={{
                    color: 'white',
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
              <Col style={{ marginLeft: '20%' }}>
                <h4
                  style={{
                    color: 'white',
                  }}
                >
                  Constituency Office
                </h4>

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
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
