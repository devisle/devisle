import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Highlight from 'react-highlight';
import "../../../node_modules/highlight.js/styles/mono-blue.css";
import { jsonToBibtex } from "@devisle/reference-js";
import styles from "./Reference.module.scss";

const content = {
  references: [
    {
      type: "ARTICLE",
      key: "smit54",
      AUTHOR: "J. G. Smith and H. K. Weston",
      TITLE: "Nothing Particular in this Years History",
      YEAR: "1954",
      JOURNAL: "J. Geophys. Res.",
      VOLUME: "2",
      PAGES: "14-15"
    },
    {
      type: "BOOK",
      key: "colu92",
      AUTHOR: "Christopher Columbus",
      TITLE: "How I Discovered America",
      YEAR: "1492",
      PUBLISHER: "Hispanic Press",
      ADDRESS: "Barcelona"
    }
  ]
};

const Reference = () => {
  useEffect(() => {
    jsonToBibtex(JSON.stringify(content), "references")
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.Reference}>
        <h1>Reference JS</h1>
        <p>
          Reference JS is a collection of parsing functions for Clients and Node
          JS that allow you to import, export and convert between BibTeX, JSON
          (For now), and in the future EndNote, XML files and more. <br />Use npm to
          install:
        </p>
        <Highlight>{`npm install @devisle/reference-js`}</Highlight>
        <h2>Bibtex to JSON</h2>
        <p>
          Simply pass in your .bib file's content into the function as a string,
          it returns a promise, so you are able to handle the results or errors
          like so:
        </p>
        <Highlight className='js'>
            {`const { bibtexToJSON } = require("@devisle/reference-js");`}
            <br />
            <br />
            {`bibtexToJSON(content)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));`}
        </Highlight>
        <br />
        <p>The bibtexToJSON function outputs JSON like the one below:</p>
        <Highlight className='json'>
            {`{
  "total": 3,
  "references": [
      {
        "type": "article",
        "key": "smit54",
        "title": "Nothing Particular in this Years History",
        "author": "J. G. Smith and H. K. Weston",
        "year": "1954",
        "journal": "J. Geophys. Res.",
        "volume": "2",
        "pages": "14-15"
      },
      {
        "type": "book",
        "key": "colu92",
        "title": "How I Discovered America",
        "author": "Christopher Columbus",
        "year": "1492",
        "publisher": "Hispanic Press",
        "address": "Barcelona"
      }
   ]
}`}
        </Highlight>
        <br />
        <h3>Demo</h3>
        <iframe
          src="https://codesandbox.io/embed/confident-http-zdbhf?fontsize=14&hidenavigation=1&theme=dark"
          styles="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
          title="confident-http-zdbhf"
          allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        ></iframe>
        <br />
        <br />
        <h4>JSON to Bibtex</h4>
        <p>
          This same JSON file you can pass into the function as a string, we
          also specify the array of objects property as a string in the object
          like below:
        </p>
        <Highlight className='js'>
            {`const { jsonToBibtex } = require("@devisle/reference-js");`}
            <br />
            <br />
            {`const content = {
  references: [
    {
      type: "ARTICLE",
      key: "smit54",
      AUTHOR: "J. G. Smith and H. K. Weston",
      TITLE: "Nothing Particular in this Years History",
      YEAR: "1954",
      JOURNAL: "J. Geophys. Res.",
      VOLUME: "2",
      PAGES: "14-15"
    },
    {
      type: "BOOK",
      key: "colu92",
      AUTHOR: "Christopher Columbus",
      TITLE: "How I Discovered America",
      YEAR: "1492",
      PUBLISHER: "Hispanic Press",
      ADDRESS: "Barcelona"
    }
  ]
};`}
            <br />
            <br />
            {`jsonToBibtex(JSON.stringify(content), "references")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
            `}
            <br />
        </Highlight>
        <br />
        <h3>Demo</h3>
        <iframe
          src="https://codesandbox.io/embed/adoring-yalow-2r1dw?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
          styles="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
          title="JSON To Bibtex"
          allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default Reference;
