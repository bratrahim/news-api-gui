const topicBackgrounds = {
  business: 'https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b207890c10d8df3f11b7a520ad57d177&auto=format&fit=crop&w=1350&q=80',
  science: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ab4ea4fd87e2144a8662bee0164010d&auto=format&fit=crop&w=1350&q=80',
  technology: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f0ad5bf182a8aff79a57dd18988fd1d&auto=format&fit=crop&w=1302&q=80',
  general: 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2abcdcc96e92e169db38fccb99a3c911&auto=format&fit=crop&w=1534&q=80',
};

const abstractBackgrounds = [
  'https://images.unsplash.com/photo-1509600611693-d6d9ebac8cef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=20fa2a220f4b2ef8b424f4ae58c800fd&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1519806390608-acf7ef9c8d1b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a489de1b153f25c3dce7e2c1325c956&auto=format&fit=crop&w=1534&q=80',
  'https://images.unsplash.com/photo-1508392196713-1391ddb22a2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d8de5501579c2794aa2f256c18a3e7&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1512459134034-f8f5c50df27d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a207229f289e98c8f9eade86df9de607&auto=format&fit=crop&w=1416&q=80',
  'https://images.unsplash.com/photo-1494228366869-07a7106eca9f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92319473d79199f68d30ccb5d72a7737&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1477336074447-9d9d6d10c422?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38af603a4b081b51489a1975ef624a32&auto=format&fit=crop&w=1350&q=80',
];

const getTopicBackground = topic => topicBackgrounds[topic];



const getAbstractBackground = title => abstractBackgrounds[title.charCodeAt(2)%abstractBackgrounds.length];

export { getTopicBackground, getAbstractBackground };


