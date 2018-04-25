const backgrounds = {
  business: 'https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b207890c10d8df3f11b7a520ad57d177&auto=format&fit=crop&w=1350&q=80',
  science: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ab4ea4fd87e2144a8662bee0164010d&auto=format&fit=crop&w=1350&q=80',
  technology: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f0ad5bf182a8aff79a57dd18988fd1d&auto=format&fit=crop&w=1302&q=80',
  general: 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2abcdcc96e92e169db38fccb99a3c911&auto=format&fit=crop&w=1534&q=80',

};

const getTopicBackground = topic => backgrounds[topic];

export { getTopicBackground };
