import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./Rules.module.scss";

const Rules = () => (
  <>
    <Navbar />
    <div className={styles.Rules}>
      <h3>1. Everybody</h3>
      <p>
        a) Participate in good faith. This means asking questions that are meant
        to be answered, providing advice that is meant to be followed, and
        otherwise not being disingenuous. This isn’t a “no-fun” rule; you won’t
        be banned for lightheartedly trolling or joking with people in the
        server who know you. We do expect that the majority of your
        contributions (outside of off topic channels) will be on topic for the
        server—requesting or providing open-source-related help, discussing web
        development, and attempting to better yourself and advance your career.
      </p>
      <p>b) Read and follow the advice given in the tips page.</p>
      <p>c) Don’t derail conversations or snipe people who ask questions.</p>
      <p>
        d) Be friendly and professional. Don’t make people feel stupid for
        asking a question or belittle their choices or opinions.{" "}
      </p>
      <p>e) Don’t direct users to pirated materials.</p>

      <h4>1.1 Above and beyond</h4>

      <p>a) Be welcoming to new joiners. </p>
      <p>
        b) Tell the moderators when somebody has been going above and
        beyond—help us identify great people.{" "}
      </p>
      <p>
        c) Report spammers and unwelcoming behavior to moderators and admins.{" "}
      </p>
      <p>d) Answer more questions than you ask. </p>
      <p>
        e) Treat all developers with respect, regardless their orientation.{" "}
      </p>
      <p>f) Treat our young joiners with respect and patience. </p>

      <h3>2. Moderators, All of the above, and: </h3>

      <p>
        a) Be consistently among the most helpful members of the server for an
        extended period of time. We don’t collect metrics on this, but it should
        be obvious to any active member who deserves this recognition.{" "}
      </p>
      <p>b) Be humble. </p>

      <h4>2.1 Above and beyond </h4>

      <p>a) Help direct traffic through the server. </p>
      <p>
        b) If a question is better suited for a different channel (or server!),
        direct them where to take it.{" "}
      </p>
      <p>
        c) If a question has gone unacknowledged, ask for more information.{" "}
      </p>
      <p>d) Refocus conversations when they get off track. </p>

      <h3>3. Admins all of the above, and: </h3>
      <p>a) Handle spammers. </p>
      <p>
        b) Take an active role in fostering a welcoming and positive
        environment.{" "}
      </p>

      <h4>3.1 Above and beyond </h4>

      <p>a) Contribute to meta conversations around running the community. </p>
      <p>b) Build and maintain a new part of the community. </p>
      <p>c) Keep the community running smoothly.</p>
      <p>
        d) First give a single warning, then failing that, ban any persons who
        break the rules immediately
      </p>
    </div>
    <Footer />
  </>
);

export default Rules;
