const BASE_URL = "https://devto-clonejs-default-rtdb.firebaseio.com/posts"


const createPost = async (postsObject) => {
    let response = await fetch(`${BASE_URL}/.json`, {
        method: "POST",
        body: JSON.stringify(postsObject),
    });
    let data = await response.json();
    return data;
};

createPost({
    Comments: "Genial!", creationDate:" 23 / 04 / 2024", hashtag: "#JS", image: "N/A",
    reactions: 320, relevance: "Alta", text: "asdfasdfasdf", title: "grsghterh"
});


createPost({
    Comments: "Muy interesante", creationDate:" 11 / 09 / 2022", hashtag: "#CSS", image: "N/A",
    reactions: 134, relevance: "Normal", text: "asdfasdfasdf", title: "grsghterh"
});

createPost({
    Comments: "", creationDate:" 22 / 05 / 2019", hashtag: "#CSS", image: "N/A",
    reactions: 79, relevance: "Baja", text: "asdfasdfasdf", title: "grsghterh"
});

createPost({
    Comments: "Gracias por compartir la información, muy útil", creationDate:" 16 / 11 / 2023", hashtag: "#HTML", image: "N/A",
    reactions: 452, relevance: "Alta", text: "asdfasdfasdf", title: "grsghterh"
});

createPost({
    Comments: "Increíble", creationDate:" 09 / 06 / 2024", hashtag: "#JS", image: "N/A",
    reactions: 239, relevance: "Normal", text: "asdfasdfasdf", title: "grsghterh"
});