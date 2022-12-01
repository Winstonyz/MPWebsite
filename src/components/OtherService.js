import React from 'react';

import { Collapse, Button } from 'shards-react';

export default class OtherService extends React.Component {
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
          theme="success"
          style={{ width: '100%', height: '12vh' }}
          onClick={this.toggle}
        >
          Other Services
        </Button>
        <Collapse open={this.state.collapse}>
          <div className="p-3 mt-3 border rounded">
            <h5>Services Provided by Municipal and Provincial Government</h5>
            <h6>Services provided by the Government of Toronto</h6>
            <p>
              If you have concerns and need help with the following issues,
              please contact your city councillor:
              <br></br>
              libraries, parks, community water systems, housing, local police,
              roadways, parking and more
              <br></br>
              <a href="https://www.toronto.ca/city-government/council/members-of-council/">
                Contact your city councillor
              </a>
            </p>
            <p>
              City government provides services that include: Affordable Housing
              Office, Children’s Services, Civic Innovation Office, Corporate
              Security, Court Services, Employment and Social Services, Equity,
              Diversity and Human Rights, Engineering and Construction Services,
              Environment and Energy, Fire Services, Long-Term Care Homes and
              Services, Municipal Licensing and Standards, Parks, Forestry and
              Recreation, Shelter, Support and Housing Administration,
              Transportation Services.
            </p>
            <p>
              For more details, please visit:
              <a href="https://www.toronto.ca/city-government/accountability-operations-customer-service/get-involved-how-government-works/toronto-services-programs/">
                Toronto Services & Programs
              </a>
            </p>
            <h6>Services provided by the Government of Ontario</h6>
            <p>
              If you have concerns and need help with the following issues,
              please contact your MPP:
              <br></br>
              Natural resources and environment, hospitals, property and civil
              rights in the province, administration of justice, social
              services, provincial highways, culture and tourism, prisons, and
              post-secondary education
              <br></br>
              <a href="https://www.ola.org/en/members/all/suze-morrison">
                Contact your MPP
              </a>
            </p>
            <p>
              Ontario government also provides registration services that
              include: drivers license, vehicles, Health card, Organ and tissue
              donation, ID, Fishing, hunting and camping, Housing and property,
              Security guards and private investigators, College or university
              and more
            </p>
            <p>
              For more details, please visit:
              <a href="https://www.ontario.ca/page/serviceontario">
                Services Ontario
              </a>
            </p>
          </div>
        </Collapse>
      </div>
    );
  }
}
