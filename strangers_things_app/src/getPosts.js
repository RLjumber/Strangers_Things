import URL from './URL';

const getPosts = async () => {
    try {
      const response = await fetch(URL.posts);
      const json = await response.json();
  
      const results = json.data.posts;
  
      // console.log("this is result: ", results);
      return results;
    } catch (e) {
      console.log("Couldn't fetch posts");
      console.error(e);
    }
  };

  export default getPosts;
