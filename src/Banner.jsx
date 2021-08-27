import React from "react";
import "bulma";

class Banner extends React.Component {
  render() {
    return (
      <section class="hero is-primary is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">Hello, Bulma!</h1>
            <h2 class="subtitle">This is react app feat. Bulma</h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
