import React from 'react';
import { Article } from '../../components';
import './articles.css';
import { imageOne, imageTwo, imageThree, imageFour } from './articleImages';

const Articles = () => {
  return (
    <div id="blog" className="easybank__articles page__section-in">
      <div className="easybank__articles-header">
        <h2>Latest Articles</h2>
      </div>
      <div className="easybank__articles-list">
        <Article
          img={imageOne}
          author="By Claire Robinson"
          title="Receive money in any currency with no fees"
        >
          The world is getting smaller and we’re becoming more mobile. So why
          should you be forced to only receive money in a single …
        </Article>
        <Article
          img={imageTwo}
          author="By Wilson Hutton"
          title="Treat yourself without worrying about money"
        >
          Our simple budgeting feature allows you to separate out your spending
          and set realistic limits each month. That means you …
        </Article>
        <Article
          img={imageThree}
          author="By Wilson Hutton"
          title="Receive money in any currency with no fees"
        >
          Take your Easybank card wherever you go We want you to enjoy your
          travels. This is why we don’t charge any fees on purchases while
          you’re abroad. We’ll even show you …
        </Article>
        <Article
          img={imageFour}
          author="By Claire Robinson"
          title="Receive money in any currency with no fees"
        >
          Our invite-only Beta accounts are now live! After a lot of hard work
          by the whole team, we’re excited to launch our closed beta. It’s easy
          to request an invite through the site ...
        </Article>
      </div>
    </div>
  );
};

export default Articles;
