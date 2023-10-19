import { useHistory } from "react-router-dom";

const GalleryContent = ({ artworks }) => {
    const history = useHistory();

    return (
        <div className="gallery-content">
            <div className="gallery-card-container">
                {
                    (artworks) ? (
                        artworks.map(artwork => {
                            return (
                                <div className="gallery-card" key={artwork.id}
                                    onClick={() => {
                                        history.push(`/artworks/${artwork.id}`)
                                    }}
                                >
                                    <img src={"https://www.artic.edu/iiif/2/" + artwork.image_id + "/full/843,/0/default.jpg"}
                                        className="list-img"
                                        onError={(e) => {
                                            const alt_img_ids = artwork.alt_image_ids;
                                            if (alt_img_ids.length > 0) {
                                                try {
                                                    let alt_img_url = "https://www.artic.edu/iiif/2/" + artwork.alt_image_ids[0] + "/full/843,/0/default.jpg";
                                                    if (e.target.src !== alt_img_url) {
                                                        e.target.src = alt_img_url;
                                                    }
                                                } catch (error) {
                                                }
                                            } else {
                                                e.target.src = "/default.jpg";
                                            }
                                        }}
                                        alt="" />
                                </div>
                            )
                        })
                    ) : ""
                }
            </div>
        </div>
    );
}

export default GalleryContent;