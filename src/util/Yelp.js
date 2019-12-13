const apiKey = '9Y1iL8Azg0hChgfTeAs0nc0NfhUH4wkwFT2WPe_p621F1z7CO6TQnGVxDotuTHXF8q8OEfOSef71TEmMxTPeIWtKCTK4tdwPbXClz3A2fsb4WyJH82eaN4CxzabzXXYx';

const Yelp = {
    // a method return a promise
    search: function (term, location, sortBy) {
        // https://api.yelp.com/v3/businesses/search?term=TERM&location=LOCATION&sort_by=SORT_BY
        // prepend an API called CORS Anywhere
        // https://cors-anywhere.herokuapp.com/
        // fetch() is a browser API, which old browser may not support
        return fetch(
            // first parameter
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            // second parameter is an object
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                // return an array of business
                return jsonResponse.businesses.map(business => {
                    // return a business object
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.map(category => {
                            return category.title;
                        }),
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
        });
    }
};

export default Yelp;