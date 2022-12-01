import React from 'react';

import { Row, Col } from 'antd';

import MenuBar from '../components/MenuBar';

class BioPage extends React.Component {
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
            src="https://i.ibb.co/dpvF1VP/marciBio.jpg"
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
              About Marci
            </h3>
            <p
              style={{
                marginLeft: '20%',
                color: 'black',
              }}
            >
              Marci Ien is a devoted Toronto community leader and journalist who
              has dedicated her life to providing a voice for those who need it
              most, and has served as our Member of Parliament for Toronto
              Centre since October 2020. Born in St. Jamestown and raised in
              Toronto, where she lives with her children Blaize and Dash, Marci
              has seen first hand the opportunities and challenges our city
              faces.
              <br />
              <br />
              Marci is a passionate advocate for vulnerable communities in
              Canada and around the world, with an award-winning career in
              journalism and television that has spanned three decades. She has
              travelled internationally with Journalists for Human Rights and
              World Vision — and here at home, Marci has worked with
              underprivileged youth as a mentor with Trust15, an afterschool
              program based in Etobicoke, and in La Loche following the shooting
              at Dene High School in 2016.
            </p>
          </div>
          <h3> </h3>
          <img
            style={{
              overflow: 'hidden',
              marginTop: '8vh',
              width: '60vh',
              marginRight: '5%',
              marginLeft: '1%',
            }}
            alt="tc"
            src="https://www.vicnews.com/wp-content/uploads/2021/11/27072260_web1_2021110412114-6184054abc1812c004b5cf8fjpeg.jpg"
          />
        </div>
        <div>
          <fedService />
        </div>

        <div
          style={{
            backgroundColor: 'Snow',
            overflow: 'hidden',
          }}
        >
          <Row>
            <Col
              style={{ marginLeft: '12%', width: '60vh', marginRight: '2vh' }}
            >
              <img
                style={{
                  width: '60vh',
                  overflow: 'hidden',
                }}
                alt="tc"
                src="https://scontent.fyto1-2.fna.fbcdn.net/v/t39.30808-6/272920860_353236749951982_7422057350811360369_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=smd1Zh-2rUwAX_TOd8W&_nc_ht=scontent.fyto1-2.fna&oh=00_AT_bDp-_WXGhOHtkYHemc1wGi3CtQ_E7se9H_war7_HzFQ&oe=624523AE"
              />
            </Col>

            <Col style={{ marginLeft: '1vh', width: '50%' }}>
              <p
                style={{
                  color: 'black',
                }}
              >
                She also supports students from these communities by co-founding
                a new scholarship at the RTA School of Media. A graduate of
                Ryerson University, Marci later returned to Ryerson as a
                distinguished visiting professor and by serving on its Board of
                Governors.
                <br />
                <br />
                After a remarkable career in journalism, Marci decided to enter
                federal politics when she announced her candidacy to represent
                Toronto Centre and subsequently, won the seat during an October
                2020 by-election.
                <br />
              </p>
            </Col>
          </Row>
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
            <p
              style={{
                marginTop: '5%',
                marginLeft: '20%',
                color: 'black',
              }}
            >
              In October 2020, just a day after being elected to Parliament,
              Marci also released her first book titled "Off Script: Living Out
              Loud" where she shares personal milestones, tales of resilience
              and kindness, dramatic moments from her career as a journalist and
              insights from the many unforgettable people that she has met and
              interviewed. Marci is committed to being the voice of Toronto
              Centre constituents in the House of Commons and continuing the
              fight alongside Prime Minister Justin Trudeau and the Liberal
              caucus for inclusion, equality and ensuring that everyone in
              Toronto Centre and across Canada have a fair chance at success.
              <br />
            </p>
          </div>
          <h3> </h3>
          <img
            style={{
              overflow: 'hidden',
              marginTop: '8vh',
              width: '60vh',
              marginRight: '5%',
              marginLeft: '1%',
            }}
            alt="tc"
            src="https://www.hilltimes.com/wp-content/uploads/2021/01/Photo-5-600x400.jpeg"
          />
        </div>
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

export default BioPage;
