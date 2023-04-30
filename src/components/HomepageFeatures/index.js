import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    link: '/docs/basic',
    title: '入门教程',
    img: require('@site/static/img/1.png').default,
    description: (
            <>
            从零开始介绍Stable Diffusion
            </>
    ),
  },
  {
    link: '/docs/advanced',
    title: '高级教程',
    img: require('@site/static/img/2.png').default,
    description: (
      <>
            深入理解Stable Diffusion
      </>
    ),
  },
  {
    link: '/docs/practice',
    title: '实践',
    img: require('@site/static/img/3.png').default,
    description: (
      <>
            使用Stable Diffusion实战
      </>
    ),
  },
];

function Feature({link, img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link}>
        <div className="text--center">
            <img src={img} className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
