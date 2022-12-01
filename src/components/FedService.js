import React from 'react';

import { Collapse, Button } from 'shards-react';

export default class FedService extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button
          squared
          size="lg"
          theme="danger"
          style={{ width: '100%', height: '12vh' }}
          onClick={this.toggle}
        >
          Services Provided by Our Office
        </Button>
        <Collapse open={this.state.collapse}>
          <div className="p-3 mt-3 border rounded">
            <h5>Our office can assist you with:</h5>
            <p>
              ★ National Student Loan Service Centre
              <br></br>★ guaranteed income supplement
              <br></br>★ citizenship and immigration
              <br></br>★ Canada pension plan (cpp)
              <br></br>★ employment insurance<br></br>★ Canada child benefit
              <br></br>★ Canada revenue agency <br></br>★ old age security
              <br></br>★ passport Canada <br></br>★ veteran affairs<br></br>
            </p>
            <p>
              For more details, please contact our office:
              <a href="https://www.ontario.ca/page/serviceontario">
                Contact Us
              </a>
            </p>
          </div>
        </Collapse>
      </div>
    );
  }
}
