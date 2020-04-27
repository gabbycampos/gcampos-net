import React, { useState, useEffect } from 'react';
import Meme from '../photos/meme.jpg';
import DonkeyShow from '../photos/donkeyShow.JPG';

function useGiphy(query) {
    const [results, setResults] = useState([]); // local useState of this custom hook
    const [loading, setLoading] = useState(false);

    useEffect(() => { // componentDidMount + componentDidUpdate
        async function fetchData() { // componentWillUnmount 
            try { //try catch is async await
                setLoading(true);
                const response = await fetch(
                    `https://api.giphy.com/v1/gifs/search?api_key=ucN2QlY08zcfkQAAgPpssfDMiqcS5LY1&q=${query}&limit=1&offset=0&rating=G&lang=en`
                );
                const json = await response.json();

                setResults(
                    json.data.map(item => {
                        return item.images.preview.mp4;
                    })
                );
            } finally { // fianlly means it runs no matter what.
                setLoading(false);
            }
        }

        if (query !== '') {
            fetchData();
        }
    }, [query]); //when this query changes, pass it up, then it will fetch, then set results to setResults on top.

    return [results, loading]; // at last it will return here, then render down in results.
}

const Blog = () => {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [results, loading] = useGiphy(query);
    return (
        <div className="row-blog">
            <div className="column-blog">

                <div class="card">
                    <div className="giphy">
                        <form onSubmit={e => {
                            e.preventDefault();
                            setQuery(search);
                        }}>

                            <input
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="enter a word"
                            />
                            <button type="submit">Submit</button>
                        </form>
                        <br />
                        {loading ? (
                            <h1>Loading</h1>
                        ) : (
                                results.map(item => <video autoPlay loop key={item} src={item} />)
                            )}
                    </div>
                </div>

                <div className="card">
                    <h2>People I like.</h2>
                    <div className="links">
                        <a href={"https://bakasucks.myshopify.com/"} className="people-links" target="_blank" rel="noopener noreferrer">bakasucks</a>
                        <a href={"https://www.echothehuman.com/"} className="people-links" target="_blank" rel="noopener noreferrer">echothehuman</a>
                        <a href={"http://www.genevievepascolla.com/"} className="people-links" target="_blank" rel="noopener noreferrer">genevivepascolla</a>
                        <a href={"http://kevinmichaelbriggs.com/"} className="people-links" target="_blank" rel="noopener noreferrer">kevinmichaelbriggs</a>
                        <a href={"https://www.jasongregoryforest.com/"} className="people-links" target="_blank" rel="noopener noreferrer">jasongregoryforest</a>
                        <a href={"http://davidramis-us.us/"} className="people-links" target="_blank" rel="noopener noreferrer">davidramis</a>
                        <a href={"https://justinloans.bandcamp.com/"} className="people-links" target="_blank" rel="noopener noreferrer">justinloans</a>
                        <a href={"https://patrickburnell.cargo.site/"} className="people-links" target="_blank" rel="noopener noreferrer">patrickburnell</a>
                    </div>
                    <p>Check out their websites, enjoy!</p>
                </div>

                <div class="card">
                    <h2>An Elk out and about.</h2>
                    <div className="elk">
                        <iframe src={"https://www.nps.gov/media/video/embed.htm?id=CEF4E37F-1DD8-B71B-0B7B5EC8C8071E13"}
                            width={"480"} height={"306"} frameBorder={"0"}
                            scrolling={"auto"}
                            allowFullScreen
                            title={"elk"}
                        />
                    </div>
                </div>

                <div class="card">
                    <h2>3D</h2>
                    <h5>February 14, 2020</h5>
                    <div class="donut">
                        <iframe className="donut" src={"https://player.vimeo.com/video/391622930"}
                            width={"640"} height={"564"}
                            frameBorder={"0"}
                            allow={"autoplay; fullscreen"}
                            allowFullScreen
                            title={"donut video"}
                        />
                    </div>
                    <p>Have started learning Blender and Maya, mostly Blender. I’m looking forward to using
                        Python with it, hopefully I haven’t forgotten much of the language. Meanwhile, this was fun.</p>
                </div>

                <div class="card">
                    <h2>Art Show</h2>
                    <h5>February, 3rd 2018</h5>
                    <div class="art-show">
                        <img className="donkey" src={DonkeyShow} alt="donkey gallery" style={{ width: "550px" }} />
                    </div>
                    <p>I shared a space with USUSUS and Z. Goulet at Co-Prosperity Sphere in Bridgeport.
                        I printed three large photographs from the photo series Oatman, Arizona.</p>
                </div>

                <div class="card">
                    <h2>1SE</h2>
                    <h5>January 1, 2017</h5>
                    <div class="second-video">
                        <iframe src={"https://player.vimeo.com/video/405034056"}
                            width={"640"} height={"564"}
                            frameborder={"0"}
                            allow={"autoplay; fullscreen"}
                            allowfullscreen
                            title="one second everyday video"
                        />
                        <p>I recorded a 1 second video everyday in 2016, my first year in Chicago, IL.</p>
                    </div>
                </div>

                <div className="card">
                    <h2>A classic.</h2>

                    <div className="meme">
                        <img className="meme" src={Meme} alt="meme" style={{ width: '400px' }} />
                    </div>
                    <p>This is a great meme.</p>
                </div>
                <br />
            </div>
        </div>
    )
};

export default Blog;