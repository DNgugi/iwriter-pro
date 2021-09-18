import React from 'react';

const Support = () => {
  return (
    <section id="support">
      <div className="card">
        <h2>Need help?</h2>
        Call or WhatsApp us on the numbers below or shoot us an email. We are
        ready to help!
      </div>
      <div class="contacts">
        <p>
          <span class="material-icons">phone</span> 0716585138
        </p>
        <p>
          <span class="material-icons">whatsapp</span>{" "}
          <a href="https://wa.me/254716585138">0716585138</a>
        </p>
        <p>
          <span class="material-icons">email</span>{" "}
          <a href="mailto:help@iwriterpro.com">help@iwriterpro.com</a>
        </p>
      </div>
    </section>
  );
};

export default Support;