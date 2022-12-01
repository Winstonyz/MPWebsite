import React from 'react';
import { Card, CardTitle, CardImg, CardBody, Button } from 'shards-react';

export default function AboutMarci() {
  return (
    <Card style={{ maxWidth: '300px' }}>
      <CardImg src="https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/44/IenMarci_Lib.jpg" />
      <CardBody>
        <CardTitle>About Marci</CardTitle>
        <p>
          Marci Ien is a devoted Toronto community leader and journalist who has
          dedicated her life to providing a voice for those who need it most,
          and has served as our Member of Parliament for Toronto Centre since
          October 2020. Born in St. Jamestown and raised in Toronto, where she
          lives with her children Blaize and Dash, Marci has seen first hand the
          opportunities and challenges our city faces.
        </p>
        <Button>Read more &rarr;</Button>
      </CardBody>
    </Card>
  );
}
