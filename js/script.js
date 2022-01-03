



let state = {
    profile: {
      name: 'F2E',
      email: 'f2e@gmail.com',
      photoURL: 'https://firebasestorage.googleapis.com/v0/b/f2e2018-10e3d.appspot.com/o/users%2Fjsf2e.png?alt=media&token=3e40fcf8-0cef-45f6-a383-35a3e42b73d4'
    },
    uploadFile: '',
    posts: [
      {
        _id: '0',
        title: 'socleansofreshh',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg',
        date: "2021/1/2",
        timeStamp: 0000
      },
      {
        _id: '1',
        title: 'socleansofreshh',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg',
        date: "2021/1/3",
        timeStamp: 0001
      },
      {
        _id: '2',
        title: 'socleansofreshh',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg',
        date: "2021/1/4",
        timeStamp: 0002
      }
    ]
  };
  
render()


function render() {
    $('#instagram-post').html('');
    state.posts.forEach(function (post) {
      let postItem =
        `<li class="news_item libtn">
            <a href="">
                <img class="news_item_img" src="${post.image}" alt="${post.title}">
                <div class="news_item_cover">
                    <p class="news_item_see textNI">SEE MORE</p>
                    <p class="news_item_title textNIp">${post.title}</p>
                    <p class="news_item_day textNIp">${post.day}</p>
                </div>
            </a>
        </li>

    `;
      $('#news_item_box').append(postItem);
    });
  
  }