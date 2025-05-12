const ACCESS_KEY = 'm9T3rpv25gL1o6g7rsmC4bDb7uFlBAVceNVYFIFH07Y'

export async function fetchImageForWord(word) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(word)}&per_page=1&orientation=squarish`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  )

  const data = await response.json()
  return data.results[0]?.urls?.small || null
}
