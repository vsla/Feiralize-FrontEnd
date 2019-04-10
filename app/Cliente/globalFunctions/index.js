
export async function getProductsFromServer() {
    try {
            let response = await fetch(
                'https://feiralize-api.herokuapp.com/products',
            );
            let responseJson = await response.json();
            console.log(responseJson)
            return responseJson;
        } catch (error) {
            console.error(error);
        }
        
}