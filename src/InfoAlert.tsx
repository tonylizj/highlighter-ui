// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const apiLocation = 'https://highlighter-api.herokuapp.com/';
const sourceLocation = 'https://github.com/tonylizj/highlighter';
const UISourceLocation = 'https://github.com/tonylizj/highlighter-ui';

const InfoAlert = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="primary">
        <Alert.Heading>About highlighter</Alert.Heading>
        <p>
          highlighter is an API that provides syntax highlighting of code for numerous
          languages. It also includes a Discord bot which can highlight your code in chat,
          and (in my opinion) provides much better highlighting than the built in options
          in Discord.
        </p>
        <p>
          This page presents a simple UI to send POST requests to the highlighter API at
          {' '}
          <Alert.Link href={apiLocation}>{apiLocation}</Alert.Link>
          .
        </p>
        <p>
          Source code can be found at
          {' '}
          <Alert.Link href={sourceLocation}>{sourceLocation}</Alert.Link>
          {' '}
          and
          {' '}
          <Alert.Link href={UISourceLocation}>{UISourceLocation}</Alert.Link>
          .
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-primary">
            Close
          </Button>
        </div>
      </Alert>

      {show ? null : <Button variant="primary" onClick={() => setShow(true)}>About highlighter</Button>}
    </>
  );
};

export default InfoAlert;
