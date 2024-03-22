export default defineEventHandler(async (event) => {

    // // handel query params
    // const { name } = useQuery(event)

    // // handle post data
    // const { age } = await useBody(event)

    // api call with private key

    const { data } = await $fetch(
			'https://api.currencyapi.com/v3/latest?apikey=cur_live_v9NnDCI6WlfyqezTZE3J9iYRN4DDABdXRvEdmrfJ'
		)

    return data
})