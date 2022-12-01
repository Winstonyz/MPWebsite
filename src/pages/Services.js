import React from 'react';

import MenuBar from '../components/MenuBar';
import FedService from '../components/FedService';
import OtherService from '../components/OtherService';

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
            src="https://i.ibb.co/RzZNsR8/service2.jpg"
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
              Government Services
            </h3>
            <p
              style={{
                marginLeft: '20%',
                color: 'black',
              }}
            >
              As your member of Parliament, Marci represents the people of
              Toronto Centre in the federal government by voting on bills and
              working with other MPs to create laws on behalf of her
              constituents.
              <br />
              <br />
              As Canada’s Minister for Women and Gender Equality and Youth,
              Marci leads the Department for Women and Gender Equality to
              advance equality with respect to sex, sexual orientation, and
              gender identity or expression through the inclusion of people of
              all genders, including women, in Canada’s economic, social, and
              political life. Marci also works with the Department of Canadian
              Heritage on issues that are crucial to Canadian youths’
              development. For more details regarding Marci’s roles and works as
              a minister, please click here.
              <br />
            </p>
          </div>
          <img
            style={{
              overflow: 'hidden',
              marginTop: '8vh',
              width: '60vh',
              marginRight: '5%',
              marginLeft: '1%',
            }}
            alt="tc"
            src="https://scontent.fyto1-2.fna.fbcdn.net/v/t39.30808-6/275620095_377823700826620_6357740151733876286_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=1WCuaxu4DIsAX-PLAAG&_nc_ht=scontent.fyto1-2.fna&oh=00_AT82OEBVR26hg8k-KuhA5jTHWX1k0LKImXuNRyR2moWfng&oe=6245C8AC"
          />
        </div>

        <div
          style={{
            backgroundColor: 'IndianRed',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              marginTop: '3vh',
              float: 'left',
            }}
          >
            <p
              style={{
                marginLeft: '12%',
                marginRight: '5%',
                color: 'white',
              }}
            >
              We are here to help and guide you through services provided by
              different levels of our government. The people of Toronto Centre
              can look to their municipal, provincial or federal government for
              assistance in different matters in life.
            </p>
          </div>
        </div>

        <div>
          <FedService />
        </div>

        <div>
          <OtherService />
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

export default Services;
