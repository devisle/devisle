import React from "react";
import Navbar from "../Navbar";
import styles from "./Reference.module.scss";

const Reference = () => {
  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.Reference}>
        <h2>Reference JS</h2>
        <span>
          Reference JS is a collection of parsing functions for Clients and Node
          JS that allow you to import, export and convert between BibTeX, JSON
          (For now), and in the future EndNote, XML files and more. Use npm to
          install:
        </span>
        <pre>
          <code>{`npm install @devisle/reference-js`}</code>
        </pre>
        <h4>Bibtex to JSON</h4>
        <span>
          Simply pass in your .bib file's content into the function, it returns
          a promise, so you are able to handle the results or errors like so:
        </span>
        <pre>
          <code>
            {`const { bibtexToJSON } = require("@devisle/reference-js");`}
            <br />
            <br />
            {`bibtexToJSON(content)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
            `}
            <br />
          </code>
        </pre>

        <h4>JSON to Bibtex</h4>
        <span>The bibtexToJSON function outputs JSON like the one below:</span>
        <br />
        <pre>
          <code>
            {`
  {
    "references": [
      {
        "type": "ARTICLE",
        "key": "smit54",
        "AUTHOR": "J. G. Smith and H. K. Weston",
        "TITLE": "Nothing Particular in this Years History",
        "YEAR": "1954",
        "JOURNAL": "J. Geophys. Res.",
        "VOLUME": "2",
        "PAGES": "14-15"
      },
      {
        "type": "BOOK",
        "key": "colu92",
        "AUTHOR": "Christopher Columbus",
        "TITLE": "How I Discovered America",
        "YEAR": "1492",
        "PUBLISHER": "Hispanic Press",
        "ADDRESS": "Barcelona"
      }
    ]
  }  
            `}
          </code>
        </pre>
        <br />
        <span>
          This same JSON file you can pass into the function, we also specify
          the array of objects property as a string in the object like below:
        </span>
        <pre>
          <code>
            {`const { jsonToBibtex } = require("@devisle/reference-js");`}
            <br />
            <br />
            {`jsonToBibtex(content, "references")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
            `}
            <br />
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Reference;
