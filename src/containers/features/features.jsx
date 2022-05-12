import React from 'react';
import { Feature } from '../../components';
import './features.css';
import { iconOnline, iconBudgeting, iconOnboarding, iconApi } from './icons';

const Features = () => {
  return (
    <div id="about" className="easybank__features page__section-in">
      <div className="easybank__features-header">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="easybank__features-list">
        <Feature
          img={iconOnline}
          title="Online Banking"
          body="Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world."
        />
        <Feature
          img={iconBudgeting}
          title="Simple Budgeting"
          body="See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits."
        />
        <Feature
          img={iconOnboarding}
          title="Fast Onboarding"
          body="We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away."
        />
        <Feature
          img={iconApi}
          title="Open API"
          body="Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier."
        />
      </div>
    </div>
  );
};

export default Features;
